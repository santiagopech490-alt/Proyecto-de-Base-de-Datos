using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Case of use focused on updating a product's stock availability (Atomic update).
/// </summary>
public interface IUpdateProductStockUseCase
{
    /// <summary>
    /// Updates only the stock field of a specific product.
    /// </summary>
    /// <param name="productId">ID of the target product.</param>
    /// <param name="newStock">New available quantity.</param>
    /// <param name="ct">Cancellation token.</param>
    Task ExecuteAsync(int productId, int newStock, CancellationToken ct = default);
}
