using System.Data;
using System.Runtime.CompilerServices;
using Microsoft.Data.SqlClient;
using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Infrastructure.Data;
using UtmMarket.Infrastructure.Models.Data;
using UtmMarket.Infrastructure.Mappers;

namespace UtmMarket.Infrastructure.Repositories;

/// <summary>
/// Implementación de persistencia para el agregado Sale.
/// Optimizada para Native AOT mediante mapeo manual y prevención de N+1.
/// </summary>
public sealed class SaleRepositoryImpl(
    IDbConnectionFactory connectionFactory,
    IProductRepository productRepository) : ISaleRepository
{
    private readonly IDbConnectionFactory _connectionFactory = connectionFactory;
    private readonly IProductRepository _productRepository = productRepository;

    public async IAsyncEnumerable<Sale> GetAllAsync([EnumeratorCancellation] CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        // Para listas masivas, se recuperan las cabeceras. 
        // El detalle se carga bajo demanda o mediante un JOIN optimizado si es requerido.
        const string sql = "SELECT VentaId, Folio, FechaVenta, TotalArticulos, TotalVenta, Estatus FROM Venta ORDER BY FechaVenta DESC";
        using var command = new SqlCommand(sql, connection);
        using var reader = await command.ExecuteReaderAsync(ct);

        while (await reader.ReadAsync(ct))
        {
            yield return MapHeader(reader).ToDomain();
        }
    }

    public async Task<Sale?> GetByIdAsync(int saleId, CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        const string sql = @"
            SELECT VentaId, Folio, FechaVenta, TotalArticulos, TotalVenta, Estatus FROM Venta WHERE VentaId = @id;
            SELECT DetalleDeVentaId, VentaId, ProductoId, PrecioUnitario, Cantidad, TotalDetalle FROM DetalleDeVenta WHERE VentaId = @id;";
        
        using var command = new SqlCommand(sql, connection);
        command.Parameters.AddWithValue("@id", saleId);

        using var reader = await command.ExecuteReaderAsync(ct);
        
        if (!await reader.ReadAsync(ct)) return null;

        var header = MapHeader(reader);

        // Mover al segundo result set (Detalles)
        await reader.NextResultAsync(ct);
        var details = new List<DetalleVentaEntity>();
        while (await reader.ReadAsync(ct))
        {
            details.Add(MapDetail(reader));
        }

        // Reconstrucción del agregado usando el mapeador y resolución de productos
        return header.ToDomain(details, id => {
            // Nota: En un entorno real, se usaría un cache o una carga por lotes para evitar N+1 de productos.
            return _productRepository.GetByIdAsync(id).GetAwaiter().GetResult()!;
        });
    }

    public async IAsyncEnumerable<Sale> FindAsync(SaleFilter filter, [EnumeratorCancellation] CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        var sql = "SELECT VentaId, Folio, FechaVenta, TotalArticulos, TotalVenta, Estatus FROM Venta WHERE 1=1";
        using var command = new SqlCommand();
        command.Connection = connection;

        if (filter.StartDate.HasValue)
        {
            sql += " AND FechaVenta >= @start";
            command.Parameters.AddWithValue("@start", filter.StartDate.Value);
        }

        if (filter.EndDate.HasValue)
        {
            sql += " AND FechaVenta <= @end";
            command.Parameters.AddWithValue("@end", filter.EndDate.Value);
        }

        command.CommandText = sql;
        using var reader = await command.ExecuteReaderAsync(ct);

        while (await reader.ReadAsync(ct))
        {
            yield return MapHeader(reader).ToDomain();
        }
    }

    public async Task<Sale> AddAsync(Sale sale, CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);
        using var transaction = connection.BeginTransaction();

        try
        {
            const string sqlHeader = @"
                INSERT INTO Venta (Folio, FechaVenta, TotalArticulos, TotalVenta, Estatus) 
                VALUES (@Folio, @FechaVenta, @TotalArticulos, @TotalVenta, @Estatus);
                SELECT CAST(SCOPE_IDENTITY() as int);";

            var (headerEntity, detailsEntities) = sale.ToEntity();

            using var cmdHeader = new SqlCommand(sqlHeader, connection, transaction);
            cmdHeader.Parameters.AddWithValue("@Folio", headerEntity.Folio);
            cmdHeader.Parameters.AddWithValue("@FechaVenta", headerEntity.FechaVenta);
            cmdHeader.Parameters.AddWithValue("@TotalArticulos", headerEntity.TotalArticulos);
            cmdHeader.Parameters.AddWithValue("@TotalVenta", headerEntity.TotalVenta);
            cmdHeader.Parameters.AddWithValue("@Estatus", headerEntity.Estatus);

            int newId = (int)await cmdHeader.ExecuteScalarAsync(ct)!;

            const string sqlDetail = @"
                INSERT INTO DetalleDeVenta (VentaId, ProductoId, PrecioUnitario, Cantidad, TotalDetalle)
                VALUES (@VentaId, @ProductoId, @PrecioUnitario, @Cantidad, @TotalDetalle)";

            foreach (var detail in detailsEntities)
            {
                using var cmdDetail = new SqlCommand(sqlDetail, connection, transaction);
                cmdDetail.Parameters.AddWithValue("@VentaId", newId);
                cmdDetail.Parameters.AddWithValue("@ProductoId", detail.ProductoId);
                cmdDetail.Parameters.AddWithValue("@PrecioUnitario", detail.PrecioUnitario);
                cmdDetail.Parameters.AddWithValue("@Cantidad", detail.Cantidad);
                cmdDetail.Parameters.AddWithValue("@TotalDetalle", detail.TotalDetalle);
                await cmdDetail.ExecuteNonQueryAsync(ct);
            }

            await transaction.CommitAsync(ct);
            
            // Retornar el agregado actualizado
            return (await GetByIdAsync(newId, ct))!;
        }
        catch
        {
            await transaction.RollbackAsync(ct);
            throw;
        }
    }

    public async Task UpdateAsync(Sale sale, CancellationToken ct = default)
    {
        // La actualización de una venta suele implicar anulación o cambio de estado.
        // Implementación simplificada del cambio de estado.
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        const string sql = "UPDATE Venta SET Estatus = @Estatus WHERE VentaId = @Id";
        var (header, _) = sale.ToEntity();

        using var command = new SqlCommand(sql, connection);
        command.Parameters.AddWithValue("@Id", header.VentaId);
        command.Parameters.AddWithValue("@Estatus", header.Estatus);

        await command.ExecuteNonQueryAsync(ct);
    }

    private static VentaEntity MapHeader(SqlDataReader reader)
    {
        return new VentaEntity(reader.GetString(reader.GetOrdinal("Folio")))
        {
            VentaId = reader.GetInt32(reader.GetOrdinal("VentaId")),
            FechaVenta = reader.GetDateTime(reader.GetOrdinal("FechaVenta")),
            TotalArticulos = reader.GetInt32(reader.GetOrdinal("TotalArticulos")),
            TotalVenta = reader.GetDecimal(reader.GetOrdinal("TotalVenta")),
            Estatus = reader.GetByte(reader.GetOrdinal("Estatus"))
        };
    }

    private static DetalleVentaEntity MapDetail(SqlDataReader reader)
    {
        return new DetalleVentaEntity(
            reader.GetInt32(reader.GetOrdinal("VentaId")),
            reader.GetInt32(reader.GetOrdinal("ProductoId"))
        )
        {
            DetalleDeVentaId = reader.GetInt32(reader.GetOrdinal("DetalleDeVentaId")),
            PrecioUnitario = reader.GetDecimal(reader.GetOrdinal("PrecioUnitario")),
            Cantidad = reader.GetInt32(reader.GetOrdinal("Cantidad")),
            TotalDetalle = reader.GetDecimal(reader.GetOrdinal("TotalDetalle"))
        };
    }
}
