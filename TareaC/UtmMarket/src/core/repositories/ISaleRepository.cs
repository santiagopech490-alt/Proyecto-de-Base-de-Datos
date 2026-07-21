using UtmMarket.Core.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.Repositories;

/// <summary>
/// Contract for Sale aggregate root persistence.
/// Designed for high performance and Native AOT compatibility.
/// </summary>
public interface ISaleRepository
{
    /// <summary>
    /// Retrieves all sales using asynchronous streaming.
    /// </summary>
    /// <param name="ct">Cancellation token to cooperate with lifecycle management.</param>
    /// <returns>An async stream of Sale aggregate roots.</returns>
    IAsyncEnumerable<Sale> GetAllAsync(CancellationToken ct = default);

    /// <summary>
    /// Retrieves a complete sale aggregate by its unique identity.
    /// </summary>
    /// <param name="saleId">The unique identifier of the sale.</param>
    /// <param name="ct">Cancellation token.</param>
    /// <returns>The Sale aggregate root with its details, or null if not found.</returns>
    Task<Sale?> GetByIdAsync(int saleId, CancellationToken ct = default);

    /// <summary>
    /// Searches for sales matching the specified criteria.
    /// </summary>
    /// <param name="filter">Immutable filter object with search criteria.</param>
    /// <param name="ct">Cancellation token.</param>
    /// <returns>A filtered stream of Sale aggregate roots.</returns>
    IAsyncEnumerable<Sale> FindAsync(SaleFilter filter, CancellationToken ct = default);

    /// <summary>
    /// Persists a new sale aggregate into the store.
    /// </summary>
    /// <param name="sale">The domain Sale aggregate to add.</param>
    /// <param name="ct">Cancellation token.</param>
    /// <returns>The persisted Sale aggregate with its assigned identity.</returns>
    Task<Sale> AddAsync(Sale sale, CancellationToken ct = default);

    /// <summary>
    /// Updates an existing sale aggregate (full replacement).
    /// </summary>
    /// <param name="sale">The Sale aggregate with updated information.</param>
    /// <param name="ct">Cancellation token.</param>
    Task UpdateAsync(Sale sale, CancellationToken ct = default);
}
