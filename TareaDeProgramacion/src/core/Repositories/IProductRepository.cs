using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.Repositories;

/// <summary>
/// Criterios de bÃºsqueda para productos, optimizados para Native AOT.
/// </summary>
public record ProductFilter(string? Name = null, string? SKU = null, string? Brand = null);

/// <summary>
/// Define el contrato de persistencia para la entidad Product.
/// Sigue los principios de Clean Architecture operando exclusivamente con objetos de dominio.
/// </summary>
public interface IProductRepository
{
    /// <summary>
    /// Obtiene todos los productos mediante streaming asÃ­ncrono.
    /// </summary>
    /// <param name="cancellationToken">Token para cancelaciÃ³n de la operaciÃ³n.</param>
    /// <returns>Una secuencia asÃ­ncrona de productos.</returns>
    IAsyncEnumerable<Product> GetAllAsync(CancellationToken cancellationToken = default);

    /// <summary>
    /// Recupera un producto por su identificador Ãºnico.
    /// </summary>
    /// <param name="id">ID del producto en la base de datos.</param>
    /// <param name="cancellationToken">Token para cancelaciÃ³n.</param>
    /// <returns>El producto si existe; de lo contrario, null.</returns>
    Task<Product?> GetByIdAsync(int id, CancellationToken cancellationToken = default);

    /// <summary>
    /// Busca productos que coincidan con los criterios especificados.
    /// </summary>
    /// <param name="filter">Objeto con los parÃ¡metros de filtrado.</param>
    /// <param name="cancellationToken">Token para cancelaciÃ³n.</param>
    /// <returns>ColecciÃ³n de productos que coinciden con el filtro.</returns>
    IAsyncEnumerable<Product> FindAsync(ProductFilter filter, CancellationToken cancellationToken = default);

    /// <summary>
    /// Registra un nuevo producto en el sistema.
    /// </summary>
    /// <param name="product">Objeto de dominio a persistir.</param>
    /// <param name="cancellationToken">Token para cancelaciÃ³n.</param>
    /// <returns>El ID del producto generado.</returns>
    Task<int> AddAsync(Product product, CancellationToken cancellationToken = default);

    /// <summary>
    /// Actualiza la informaciÃ³n general de un producto existente.
    /// </summary>
    /// <param name="product">Objeto de dominio con los cambios.</param>
    /// <param name="cancellationToken">Token para cancelaciÃ³n.</param>
    /// <returns>Verdadero si la operaciÃ³n fue exitosa.</returns>
    Task<bool> UpdateAsync(Product product, CancellationToken cancellationToken = default);

    /// <summary>
    /// Realiza una actualizaciÃ³n atÃ³mica del stock de un producto.
    /// </summary>
    /// <param name="id">ID del producto.</param>
    /// <param name="newQuantity">Nueva cantidad disponible.</param>
    /// <param name="cancellationToken">Token para cancelaciÃ³n.</param>
    /// <returns>Verdadero si el stock fue actualizado.</returns>
    Task<bool> UpdateStockAsync(int id, int newQuantity, CancellationToken cancellationToken = default);

    /// <summary>
    /// Elimina un producto del sistema.
    /// </summary>
    /// <param name="id">ID del producto a eliminar.</param>
    /// <param name="cancellationToken">Token para cancelaciÃ³n.</param>
    /// <returns>Verdadero si el producto fue eliminado.</returns>
    Task<bool> DeleteAsync(int id, CancellationToken cancellationToken = default);
}
