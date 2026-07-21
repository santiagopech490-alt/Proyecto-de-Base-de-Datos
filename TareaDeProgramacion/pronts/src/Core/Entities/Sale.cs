using System.Collections.Generic;
using System.Linq;

namespace TareaDeProgramacion.Core.Entities;

/// <summary>
/// Agregado raÃ­z que representa una Venta.
/// </summary>
public class Sale(int saleId, string folio)
{
    public int SaleID { get; init; } = saleId;
    public string Folio { get; set; } = folio;
    public DateTime SaleDate { get; init; } = DateTime.Now;
    public SaleStatus Status { get; set; } = SaleStatus.Pending;
    public List<SaleDetail> Details { get; init; } = [];

    public int TotalItems => Details.Sum(d => d.Quantity);
    public decimal TotalSale => Details.Sum(d => d.TotalDetail);
}
