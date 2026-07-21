using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Application;

public sealed class UpdateProductStockUseCaseImpl(IProductRepository repository) : IUpdateProductStockUseCase
{
    public async Task ExecuteAsync(int productId, int newStock, CancellationToken ct = default)
    {
        if (newStock < 0)
            throw new ArgumentOutOfRangeException(nameof(newStock), "El stock no puede ser negativo.");

        var existing = await repository.GetByIdAsync(productId, ct);
        if (existing is null)
            throw new KeyNotFoundException($"Producto con ID {productId} no encontrado.");

        await repository.UpdateStockAsync(productId, newStock, ct);
    }
}
