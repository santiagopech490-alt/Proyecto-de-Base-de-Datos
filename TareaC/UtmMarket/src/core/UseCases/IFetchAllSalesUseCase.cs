using UtmMarket.Core.Entities;
using System.Collections.Generic;
using System.Threading;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Domain Use Case to fetch all sales from the system.
/// Adheres to SRP: Solely responsible for retrieving the list of sales.
/// </summary>
public interface IFetchAllSalesUseCase
{
    /// <summary>
    /// Executes the retrieval of all sale records in a high-performance streaming manner.
    /// </summary>
    /// <param name="ct">Cancellation Token to handle long-running operations.</param>
    /// <returns>An asynchronous stream of Sale domain objects.</returns>
    IAsyncEnumerable<Sale> ExecuteAsync(CancellationToken ct = default);
}
