using System.Collections.Generic;
using System.Threading;
using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.Core.Repositories;

namespace TareaDeProgramacion.Core.UseCases;

/// <summary>
/// Use Case: Search for products using dynamic filters.
/// </summary>
public interface IFindProductsUseCase
{
    IAsyncEnumerable<Product> ExecuteAsync(ProductFilter filter, CancellationToken cancellationToken = default);
}
