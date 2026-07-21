namespace utmMarket.src.core.Entities;

public class DetalleDeVenta
{
    public int IdDetalleVenta { get; set; }
    public int FolioVenta { get; set; }
    public int IdProducto { get; set; }
    public int Cantidad { get; set; }
    public decimal PrecioUnitario { get; set; }
    public decimal TotalDeDetalle { get; set; }

    // Navigation properties
    public required Venta Venta { get; set; }
    public required Producto Producto { get; set; }
}
