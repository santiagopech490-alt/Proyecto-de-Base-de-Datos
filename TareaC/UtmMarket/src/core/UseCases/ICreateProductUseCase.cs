using UtmMarket.Core.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Case of use to register a new product in the system.
/// </summary>
public interface ICreateProductUseCase
{
    /// <summary>
    /// Registers a new product.
    /// </summary>
    /// <param name="product">Domain object to persist.</param>
    /// <param name="ct">Cancellation token.</param>
    /// <returns>The generated ID for the new product.</returns>
    Task<int> ExecuteAsync(Product product, CancellationToken ct = default);
}
