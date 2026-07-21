using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using UtmMarket.Core.UseCases;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Application;

public sealed class CreateSaleUseCaseImpl(ISaleRepository repository) : ICreateSaleUseCase
{
    public async Task<Sale> ExecuteAsync(Sale sale, CancellationToken ct = default)
    {
        // Simple domain validation
        if (string.IsNullOrWhiteSpace(sale.Folio))
            throw new ArgumentException("El folio de la venta es obligatorio.");
            
        if (sale.Details.Count == 0)
            throw new InvalidOperationException("No se puede registrar una venta sin detalles.");

        return await repository.AddAsync(sale, ct);
    }
}
