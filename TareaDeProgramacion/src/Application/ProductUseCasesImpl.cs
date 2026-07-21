using System.Collections.Generic;
using System.Threading;
using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.Core.Repositories;
using TareaDeProgramacion.Core.UseCases;

namespace TareaDeProgramacion.Application;

public sealed class GetAllProductsUseCaseImpl(IProductRepository repository) : IGetAllProductsUseCase
{
    public IAsyncEnumerable<Product> ExecuteAsync(CancellationToken cancellationToken = default) 
        => repository.GetAllAsync(cancellationToken);
}

public sealed class GetProductByIdUseCaseImpl(IProductRepository repository) : IGetProductByIdUseCase
{
    public Task<Product?> ExecuteAsync(int id, CancellationToken cancellationToken = default) 
        => repository.GetByIdAsync(id, cancellationToken);
}

public sealed class FindProductsUseCaseImpl(IProductRepository repository) : IFindProductsUseCase
{
    public IAsyncEnumerable<Product> ExecuteAsync(ProductFilter filter, CancellationToken cancellationToken = default) 
        => repository.FindAsync(filter, cancellationToken);
}

public sealed class CreateProductUseCaseImpl(IProductRepository repository) : ICreateProductUseCase
{
    public async Task<int> ExecuteAsync(Product product, CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(product);
        if (string.IsNullOrWhiteSpace(product.Name)) throw new ArgumentException("Product name is required.");
        
        return await repository.AddAsync(product, cancellationToken);
    }
}

public sealed class UpdateProductUseCaseImpl(IProductRepository repository) : IUpdateProductUseCase
{
    public async Task<bool> ExecuteAsync(Product product, CancellationToken cancellationToken = default)
    {
        ArgumentNullException.ThrowIfNull(product);
        return await repository.UpdateAsync(product, cancellationToken);
    }
}

public sealed class UpdateProductStockUseCaseImpl(IProductRepository repository) : IUpdateProductStockUseCase
{
    public async Task<bool> ExecuteAsync(int id, int newQuantity, CancellationToken cancellationToken = default)
    {
        if (newQuantity < 0) throw new ArgumentException("Stock quantity cannot be negative.");
        return await repository.UpdateStockAsync(id, newQuantity, cancellationToken);
    }
}
