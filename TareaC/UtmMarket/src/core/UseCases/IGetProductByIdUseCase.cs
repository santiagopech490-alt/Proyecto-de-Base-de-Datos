using UtmMarket.Core.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Case of use to find a specific product by its primary identifier.
/// </summary>
public interface IGetProductByIdUseCase
{
    /// <summary>
    /// Finds a product by ID.
    /// </summary>
    /// <param name="productId">Database identifier.</param>
    /// <param name="ct">Cancellation token.</param>
    /// <returns>A Product if found; otherwise, null.</returns>
    Task<Product?> ExecuteAsync(int productId, CancellationToken ct = default);
}
