using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Create a new product in the system.
/// </summary>
public interface ICreateProductUseCase
{
    Task<int> ExecuteAsync(Product product, CancellationToken cancellationToken = default);
}
