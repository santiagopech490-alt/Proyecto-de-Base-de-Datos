using System;
using System.Collections.Generic;
using System.Linq;
using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.Infrastructure.Models.Data;

namespace TareaDeProgramacion.Infrastructure.Mappers;

/// <summary>
/// Proporciona mÃ©todos de extensiÃ³n estÃ¡ticos para el mapeo profundo entre 
/// las entidades de Venta de infraestructura y dominio.
/// </summary>
public static class SaleMapper
{
    /// <summary>
    /// Convierte una VentaEntity y sus detalles en un objeto de dominio Sale.
    /// </summary>
    /// <param name="entity">Entidad de persistencia de la venta.</param>
    /// <param name="details">ColecciÃ³n de entidades de detalle de venta.</param>
    /// <param name="productResolver">FunciÃ³n para obtener el objeto de dominio Product a partir de su ID.</param>
    /// <returns>Objeto de dominio Sale plenamente hidratado.</returns>
    public static Sale ToDomain(
        this VentaEntity entity, 
        IEnumerable<DetalleVentaEntity> details, 
        Func<int, Product> productResolver)
    {
        ArgumentNullException.ThrowIfNull(entity);
        ArgumentNullException.ThrowIfNull(details);
        ArgumentNullException.ThrowIfNull(productResolver);

        var sale = new Sale(entity.VentaID, entity.Folio)
        {
            SaleDate = entity.FechaVenta,
            Status = Enum.TryParse<SaleStatus>(entity.Estatus, out var status) ? status : SaleStatus.Pending
        };

        foreach (var detailEntity in details)
        {
            var product = productResolver(detailEntity.ProductoID);
            var detail = new SaleDetail(product, detailEntity.Cantidad);
            // El UnitPrice en el dominio se inicializa desde product.Price, 
            // pero si la entidad tiene un precio histÃ³rico diferente, se podrÃ­a ajustar aquÃ­.
            sale.Details.Add(detail);
        }

        return sale;
    }

    /// <summary>
    /// Convierte un objeto de dominio Sale en su representaciÃ³n de persistencia.
    /// </summary>
    /// <param name="domain">Objeto de dominio Sale.</param>
    /// <returns>Una tupla conteniendo la VentaEntity y sus DetalleVentaEntity asociados.</returns>
    public static (VentaEntity Header, IEnumerable<DetalleVentaEntity> Details) ToEntity(this Sale domain)
    {
        ArgumentNullException.ThrowIfNull(domain);

        var header = new VentaEntity(domain.SaleID, domain.Folio)
        {
            FechaVenta = domain.SaleDate,
            Estatus = domain.Status.ToString(),
            TotalArticulos = domain.TotalItems,
            TotalVenta = domain.TotalSale
        };

        var details = domain.Details.Select(d => new DetalleVentaEntity(0, domain.SaleID, d.Product.ProductID)
        {
            Cantidad = d.Quantity,
            PrecioUnitario = d.UnitPrice,
            TotalDetalle = d.TotalDetail
        });

        return (header, details);
    }
}
