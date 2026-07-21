using Microsoft.Extensions.DependencyInjection;
using UtmMarket.Core.UseCases;
using UtmMarket.Application;

namespace UtmMarket.Application;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationUseCases(this IServiceCollection services)
    {
        // Product Use Cases
        services.AddScoped<IGetAllProductsUseCase, GetAllProductsUseCaseImpl>();
        services.AddScoped<IGetProductByIdUseCase, GetProductByIdUseCaseImpl>();
        services.AddScoped<IFindProductsUseCase, FindProductsUseCaseImpl>();
        services.AddScoped<ICreateProductUseCase, CreateProductUseCaseImpl>();
        services.AddScoped<IUpdateProductUseCase, UpdateProductUseCaseImpl>();
        services.AddScoped<IUpdateProductStockUseCase, UpdateProductStockUseCaseImpl>();

        // Sale Use Cases
        services.AddScoped<IFetchAllSalesUseCase, FetchAllSalesUseCaseImpl>();
        services.AddScoped<IFetchSaleByIdUseCase, FetchSaleByIdUseCaseImpl>();
        services.AddScoped<IFetchSalesByFilterUseCase, FetchSalesByFilterUseCaseImpl>();
        services.AddScoped<ICreateSaleUseCase, CreateSaleUseCaseImpl>();
        services.AddScoped<IUpdateSaleStatusUseCase, UpdateSaleStatusUseCaseImpl>();

        return services;
    }
}
