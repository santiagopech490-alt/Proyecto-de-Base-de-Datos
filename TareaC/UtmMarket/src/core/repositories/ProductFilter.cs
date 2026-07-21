namespace UtmMarket.Core.Repositories;

/// <summary>
/// Criterios de búsqueda para filtrar productos de forma eficiente sin usar expresiones dinámicas.
/// Compatible con Native AOT.
/// </summary>
public record ProductFilter
{
    public string? Name { get; init; }
    public string? Brand { get; init; }
    public string? SKU { get; init; }
    public decimal? MinPrice { get; init; }
    public decimal? MaxPrice { get; init; }
    public bool? OnlyWithStock { get; init; }
}
