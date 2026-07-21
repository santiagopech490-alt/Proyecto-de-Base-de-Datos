namespace UtmMarket.Core.Entities;

/// <summary>
/// Entidad de dominio pura que representa un Cliente.
/// Diseñada para ser compatible con Native AOT y siguiendo principios de DDD.
/// </summary>
/// <param name="customerId">Identificador único del cliente.</param>
/// <param name="fullName">Nombre completo del cliente.</param>
/// <param name="email">Correo electrónico único.</param>
public sealed class Client(int customerId, string fullName, string email)
{
    /// <summary>
    /// Identificador único (Primary Key).
    /// </summary>
    public int CustomerId { get; init; } = customerId;

    /// <summary>
    /// Nombre completo con validación básica.
    /// </summary>
    public string FullName
    {
        get => field;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("El nombre completo es obligatorio.");
            field = value;
        }
    } = fullName;

    /// <summary>
    /// Correo electrónico con validación de nulidad.
    /// </summary>
    public string Email
    {
        get => field;
        set
        {
            if (string.IsNullOrWhiteSpace(value))
                throw new ArgumentException("El email es obligatorio.");
            field = value;
        }
    } = email;

    /// <summary>
    /// Estado del cliente en el sistema.
    /// </summary>
    public bool IsActive { get; set; } = true;
}
