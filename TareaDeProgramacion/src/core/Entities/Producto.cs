namespace utmMarket.src.core.Entities;

public class Producto
{
    public int IdProducto { get; set; }
    public required string Nombre { get; set; }
    public required string Marca { get; set; }
    public decimal Precio { get; set; }
    public int Stock { get; set; }

    // Navigation property
    public ICollection<DetalleDeVenta> DetallesDeVenta { get; set; } = new List<DetalleDeVenta>();
}
