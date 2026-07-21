using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Update the general information of an existing product.
/// </summary>
public interface IUpdateProductUseCase
{
    Task<bool> ExecuteAsync(Product product, CancellationToken cancellationToken = default);
}
