using System.Collections.Generic;
using System.Threading;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Retrieve all sales as an asynchronous stream.
/// SRP: Focused only on fetching the full collection of sales.
/// </summary>
public interface IFetchAllSalesUseCase
{
    IAsyncEnumerable<Sale> ExecuteAsync(CancellationToken cancellationToken = default);
}
