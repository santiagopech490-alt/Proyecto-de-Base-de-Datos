using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Application;

public sealed class UpdateProductUseCaseImpl(IProductRepository repository) : IUpdateProductUseCase
{
    public async Task ExecuteAsync(Product product, CancellationToken ct = default)
    {
        var existing = await repository.GetByIdAsync(product.ProductID, ct);
        if (existing is null)
            throw new KeyNotFoundException($"Producto con ID {product.ProductID} no encontrado.");

        await repository.UpdateAsync(product, ct);
    }
}
