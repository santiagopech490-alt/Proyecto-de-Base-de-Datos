using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Application;

public sealed class FetchSaleByIdUseCaseImpl(ISaleRepository repository) : IFetchSaleByIdUseCase
{
    public Task<Sale?> ExecuteAsync(int saleId, CancellationToken ct = default)
    {
        return repository.GetByIdAsync(saleId, ct);
    }
}
