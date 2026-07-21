namespace TareaDeProgramacion.Core.Entities;

/// <summary>
/// Entidad de dominio pura para un Producto.
/// </summary>
public class Product(int productId, string name, string sku, string brand, decimal price, int stock)
{
    public int ProductID { get; init; } = productId;
    public string Name { get; set; } = name;
    public string SKU { get; set; } = sku;
    public string Brand { get; set; } = brand;

    public decimal Price 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("Price cannot be negative."); 
    } = price;

    public int Stock 
    { 
        get => field; 
        set => field = value >= 0 ? value : throw new ArgumentException("Stock cannot be negative."); 
    } = stock;
}
