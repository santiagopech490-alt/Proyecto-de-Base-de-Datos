using UtmMarket.Core.Entities;
using UtmMarket.Infrastructure.Models.Data;
using System.Collections.Generic;
using System.Linq;

namespace UtmMarket.Infrastructure.Mappers;

/// <summary>
/// Mapeador profundo para la gestión de Ventas y sus detalles.
/// Optimizado para .NET 10 y compatible con Native AOT.
/// </summary>
public static class SaleMapper
{
    /// <summary>
    /// Convierte una VentaEntity (Persistencia) a Sale (Dominio).
    /// </summary>
    /// <param name="entity">Entidad de encabezado de venta.</param>
    /// <param name="details">Colección de entidades de detalle vinculadas.</param>
    /// <param name="productResolver">Función para obtener el objeto Product de dominio a partir de un ID.</param>
    public static Sale ToDomain(
        this VentaEntity entity, 
        IEnumerable<DetalleVentaEntity>? details = null,
        Func<int, Product>? productResolver = null)
    {
        ArgumentNullException.ThrowIfNull(entity);

        var domain = new Sale(entity.VentaId, entity.Folio)
        {
            Status = MapStatusToDomain(entity.Estatus)
        };

        // Uso de extensiones de C# 14 y asignación nula condicional para eficiencia
        if (details is not null && productResolver is not null)
        {
            foreach (var detailEntity in details)
            {
                var product = productResolver(detailEntity.ProductoId);
                if (product is not null)
                {
                    domain.AddItem(product, detailEntity.Cantidad);
                }
            }
        }

        return domain;
    }

    /// <summary>
    /// Convierte un objeto Sale (Dominio) a su representación de persistencia.
    /// </summary>
    public static (VentaEntity Header, IEnumerable<DetalleVentaEntity> Details) ToEntity(this Sale domain)
    {
        ArgumentNullException.ThrowIfNull(domain);

        var header = new VentaEntity(domain.Folio)
        {
            VentaId = domain.SaleID,
            FechaVenta = domain.SaleDate,
            TotalArticulos = domain.TotalItems,
            TotalVenta = domain.TotalSale,
            Estatus = MapStatusToEntity(domain.Status)
        };

        var details = domain.Details.Select(d => new DetalleVentaEntity(domain.SaleID, d.Product.ProductID)
        {
            PrecioUnitario = d.UnitPrice,
            Cantidad = d.Quantity,
            TotalDetalle = d.TotalDetail
        });

        return (header, details);
    }

    private static SaleStatus MapStatusToDomain(byte dbStatus) => dbStatus switch
    {
        1 => SaleStatus.Pending,
        2 => SaleStatus.Completed,
        3 => SaleStatus.Cancelled,
        _ => SaleStatus.Pending
    };

    private static byte MapStatusToEntity(SaleStatus domainStatus) => domainStatus switch
    {
        SaleStatus.Pending => 1,
        SaleStatus.Completed => 2,
        SaleStatus.Cancelled => 3,
        _ => 1
    };
}
