using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Collections.Generic;
using System.Threading;

namespace UtmMarket.Application;

public sealed class FetchSalesByFilterUseCaseImpl(ISaleRepository repository) : IFetchSalesByFilterUseCase
{
    public IAsyncEnumerable<Sale> ExecuteAsync(SaleFilter filter, CancellationToken ct = default)
    {
        return repository.FindAsync(filter, ct);
    }
}
