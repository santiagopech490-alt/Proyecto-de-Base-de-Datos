using UtmMarket.Core.Entities;
using UtmMarket.Infrastructure.Models.Data;

namespace UtmMarket.Infrastructure.Mappers;

/// <summary>
/// Proporciona métodos de extensión para el mapeo bidireccional entre 
/// las entidades de dominio y los modelos de persistencia de Producto.
/// Optimizado para .NET 10 Native AOT (Zero Reflection).
/// </summary>
public static class ProductMapper
{
    /// <summary>
    /// Convierte una entidad de base de datos en un objeto de dominio puro.
    /// </summary>
    /// <param name="entity">Entidad de persistencia ProductoEntity.</param>
    /// <returns>Objeto de dominio Product.</returns>
    public static Product ToDomain(this ProductoEntity entity)
    {
        ArgumentNullException.ThrowIfNull(entity);

        return new Product(entity.ProductoId, entity.Nombre, entity.SKU)
        {
            Brand = entity.Marca,
            Price = entity.Precio,
            Stock = entity.Stock
        };
    }

    /// <summary>
    /// Convierte un objeto de dominio en una entidad de base de datos.
    /// </summary>
    /// <param name="domain">Objeto de dominio Product.</param>
    /// <returns>Entidad de persistencia ProductoEntity.</returns>
    public static ProductoEntity ToEntity(this Product domain)
    {
        ArgumentNullException.ThrowIfNull(domain);

        return new ProductoEntity(domain.Name, domain.SKU)
        {
            ProductoId = domain.ProductID,
            Marca = domain.Brand,
            Precio = domain.Price,
            Stock = domain.Stock
        };
    }

    /// <summary>
    /// Actualiza los valores de una entidad existente desde el dominio.
    /// </summary>
    public static void UpdateFromDomain(this ProductoEntity entity, Product domain)
    {
        ArgumentNullException.ThrowIfNull(entity);
        ArgumentNullException.ThrowIfNull(domain);

        entity.Nombre = domain.Name;
        entity.Marca = domain.Brand;
        entity.Precio = domain.Price;
        entity.Stock = domain.Stock;
    }
}
