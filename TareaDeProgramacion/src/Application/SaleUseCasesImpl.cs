using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.Core.Repositories;
using TareaDeProgramacion.Core.UseCases;

namespace TareaDeProgramacion.Application;

public sealed class FetchAllSalesUseCaseImpl(ISaleRepository repository) : IFetchAllSalesUseCase
{
    public IAsyncEnumerable<Sale> ExecuteAsync(CancellationToken cancellationToken = default) 
        => repository.GetAllAsync(cancellationToken);
}

public sealed class FetchSaleByIdUseCaseImpl(ISaleRepository repository) : IFetchSaleByIdUseCase
{
    public Task<Sale?> ExecuteAsync(int id, CancellationToken cancellationToken = default) 
        => repository.GetByIdAsync(id, cancellationToken);
}

public sealed class FetchSalesByFilterUseCaseImpl(ISaleRepository repository) : IFetchSalesByFilterUseCase
{
    public IAsyncEnumerable<Sale> ExecuteAsync(SaleFilter filter, CancellationToken cancellationToken = default) 
        => repository.FindAsync(filter, cancellationToken);
}

public sealed class CreateSaleUseCaseImpl(ISaleRepository repository) : ICreateSaleUseCase
{
    public async Task<Sale> ExecuteAsync(Sale sale, CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(sale);
        if (sale.Details.Count == 0) throw new ArgumentException("Sale must have at least one detail line.");
        
        return await repository.AddAsync(sale, cancellationToken);
    }
}

public sealed class UpdateSaleStatusUseCaseImpl(ISaleRepository repository) : IUpdateSaleStatusUseCase
{
    public async Task<bool> ExecuteAsync(int id, SaleStatus newStatus, CancellationToken cancellationToken = default)
    {
        var sale = await repository.GetByIdAsync(id, cancellationToken);
        if (sale is null) return false;

        sale.Status = newStatus;
        return await repository.UpdateAsync(sale, cancellationToken);
    }
}
