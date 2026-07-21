using UtmMarket.Core.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Domain Use Case to find a specific sale by its unique identifier.
/// </summary>
public interface IFetchSaleByIdUseCase
{
    /// <summary>
    /// Fetches a single Sale record using its primary ID.
    /// </summary>
    /// <param name="saleId">Unique identifier of the sale.</param>
    /// <param name="ct">Cancellation Token.</param>
    /// <returns>A Sale object if found; otherwise, null.</returns>
    Task<Sale?> ExecuteAsync(int saleId, CancellationToken ct = default);
}
