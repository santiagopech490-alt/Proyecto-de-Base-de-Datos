namespace UtmMarket.Infrastructure.Models.Data;

/// <summary>
/// Mapeo 1:1 con la tabla [Producto] de SQL Server.
/// </summary>
public partial class ProductoEntity(string nombre, string sku)
{
    public int ProductoId { get; set; }
    public string Nombre { get; set; } = nombre;
    public string SKU { get; init; } = sku;
    public string Marca { get; set; } = string.Empty;

    public decimal Precio
    {
        get => field;
        set
        {
            if (value < 0) throw new ArgumentOutOfRangeException(nameof(Precio), "El precio debe ser >= 0.");
            field = value;
        }
    }

    public int Stock
    {
        get => field;
        set
        {
            if (value < 0) throw new ArgumentOutOfRangeException(nameof(Stock), "El stock debe ser >= 0.");
            field = value;
        }
    }
}
