using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Retrieve a specific sale by its unique identifier.
/// SRP: Responsible for finding a single sale aggregate.
/// </summary>
public interface IFetchSaleByIdUseCase
{
    Task<Sale?> ExecuteAsync(int id, CancellationToken cancellationToken = default);
}
