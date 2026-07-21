using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Application;

public sealed class UpdateSaleStatusUseCaseImpl(ISaleRepository repository) : IUpdateSaleStatusUseCase
{
    public async Task ExecuteAsync(int saleId, SaleStatus newStatus, CancellationToken ct = default)
    {
        var existing = await repository.GetByIdAsync(saleId, ct);
        if (existing is null)
            throw new KeyNotFoundException($"Venta con ID {saleId} no encontrada.");

        existing.Status = newStatus;
        await repository.UpdateAsync(existing, ct);
    }
}
