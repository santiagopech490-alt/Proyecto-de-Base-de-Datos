namespace UtmMarket.Core.Entities;

/// <summary>
/// Representa los posibles estados de una venta en el dominio.
/// </summary>
public enum SaleStatus
{
    Pending,
    Completed,
    Cancelled,
    Refunded
}
