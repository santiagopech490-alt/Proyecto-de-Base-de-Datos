using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.Infrastructure.Models.Data;

namespace TareaDeProgramacion.Infrastructure.Mappers;

/// <summary>
/// Proporciona mÃ©todos de extensiÃ³n estÃ¡ticos para mapeo entre Product y ProductoEntity.
/// Compatible con Native AOT.
/// </summary>
public static class ProductMapper
{
    /// <summary>
    /// Transforma la entidad de persistencia al objeto de dominio.
    /// </summary>
    public static Product ToDomain(this ProductoEntity entity)
    {
        ArgumentNullException.ThrowIfNull(entity);

        return new Product(
            entity.ProductoID,
            entity.Nombre,
            entity.SKU,
            entity.Marca,
            entity.Precio,
            entity.Stock
        );
    }

    /// <summary>
    /// Transforma el objeto de dominio a la entidad de persistencia.
    /// </summary>
    public static ProductoEntity ToEntity(this Product domain)
    {
        ArgumentNullException.ThrowIfNull(domain);

        return new ProductoEntity(domain.ProductID, domain.SKU)
        {
            Nombre = domain.Name,
            Marca = domain.Brand,
            Precio = domain.Price,
            Stock = domain.Stock
        };
    }
}
