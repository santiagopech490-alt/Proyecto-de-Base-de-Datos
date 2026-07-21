namespace TareaDeProgramacion.Infrastructure.Models.Data;

/// <summary>
/// Mapeo 1:1 con la tabla 'Venta'.
/// </summary>
public partial class VentaEntity(int ventaId, string folio)
{
    public int VentaID { get; init; } = ventaId;
    public string Folio { get; init; } = folio;
    public DateTime FechaVenta { get; set; } = DateTime.Now;
    
    public int TotalArticulos 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("El total de artÃ­culos no puede ser negativo."); 
    }

    public decimal TotalVenta 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("El total de la venta no puede ser negativo."); 
    }

    public string Estatus { get; set; } = "Pendiente";
}
