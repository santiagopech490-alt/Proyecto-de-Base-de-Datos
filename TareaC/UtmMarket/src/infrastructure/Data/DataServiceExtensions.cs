using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using UtmMarket.Infrastructure.Data;
using UtmMarket.Core.Repositories;
using UtmMarket.Infrastructure.Repositories;

namespace UtmMarket.Infrastructure.Data;

/// <summary>
/// Extensiones de servicios para la infraestructura de datos de .NET 10.
/// </summary>
public static class DataServiceExtensions
{
    /// <summary>
    /// Registra la factoría de conexiones y servicios de persistencia relacionados.
    /// </summary>
    public static IServiceCollection AddSqlInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection") 
                               ?? throw new InvalidOperationException("DefaultConnection not found in configuration.");

        services.AddSingleton<IDbConnectionFactory>(_ => new SqlConnectionFactory(connectionString));
        
        // Registro de repositorios concretos (AOT Safe)
        services.AddScoped<IProductRepository, ProductRepositoryImpl>();
        services.AddScoped<ISaleRepository, SaleRepositoryImpl>();
        
        return services;
    }
}
