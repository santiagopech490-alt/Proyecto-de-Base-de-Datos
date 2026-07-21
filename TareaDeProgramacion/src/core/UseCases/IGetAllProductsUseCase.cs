using System.Collections.Generic;
using System.Threading;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Retrieve all products from the system as an asynchronous stream.
/// </summary>
public interface IGetAllProductsUseCase
{
    IAsyncEnumerable<Product> ExecuteAsync(CancellationToken cancellationToken = default);
}
