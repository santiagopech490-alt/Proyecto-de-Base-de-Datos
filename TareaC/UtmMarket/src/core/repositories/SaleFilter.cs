using UtmMarket.Core.Entities;

namespace UtmMarket.Core.Repositories;

/// <summary>
/// Criterios de búsqueda para transacciones de venta.
/// Utiliza C# 14 'field' para validaciones de rango de fechas sin boilerplate.
/// </summary>
public record SaleFilter(DateTime? startDate = null, DateTime? endDate = null)
{
    public DateTime? StartDate 
    { 
        get => field; 
        init => field = value; 
    }

    public DateTime? EndDate 
    { 
        get => field; 
        init 
        {
            if (value < StartDate) 
                throw new ArgumentException("La fecha final no puede ser menor a la fecha inicial.");
            field = value;
        }
    }

    public string? Folio { get; init; }
    public SaleStatus? Status { get; init; }
    public decimal? MinTotal { get; init; }
}
