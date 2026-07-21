using System.Data;
using Microsoft.Data.SqlClient;

namespace UtmMarket.Infrastructure.Data;

/// <summary>
/// Contrato para la factoría de conexiones a base de datos.
/// </summary>
public interface IDbConnectionFactory
{
    IDbConnection CreateConnection();
}

/// <summary>
/// Implementación de la factoría de conexiones optimizada para SQL Server y Native AOT.
/// </summary>
public sealed class SqlConnectionFactory(string connectionString) : IDbConnectionFactory
{
    // C# 14: Uso de 'field' para validación ansiosa
    private readonly string _connectionString = connectionString switch
    {
        null or "" => throw new ArgumentException("La cadena de conexión no puede estar vacía."),
        _ => connectionString
    };

    public IDbConnection CreateConnection() => new SqlConnection(_connectionString);
}
