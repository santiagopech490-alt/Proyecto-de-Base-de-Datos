using System.Collections.Generic;
using System.Threading;
using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.Core.Repositories;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Retrieve sales based on provided criteria (SaleFilter).
/// SRP: Orchestrates filtered searches within the sale domain.
/// </summary>
public interface IFetchSalesByFilterUseCase
{
    IAsyncEnumerable<Sale> ExecuteAsync(SaleFilter filter, CancellationToken cancellationToken = default);
}
