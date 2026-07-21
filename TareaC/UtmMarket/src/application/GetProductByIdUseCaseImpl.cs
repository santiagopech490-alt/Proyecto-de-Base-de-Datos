using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Application;

public sealed class GetProductByIdUseCaseImpl(IProductRepository repository) : IGetProductByIdUseCase
{
    public Task<Product?> ExecuteAsync(int productId, CancellationToken ct = default)
    {
        return repository.GetByIdAsync(productId, ct);
    }
}
