using System.Threading;
using System.Threading.Tasks;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Specifically update the available stock for a product.
/// </summary>
public interface IUpdateProductStockUseCase
{
    Task<bool> ExecuteAsync(int id, int newQuantity, CancellationToken cancellationToken = default);
}
