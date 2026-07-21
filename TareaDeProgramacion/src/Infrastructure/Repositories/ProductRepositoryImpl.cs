using System.Data;
using System.Runtime.CompilerServices;
using Microsoft.Data.SqlClient;
using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.Core.Repositories;
using TareaDeProgramacion.Infrastructure.Mappers;
using TareaDeProgramacion.Infrastructure.Models.Data;
using TareaDeProgramacion.Infrastructure.Persistence;

namespace TareaDeProgramacion.Infrastructure.Repositories;

/// <summary>
/// ImplementaciÃ³n de alto rendimiento del repositorio de productos.
/// DiseÃ±ado para ser compatible con Native AOT mediante mapeo manual de ADO.NET.
/// </summary>
public sealed class ProductRepositoryImpl(IDbConnectionFactory connectionFactory) : IProductRepository
{
    private readonly IDbConnectionFactory _connectionFactory = connectionFactory;

    public async IAsyncEnumerable<Product> GetAllAsync([EnumeratorCancellation] CancellationToken cancellationToken = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        const string query = "SELECT ProductoID, SKU, Nombre, Marca, Precio, Stock FROM Producto";
        
        using var command = new SqlCommand(query, connection);
        await connection.OpenAsync(cancellationToken);
        
        using var reader = await command.ExecuteReaderAsync(cancellationToken);
        while (await reader.ReadAsync(cancellationToken))
        {
            yield return MapReaderToEntity(reader).ToDomain();
        }
    }

    public async Task<Product?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        const string query = "SELECT ProductoID, SKU, Nombre, Marca, Precio, Stock FROM Producto WHERE ProductoID = @id";
        
        using var command = new SqlCommand(query, connection);
        command.Parameters.AddWithValue("@id", id);
        await connection.OpenAsync(cancellationToken);
        
        using var reader = await command.ExecuteReaderAsync(cancellationToken);
        if (await reader.ReadAsync(cancellationToken))
        {
            return MapReaderToEntity(reader).ToDomain();
        }
        
        return null;
    }

    public async IAsyncEnumerable<Product> FindAsync(ProductFilter filter, [EnumeratorCancellation] CancellationToken cancellationToken = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        var query = "SELECT ProductoID, SKU, Nombre, Marca, Precio, Stock FROM Producto WHERE 1=1";
        
        using var command = new SqlCommand();
        command.Connection = connection;

        if (!string.IsNullOrWhiteSpace(filter.Name))
        {
            query += " AND Nombre LIKE @name";
            command.Parameters.AddWithValue("@name", $"%{filter.Name}%");
        }
        if (!string.IsNullOrWhiteSpace(filter.SKU))
        {
            query += " AND SKU = @sku";
            command.Parameters.AddWithValue("@sku", filter.SKU);
        }
        if (!string.IsNullOrWhiteSpace(filter.Brand))
        {
            query += " AND Marca LIKE @brand";
            command.Parameters.AddWithValue("@brand", $"%{filter.Brand}%");
        }

        command.CommandText = query;
        await connection.OpenAsync(cancellationToken);
        
        using var reader = await command.ExecuteReaderAsync(cancellationToken);
        while (await reader.ReadAsync(cancellationToken))
        {
            yield return MapReaderToEntity(reader).ToDomain();
        }
    }

    public async Task<int> AddAsync(Product product, CancellationToken cancellationToken = default)
    {
        var entity = product.ToEntity();
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        const string query = @"
            INSERT INTO Producto (SKU, Nombre, Marca, Precio, Stock) 
            VALUES (@sku, @nombre, @marca, @precio, @stock);
            SELECT SCOPE_IDENTITY();";
        
        using var command = new SqlCommand(query, connection);
        command.Parameters.AddWithValue("@sku", entity.SKU);
        command.Parameters.AddWithValue("@nombre", entity.Nombre);
        command.Parameters.AddWithValue("@marca", entity.Marca);
        command.Parameters.AddWithValue("@precio", entity.Precio);
        command.Parameters.AddWithValue("@stock", entity.Stock);
        
        await connection.OpenAsync(cancellationToken);
        var result = await command.ExecuteScalarAsync(cancellationToken);
        return Convert.ToInt32(result);
    }

    public async Task<bool> UpdateAsync(Product product, CancellationToken cancellationToken = default)
    {
        var entity = product.ToEntity();
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        const string query = @"
            UPDATE Producto 
            SET SKU = @sku, Nombre = @nombre, Marca = @marca, Precio = @precio, Stock = @stock 
            WHERE ProductoID = @id";
        
        using var command = new SqlCommand(query, connection);
        command.Parameters.AddWithValue("@id", entity.ProductoID);
        command.Parameters.AddWithValue("@sku", entity.SKU);
        command.Parameters.AddWithValue("@nombre", entity.Nombre);
        command.Parameters.AddWithValue("@marca", entity.Marca);
        command.Parameters.AddWithValue("@precio", entity.Precio);
        command.Parameters.AddWithValue("@stock", entity.Stock);
        
        await connection.OpenAsync(cancellationToken);
        var rows = await command.ExecuteNonQueryAsync(cancellationToken);
        return rows > 0;
    }

    public async Task<bool> UpdateStockAsync(int id, int newQuantity, CancellationToken cancellationToken = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        const string query = "UPDATE Producto SET Stock = @stock WHERE ProductoID = @id";
        
        using var command = new SqlCommand(query, connection);
        command.Parameters.AddWithValue("@id", id);
        command.Parameters.AddWithValue("@stock", newQuantity);
        
        await connection.OpenAsync(cancellationToken);
        var rows = await command.ExecuteNonQueryAsync(cancellationToken);
        return rows > 0;
    }

    public async Task<bool> DeleteAsync(int id, CancellationToken cancellationToken = default)
    {
        using var connection = (SqlConnection)_connectionFactory.CreateConnection();
        const string query = "DELETE FROM Producto WHERE ProductoID = @id";
        
        using var command = new SqlCommand(query, connection);
        command.Parameters.AddWithValue("@id", id);
        
        await connection.OpenAsync(cancellationToken);
        var rows = await command.ExecuteNonQueryAsync(cancellationToken);
        return rows > 0;
    }

    private static ProductoEntity MapReaderToEntity(SqlDataReader reader)
    {
        return new ProductoEntity(
            reader.GetInt32(reader.GetOrdinal("ProductoID")),
            reader.GetString(reader.GetOrdinal("SKU"))
        )
        {
            Nombre = reader.GetString(reader.GetOrdinal("Nombre")),
            Marca = reader.GetString(reader.GetOrdinal("Marca")),
            Precio = reader.GetDecimal(reader.GetOrdinal("Precio")),
            Stock = reader.GetInt32(reader.GetOrdinal("Stock"))
        };
    }
}
