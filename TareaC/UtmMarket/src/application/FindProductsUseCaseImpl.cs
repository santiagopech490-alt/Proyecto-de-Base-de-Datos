using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Collections.Generic;
using System.Threading;

namespace UtmMarket.Application;

public sealed class FindProductsUseCaseImpl(IProductRepository repository) : IFindProductsUseCase
{
    public IAsyncEnumerable<Product> ExecuteAsync(ProductFilter filter, CancellationToken ct = default)
    {
        return repository.FindAsync(filter, ct);
    }
}
