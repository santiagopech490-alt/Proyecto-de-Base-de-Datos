using UtmMarket.Core.Entities;
using System.Collections.Generic;
using System.Threading;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Case of use to retrieve all products from the catalog.
/// Implements SRP: Only responsible for listing operations.
/// </summary>
public interface IGetAllProductsUseCase
{
    /// <summary>
    /// Executes the retrieval of all products as an asynchronous stream.
    /// </summary>
    /// <param name="ct">Cancellation token for safe interruption.</param>
    /// <returns>An async stream of Domain objects: Product.</returns>
    IAsyncEnumerable<Product> ExecuteAsync(CancellationToken ct = default);
}
