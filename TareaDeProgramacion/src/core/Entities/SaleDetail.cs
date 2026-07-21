namespace TareaDeProgramacion.Core.Entities;

/// <summary>
/// Detalle individual de una venta.
/// </summary>
public class SaleDetail(Product product, int quantity)
{
    public Product Product { get; init; } = product ?? throw new ArgumentNullException(nameof(product));
    public int Quantity { get; set; } = quantity > 0 ? quantity : throw new ArgumentException("Quantity must be greater than zero.");
    public decimal UnitPrice { get; init; } = product.Price;
    public decimal TotalDetail => UnitPrice * Quantity;
}
