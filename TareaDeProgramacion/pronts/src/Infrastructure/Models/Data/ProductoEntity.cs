namespace TareaDeProgramacion.Infrastructure.Models.Data;

/// <summary>
/// Mapeo 1:1 con la tabla 'Producto' para persistencia.
/// </summary>
public partial class ProductoEntity(int productoId, string sku)
{
    public int ProductoID { get; init; } = productoId;
    public string SKU { get; init; } = sku;
    public string Nombre { get; set; } = string.Empty;
    public string Marca { get; set; } = string.Empty;

    public decimal Precio 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("El precio no puede ser negativo."); 
    }

    public int Stock 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("El stock no puede ser negativo."); 
    }
}
