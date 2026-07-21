namespace TareaDeProgramacion.Infrastructure.Models.Data;

/// <summary>
/// Mapeo 1:1 con la tabla 'DetalleVenta'.
/// </summary>
public partial class DetalleVentaEntity(int detalleId, int ventaId, int productoId)
{
    public int DetalleID { get; init; } = detalleId;
    public int VentaID { get; init; } = ventaId;
    public int ProductoID { get; init; } = productoId;

    public decimal PrecioUnitario 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("El precio unitario no puede ser negativo."); 
    }

    public int Cantidad 
    { 
        get => field; 
        set => field = value > 0 ? value : throw new ArgumentException("La cantidad debe ser mayor a cero."); 
    }

    public decimal TotalDetalle 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("El total del detalle no puede ser negativo."); 
    }
}
