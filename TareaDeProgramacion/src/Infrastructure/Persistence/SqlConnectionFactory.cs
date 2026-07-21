using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace TareaDeProgramacion.Infrastructure.Persistence;

public sealed class SqlConnectionFactory(IConfiguration configuration) : IDbConnectionFactory
{
    private readonly string _connectionString = configuration.GetConnectionString(\"DefaultConnection\") 
        ?? throw new InvalidOperationException(\"Connection string 'DefaultConnection' not found.\");

    public string ConnectionString 
    { 
        get => field ?? _connectionString;
        init => field = string.IsNullOrWhiteSpace(value) 
            ? throw new ArgumentException(\"Connection string cannot be empty.\") 
            : value; 
    }

    public IDbConnection CreateConnection() => new SqlConnection(ConnectionString);
}
