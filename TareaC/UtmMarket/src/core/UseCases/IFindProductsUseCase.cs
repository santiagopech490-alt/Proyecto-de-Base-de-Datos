using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using System.Collections.Generic;
using System.Threading;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Case of use for dynamic product searching based on criteria.
/// </summary>
public interface IFindProductsUseCase
{
    /// <summary>
    /// Filters products using the specified filter criteria.
    /// </summary>
    /// <param name="filter">Search criteria record.</param>
    /// <param name="ct">Cancellation token.</param>
    /// <returns>Filtered async stream of products.</returns>
    IAsyncEnumerable<Product> ExecuteAsync(ProductFilter filter, CancellationToken ct = default);
}
