namespace UtmMarket.Core.Entities;

using System.Collections.Generic;
using System.Linq;

/// <summary>
/// Raíz del Agregado de Venta que gestiona la transacción comercial.
/// </summary>
public sealed class Sale(int saleId, string folio)
{
    public int SaleID { get; init; } = saleId;
    public string Folio { get; init; } = folio;
    public DateTime SaleDate { get; init; } = DateTime.Now;
    public SaleStatus Status { get; set; } = SaleStatus.Pending;

    /// <summary>
    /// Lista de detalles de la venta (Encapsulamiento de lógica de negocio).
    /// </summary>
    public List<SaleDetail> Details { get; } = [];

    /// <summary>
    /// Suma dinámica de todos los artículos incluidos en la venta.
    /// </summary>
    public int TotalItems => Details.Sum(d => d.Quantity);

    /// <summary>
    /// Cálculo del monto total sumando todos los detalles.
    /// </summary>
    public decimal TotalSale => Details.Sum(d => d.TotalDetail);

    /// <summary>
    /// Método de dominio para añadir productos con lógica de validación.
    /// </summary>
    public void AddItem(Product product, int quantity)
    {
        if (product.Stock < quantity)
            throw new InvalidOperationException("No hay suficiente stock para completar la operación.");

        Details.Add(new SaleDetail(product, quantity));
    }
}
