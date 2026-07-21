namespace UtmMarket.Core.Entities;

/// <summary>
/// Representa el detalle de un producto dentro de una venta.
/// Mantiene el precio histórico del momento de la transacción.
/// </summary>
public sealed class SaleDetail(Product product, int quantity)
{
    public Product Product { get; init; } = product ?? throw new ArgumentNullException(nameof(product));
    
    public int Quantity 
    { 
        get => field; 
        init => field = value > 0 ? value : throw new ArgumentException("La cantidad debe ser mayor a 0."); 
    }

    /// <summary>
    /// Captura el precio del producto al momento de crearse el detalle (Histórico).
    /// </summary>
    public decimal UnitPrice { get; init; } = product.Price;

    /// <summary>
    /// Propiedad calculada: Total de la línea de detalle.
    /// </summary>
    public decimal TotalDetail => UnitPrice * Quantity;
}
