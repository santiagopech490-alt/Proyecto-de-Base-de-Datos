using UtmMarket.Core.Entities;
using UtmMarket.Core.Repositories;
using System.Collections.Generic;
using System.Threading;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Domain Use Case to filter sales based on complex criteria.
/// </summary>
public interface IFetchSalesByFilterUseCase
{
    /// <summary>
    /// Retrieves a filtered list of sales using domain criteria.
    /// </summary>
    /// <param name="filter">Domain object containing filter parameters.</param>
    /// <param name="ct">Cancellation Token.</param>
    /// <returns>An async stream of filtered Sale records.</returns>
    IAsyncEnumerable<Sale> ExecuteAsync(SaleFilter filter, CancellationToken ct = default);
}
