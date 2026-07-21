using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TareaDeProgramacion.Core.Entities;

namespace TareaDeProgramacion.Core.Repositories;

/// <summary>
/// Criteria for filtering sales, using C# 14 property syntax for validation.
/// </summary>
public record SaleFilter(DateTime? StartDate = null, DateTime? EndDate = null, string? Folio = null)
{
    public DateTime? StartDate { get; init; } = StartDate;

    /// <summary>
    /// Validates that EndDate is not before StartDate using C# 14 'field' keyword.
    /// </summary>
    public DateTime? EndDate 
    { 
        get => field; 
        init => field = (value >= StartDate || value is null || StartDate is null) 
            ? value 
            : throw new ArgumentException("EndDate cannot be earlier than StartDate."); 
    } = EndDate;

    public string? Folio { get; init; } = Folio;
}

/// <summary>
/// Defines the rigorous persistence contract for the Sale aggregate root.
/// Optimized for high-performance streaming and Native AOT compatibility.
/// </summary>
public interface ISaleRepository
{
    /// <summary>
    /// Retrieves all sales as an asynchronous stream.
    /// This avoids loading the entire collection into memory.
    /// </summary>
    /// <param name="cancellationToken">Token for cooperative cancellation.</param>
    /// <returns>An asynchronous sequence of Sale domain objects.</returns>
    IAsyncEnumerable<Sale> GetAllAsync(CancellationToken cancellationToken = default);

    /// <summary>
    /// Retrieves a specific sale aggregate by its identity, including all details.
    /// </summary>
    /// <param name="id">The unique identifier of the sale.</param>
    /// <param name="cancellationToken">Token for cooperative cancellation.</param>
    /// <returns>The Sale aggregate if found; otherwise, null.</returns>
    Task<Sale?> GetByIdAsync(int id, CancellationToken cancellationToken = default);

    /// <summary>
    /// Finds sales matching the provided criteria using streaming for efficiency.
    /// </summary>
    /// <param name="filter">The search criteria.</param>
    /// <param name="cancellationToken">Token for cooperative cancellation.</param>
    /// <returns>An asynchronous sequence of matching Sale aggregates.</returns>
    IAsyncEnumerable<Sale> FindAsync(SaleFilter filter, CancellationToken cancellationToken = default);

    /// <summary>
    /// Persists a new sale aggregate into the system.
    /// </summary>
    /// <param name="sale">The Sale domain object to persist.</param>
    /// <param name="cancellationToken">Token for cooperative cancellation.</param>
    /// <returns>The persisted Sale object including its generated database identity.</returns>
    Task<Sale> AddAsync(Sale sale, CancellationToken cancellationToken = default);

    /// <summary>
    /// Updates an existing sale aggregate and its associated transaction details.
    /// </summary>
    /// <param name="sale">The Sale domain object containing the updated state.</param>
    /// <param name="cancellationToken">Token for cooperative cancellation.</param>
    /// <returns>True if the update was successful; otherwise, false.</returns>
    Task<bool> UpdateAsync(Sale sale, CancellationToken cancellationToken = default);
}
