namespace UtmMarket.Core.Entities;

/// <summary>
/// Entidad de dominio pura que representa un producto del catálogo.
/// </summary>
public sealed class Product(int productId, string name, string sku)
{
    public int ProductID { get; init; } = productId;
    public string Name { get; set; } = name;
    public string SKU { get; init; } = sku;
    public string Brand { get; set; } = string.Empty;

    /// <summary>
    /// Precio unitario del producto con validación de C# 14 usando 'field'.
    /// </summary>
    public decimal Price
    {
        get => field;
        set
        {
            if (value < 0) throw new ArgumentException("El precio no puede ser negativo.");
            field = value;
        }
    }

    /// <summary>
    /// Cantidad disponible en inventario con validación de C# 14 usando 'field'.
    /// </summary>
    public int Stock
    {
        get => field;
        set
        {
            if (value < 0) throw new ArgumentException("El stock no puede ser negativo.");
            field = value;
        }
    }
}
