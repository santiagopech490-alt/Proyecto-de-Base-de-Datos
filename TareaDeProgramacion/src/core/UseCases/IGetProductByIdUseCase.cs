using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Retrieve a single product by its unique identifier.
/// </summary>
public interface IGetProductByIdUseCase
{
    Task<Product?> ExecuteAsync(int id, CancellationToken cancellationToken = default);
}
