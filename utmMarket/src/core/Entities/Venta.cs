namespace utmMarket.src.core.Entities;

public class Venta
{
    public int Folio { get; set; }
    public DateTime FechaDeVenta { get; set; } = DateTime.Now;
    public decimal TotalDeLaVenta { get; set; }

    // Navigation property
    public ICollection<DetalleDeVenta> DetallesDeVenta { get; set; } = new List<DetalleDeVenta>();
}
