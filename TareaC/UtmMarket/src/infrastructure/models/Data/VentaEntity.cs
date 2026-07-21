namespace UtmMarket.Infrastructure.Models.Data;

/// <summary>
/// Mapeo 1:1 con la tabla [Venta] de SQL Server.
/// </summary>
public partial class VentaEntity(string folio)
{
    public int VentaId { get; set; }
    public string Folio { get; init; } = folio;
    public DateTime FechaVenta { get; set; } = DateTime.Now;
    public int TotalArticulos { get; set; }
    public decimal TotalVenta { get; set; }
    
    /// <summary>
    /// Estatus (TINYINT): 1: Pendiente, 2: Completada, 3: Cancelada.
    /// </summary>
    public byte Estatus
    {
        get => field;
        set
        {
            if (value is < 1 or > 3) throw new ArgumentOutOfRangeException(nameof(Estatus), "Estatus inválido (1-3).");
            field = value;
        }
    }
}
