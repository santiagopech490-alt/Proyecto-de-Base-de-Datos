namespace UtmMarket.Infrastructure.Models.Data;

/// <summary>
/// Mapeo 1:1 con la tabla [DetalleDeVenta] de SQL Server.
/// </summary>
public partial class DetalleVentaEntity(int ventaId, int productoId)
{
    public int DetalleDeVentaId { get; set; }
    public int VentaId { get; init; } = ventaId;
    public int ProductoId { get; init; } = productoId;
    
    public decimal PrecioUnitario
    {
        get => field;
        set
        {
            if (value < 0) throw new ArgumentOutOfRangeException(nameof(PrecioUnitario));
            field = value;
        }
    }

    public int Cantidad
    {
        get => field;
        set
        {
            if (value < 0) throw new ArgumentOutOfRangeException(nameof(Cantidad));
            field = value;
        }
    }

    public decimal TotalDetalle { get; set; }
}
