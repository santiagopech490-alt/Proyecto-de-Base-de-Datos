using UtmMarket.Core.Entities;
using System.Globalization;

namespace UtmMarket.Application;

public static class ProductInputHandler
{
    public static Product CaptureNewProduct()
    {
        Console.WriteLine("\n--- Registrar Nuevo Producto ---");

        string name = PromptNotEmpty("Nombre del Producto: ");
        string sku = PromptNotEmpty("SKU: ");
        string brand = PromptNotEmpty("Marca: ");
        decimal price = PromptDecimal("Precio: ");
        int stock = PromptInt("Stock inicial: ");

        return new Product(0, name, sku)
        {
            Brand = brand,
            Price = price,
            Stock = stock
        };
    }

    private static string PromptNotEmpty(string message)
    {
        while (true)
        {
            Console.Write(message);
            string? input = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(input)) return input;
            Console.WriteLine("El valor no puede estar vacío.");
        }
    }

    private static decimal PromptDecimal(string message)
    {
        while (true)
        {
            Console.Write(message);
            if (decimal.TryParse(Console.ReadLine(), NumberStyles.Any, CultureInfo.InvariantCulture, out decimal value) && value >= 0)
                return value;
            Console.WriteLine("Por favor ingrese un precio válido (ej. 10.50) y no negativo.");
        }
    }

    private static int PromptInt(string message)
    {
        while (true)
        {
            Console.Write(message);
            if (int.TryParse(Console.ReadLine(), out int value) && value >= 0)
                return value;
            Console.WriteLine("Por favor ingrese un número entero válido y no negativo.");
        }
    }
}
