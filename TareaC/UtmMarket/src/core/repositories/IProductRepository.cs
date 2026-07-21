using UtmMarket.Core.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace UtmMarket.Core.Repositories;

/// <summary>
/// Contrato del Repositorio de Productos.
/// Define las operaciones de persistencia trabajando exclusivamente con objetos de Dominio.
/// </summary>
public interface IProductRepository
{
    /// <summary>
    /// Obtiene todos los productos del catálogo mediante streaming de datos.
    /// </summary>
    /// <param name="ct">Token de cancelación.</param>
    /// <returns>Flujo asíncrono de objetos Product.</returns>
    IAsyncEnumerable<Product> GetAllAsync(CancellationToken ct = default);

    /// <summary>
    /// Busca un producto específico por su identificador único.
    /// </summary>
    /// <param name="productId">ID del producto.</param>
    /// <param name="ct">Token de cancelación.</param>
    /// <returns>El producto si existe; de lo contrario, null.</returns>
    Task<Product?> GetByIdAsync(int productId, CancellationToken ct = default);

    /// <summary>
    /// Busca productos que coincidan con los criterios especificados.
    /// </summary>
    /// <param name="filter">Criterios de búsqueda.</param>
    /// <param name="ct">Token de cancelación.</param>
    IAsyncEnumerable<Product> FindAsync(ProductFilter filter, CancellationToken ct = default);

    /// <summary>
    /// Registra un nuevo producto en el sistema.
    /// </summary>
    /// <param name="product">Instancia de dominio a persistir.</param>
    /// <param name="ct">Token de cancelación.</param>
    /// <returns>El ID asignado al nuevo producto.</returns>
    Task<int> AddAsync(Product product, CancellationToken ct = default);

    /// <summary>
    /// Actualiza la información general de un producto existente.
    /// </summary>
    /// <param name="product">Instancia de dominio con cambios.</param>
    /// <param name="ct">Token de cancelación.</param>
    Task UpdateAsync(Product product, CancellationToken ct = default);

    /// <summary>
    /// Realiza una actualización atómica del stock de un producto.
    /// </summary>
    /// <param name="productId">ID del producto.</param>
    /// <param name="newStock">Nueva cantidad disponible.</param>
    /// <param name="ct">Token de cancelación.</param>
    /// <exception cref="ArgumentException">Si el nuevo stock es negativo.</exception>
    Task UpdateStockAsync(int productId, int newStock, CancellationToken ct = default);
}
