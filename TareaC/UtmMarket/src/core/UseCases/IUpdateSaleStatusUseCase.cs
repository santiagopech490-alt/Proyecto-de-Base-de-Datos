using UtmMarket.Core.Entities;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.UseCases;

/// <summary>
/// Domain Use Case focused strictly on modifying the lifecycle status of an existing sale.
/// </summary>
public interface IUpdateSaleStatusUseCase
{
    /// <summary>
    /// Updates only the status of a specific sale.
    /// </summary>
    /// <param name="saleId">Unique identifier of the sale.</param>
    /// <param name="newStatus">Target domain status.</param>
    /// <param name="ct">Cancellation Token.</param>
    /// <returns>A Task representing the asynchronous operation.</returns>
    Task ExecuteAsync(int saleId, SaleStatus newStatus, CancellationToken ct = default);
}
