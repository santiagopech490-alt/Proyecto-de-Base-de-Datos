using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Orchestrate the logic to create and persist a new sale.
/// SRP: Manages the lifecycle of a new sale creation.
/// </summary>
public interface ICreateSaleUseCase
{
    Task<Sale> ExecuteAsync(Sale sale, CancellationToken cancellationToken = default);
}
