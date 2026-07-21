using UtmMarket.Core.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Domain Use Case to handle the orchestration and validation of new sale creation.
/// </summary>
public interface ICreateSaleUseCase
{
    /// <summary>
    /// Creates and persists a new sale within the domain.
    /// </summary>
    /// <param name="sale">The domain Sale aggregate to be created.</param>
    /// <param name="ct">Cancellation Token.</param>
    /// <returns>The persisted Sale aggregate with updated status and identity.</returns>
    Task<Sale> ExecuteAsync(Sale sale, CancellationToken ct = default);
}
