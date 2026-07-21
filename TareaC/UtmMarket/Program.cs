using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using UtmMarket.Infrastructure.Data;
using UtmMarket.Application;
using UtmMarket.Core.UseCases;
using UtmMarket.Core.Entities;

// Inicio del Host moderno para .NET 10 y Native AOT
var builder = Host.CreateApplicationBuilder(args);

// Configuración de secretos de usuario para desarrollo
if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddUserSecrets<Program>();
}

// Configuración de infraestructura segura y persistencia SOLID
builder.Services.AddSqlInfrastructure(builder.Configuration);

// Registro de casos de uso de la capa de aplicación
builder.Services.AddApplicationUseCases();

using var host = builder.Build();

Console.Clear();
Console.WriteLine("""
    ╔══════════════════════════════════════════════════════════╗
    ║                 UTM MARKET - SISTEMA DE GESTIÓN          ║
    ║                 Powered by .NET 10 & Clean Arch          ║
    ╚══════════════════════════════════════════════════════════╝
    """);

bool exit = false;
while (!exit)
{
    Console.WriteLine("""

    Seleccione una opción:
    1. Consultar todos los productos
    2. Consultar producto por ID
    3. Registrar nuevo producto
    4. Salir
    """);
    
    Console.Write("> ");
    string? option = Console.ReadLine();

    // Inyectar los Casos de Uso (Interfaces) a través de un 'IServiceScope' manual.
    using (var scope = host.Services.CreateScope())
    {
        var services = scope.ServiceProvider;

        try 
        {
            switch (option)
            {
                case "1":
                    await HandleGetAllProducts(services);
                    break;
                case "2":
                    await HandleGetProductById(services);
                    break;
                case "3":
                    await HandleCreateProduct(services);
                    break;
                case "4":
                    exit = true;
                    break;
                default:
                    Console.WriteLine("Opción no válida.");
                    break;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error inesperado: {ex.Message}");
        }
    }
}

Console.WriteLine("Saliendo de UTM Market. ¡Hasta pronto!");

async Task HandleGetAllProducts(IServiceProvider services)
{
    var useCase = services.GetRequiredService<IGetAllProductsUseCase>();
    Console.WriteLine("\n--- Catálogo de Productos ---");
    Console.WriteLine("{0,-5} | {1,-30} | {2,-15} | {3,-10} | {4,-5}", "ID", "Nombre", "SKU", "Precio", "Stock");
    Console.WriteLine(new string('-', 75));
    
    await foreach (var product in useCase.ExecuteAsync())
    {
        Console.WriteLine("{0,-5} | {1,-30} | {2,-15} | {3,10:C2} | {4,5}", 
            product.ProductID, 
            product.Name.Length > 30 ? product.Name[..27] + "..." : product.Name, 
            product.SKU, 
            product.Price, 
            product.Stock);
    }
}

async Task HandleGetProductById(IServiceProvider services)
{
    var useCase = services.GetRequiredService<IGetProductByIdUseCase>();
    Console.Write("Ingrese el ID del producto: ");
    if (int.TryParse(Console.ReadLine(), out int id))
    {
        var product = await useCase.ExecuteAsync(id);
        if (product != null)
        {
            Console.WriteLine($"\nProducto Encontrado: {product.Name}");
            Console.WriteLine($"- SKU: {product.SKU}");
            Console.WriteLine($"- Marca: {product.Brand}");
            Console.WriteLine($"- Precio: {product.Price:C2}");
            Console.WriteLine($"- Stock: {product.Stock}");
        }
        else
        {
            Console.WriteLine($"No se encontró ningún producto con ID {id}.");
        }
    }
    else
    {
        Console.WriteLine("ID no válido (debe ser un número entero).");
    }
}

async Task HandleCreateProduct(IServiceProvider services)
{
    var useCase = services.GetRequiredService<ICreateProductUseCase>();
    var product = ProductInputHandler.CaptureNewProduct();
    
    try 
    {
        int newId = await useCase.ExecuteAsync(product);
        Console.WriteLine($"\nProducto registrado exitosamente con ID: {newId}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error al registrar producto: {ex.Message}");
    }
}
