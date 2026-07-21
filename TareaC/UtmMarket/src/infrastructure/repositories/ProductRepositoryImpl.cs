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
/// Implementación concreta del repositorio de productos optimizada para Native AOT.
/// Utiliza mapeo manual mediante SqlDataReader para evitar la reflexión.
/// </summary>
public sealed class ProductRepositoryImpl(IDbConnectionFactory connectionFactory) : IProductRepository
{
    private readonly IDbConnectionFactory _connectionFactory = connectionFactory;

    public async IAsyncEnumerable<Product> GetAllAsync([EnumeratorCancellation] CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        const string sql = "SELECT ProductoId, Nombre, SKU, Marca, Precio, Stock FROM Producto";
        using var command = new SqlCommand(sql, connection);
        using var reader = await command.ExecuteReaderAsync(ct);

        while (await reader.ReadAsync(ct))
        {
            yield return MapToEntity(reader).ToDomain();
        }
    }

    public async Task<Product?> GetByIdAsync(int productId, CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        const string sql = "SELECT ProductoId, Nombre, SKU, Marca, Precio, Stock FROM Producto WHERE ProductoId = @id";
        using var command = new SqlCommand(sql, connection);
        command.Parameters.AddWithValue("@id", productId);

        using var reader = await command.ExecuteReaderAsync(ct);
        if (await reader.ReadAsync(ct))
        {
            return MapToEntity(reader).ToDomain();
        }

        return null;
    }

    public async IAsyncEnumerable<Product> FindAsync(ProductFilter filter, [EnumeratorCancellation] CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        var sql = "SELECT ProductoId, Nombre, SKU, Marca, Precio, Stock FROM Producto WHERE 1=1";
        using var command = new SqlCommand();
        command.Connection = connection;

        if (!string.IsNullOrWhiteSpace(filter.Name))
        {
            sql += " AND Nombre LIKE @name";
            command.Parameters.AddWithValue("@name", $"%{filter.Name}%");
        }

        if (!string.IsNullOrWhiteSpace(filter.SKU))
        {
            sql += " AND SKU = @sku";
            command.Parameters.AddWithValue("@sku", filter.SKU);
        }

        command.CommandText = sql;
        using var reader = await command.ExecuteReaderAsync(ct);

        while (await reader.ReadAsync(ct))
        {
            yield return MapToEntity(reader).ToDomain();
        }
    }

    public async Task<int> AddAsync(Product product, CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        const string sql = @"
            INSERT INTO Producto (Nombre, SKU, Marca, Precio, Stock) 
            VALUES (@Nombre, @SKU, @Marca, @Precio, @Stock);
            SELECT CAST(SCOPE_IDENTITY() as int);";

        using var command = new SqlCommand(sql, connection);
        var entity = product.ToEntity();
        
        command.Parameters.AddWithValue("@Nombre", entity.Nombre);
        command.Parameters.AddWithValue("@SKU", entity.SKU);
        command.Parameters.AddWithValue("@Marca", entity.Marca);
        command.Parameters.AddWithValue("@Precio", entity.Precio);
        command.Parameters.AddWithValue("@Stock", entity.Stock);

        var result = await command.ExecuteScalarAsync(ct);
        return result != null ? (int)result : 0;
    }

    public async Task UpdateAsync(Product product, CancellationToken ct = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        const string sql = @"
            UPDATE Producto 
            SET Nombre = @Nombre, Marca = @Marca, Precio = @Precio, Stock = @Stock 
            WHERE ProductoId = @Id";

        using var command = new SqlCommand(sql, connection);
        var entity = product.ToEntity();

        command.Parameters.AddWithValue("@Id", entity.ProductoId);
        command.Parameters.AddWithValue("@Nombre", entity.Nombre);
        command.Parameters.AddWithValue("@Marca", entity.Marca);
        command.Parameters.AddWithValue("@Precio", entity.Precio);
        command.Parameters.AddWithValue("@Stock", entity.Stock);

        await command.ExecuteNonQueryAsync(ct);
    }

    public async Task UpdateStockAsync(int productId, int newStock, CancellationToken ct = default)
    {
        if (newStock < 0) throw new ArgumentException("El stock no puede ser negativo.");

        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        await connection.OpenAsync(ct);

        const string sql = "UPDATE Producto SET Stock = @Stock WHERE ProductoId = @Id";
        using var command = new SqlCommand(sql, connection);
        command.Parameters.AddWithValue("@Id", productId);
        command.Parameters.AddWithValue("@Stock", newStock);

        await command.ExecuteNonQueryAsync(ct);
    }

    /// <summary>
    /// Mapeo manual de SqlDataReader a ProductoEntity (AOT Safe).
    /// </summary>
    private static ProductoEntity MapToEntity(SqlDataReader reader)
    {
        return new ProductoEntity(
            reader.GetString(reader.GetOrdinal("Nombre")),
            reader.GetString(reader.GetOrdinal("SKU"))
        )
        {
            ProductoId = reader.GetInt32(reader.GetOrdinal("ProductoId")),
            Marca = reader.GetString(reader.GetOrdinal("Marca")),
            Precio = reader.GetDecimal(reader.GetOrdinal("Precio")),
            Stock = reader.GetInt32(reader.GetOrdinal("Stock"))
        };
    }
}
