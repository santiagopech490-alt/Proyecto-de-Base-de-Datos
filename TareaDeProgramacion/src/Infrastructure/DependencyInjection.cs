using Microsoft.Extensions.DependencyInjection;
using TareaDeProgramacion.Core.Repositories;
using TareaDeProgramacion.Infrastructure.Persistence;
using TareaDeProgramacion.Infrastructure.Repositories;

namespace TareaDeProgramacion.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddSingleton<IDbConnectionFactory, SqlConnectionFactory>();
        services.AddScoped<IProductRepository, ProductRepositoryImpl>();
        return services;
    }
}
