using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Application;

public sealed class CreateProductUseCaseImpl(IProductRepository repository) : ICreateProductUseCase
{
    public async Task<int> ExecuteAsync(Product product, CancellationToken ct = default)
    {
        // Simple domain validation before persisting
        if (string.IsNullOrWhiteSpace(product.Name))
            throw new ArgumentException("El nombre del producto es obligatorio.");
            
        if (string.IsNullOrWhiteSpace(product.SKU))
            throw new ArgumentException("El SKU es obligatorio.");

        return await repository.AddAsync(product, ct);
    }
}
