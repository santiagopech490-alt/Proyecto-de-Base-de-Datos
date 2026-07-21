using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Specifically update the Status property of an existing sale.
/// SRP: Focused exclusively on status transitions for sales.
/// </summary>
public interface IUpdateSaleStatusUseCase
{
    Task<bool> ExecuteAsync(int id, SaleStatus newStatus, CancellationToken cancellationToken = default);
}
