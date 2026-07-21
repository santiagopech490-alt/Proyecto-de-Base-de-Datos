using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Collections.Generic;
using System.Threading;

namespace UtmMarket.Application;

public sealed class FetchAllSalesUseCaseImpl(ISaleRepository repository) : IFetchAllSalesUseCase
{
    public IAsyncEnumerable<Sale> ExecuteAsync(CancellationToken ct = default)
    {
        return repository.GetAllAsync(ct);
    }
}
