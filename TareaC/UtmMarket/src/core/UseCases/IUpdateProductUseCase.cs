using UtmMarket.Core.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Case of use to update general information of an existing product.
/// </summary>
public interface IUpdateProductUseCase
{
    /// <summary>
    /// Persists changes to an existing product.
    /// </summary>
    /// <param name="product">Domain object with updated data.</param>
    /// <param name="ct">Cancellation token.</param>
    Task ExecuteAsync(Product product, CancellationToken ct = default);
}
