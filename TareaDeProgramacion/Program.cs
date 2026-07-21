using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using TareaDeProgramacion.Infrastructure;
using TareaDeProgramacion.Application;
using TareaDeProgramacion.Core.UseCases;
using TareaDeProgramacion.Core.Entities;
using TareaDeProgramacion.UI;

// Modern C# 14 / .NET 10 Entry Point
var builder = Host.CreateApplicationBuilder(args);

// Load User Secrets in Development
if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddUserSecrets<Program>();
}

// Layer Registration
builder.Services.AddInfrastructure();
builder.Services.AddApplication();

using var host = builder.Build();

// Main Orchestration Loop
bool exit = false;
while (!exit)
{
    Console.Clear();
    Console.WriteLine("""
        =========================================
           UTM MARKET - PRODUCT MANAGEMENT
        =========================================
        1. List All Products
        2. Find Product by ID
        3. Register New Product
        4. Exit
        =========================================
        """);
    
    var choice = ConsoleInputHelper.ReadString("Select an option");

    using (var scope = host.Services.CreateScope())
    {
        var services = scope.ServiceProvider;

        switch (choice)
        {
            case "1":
                await ListProducts(services.GetRequiredService<IGetAllProductsUseCase>());
                break;
            case "2":
                await FindProduct(services.GetRequiredService<IGetProductByIdUseCase>());
                break;
            case "3":
                await RegisterProduct(services.GetRequiredService<ICreateProductUseCase>());
                break;
            case "4":
                exit = true;
                break;
            default:
                Console.WriteLine("Invalid option. Press any key to try again...");
                Console.ReadKey();
                break;
        }
    }
}

async Task ListProducts(IGetAllProductsUseCase useCase)
{
    Console.WriteLine("\n--- PRODUCT LIST ---");
    Console.WriteLine($"{"ID",-5} | {"SKU",-10} | {"NAME",-20} | {"PRICE",-10} | {"STOCK",-5}");
    Console.WriteLine(new string('-', 60));

    await foreach (var product in useCase.ExecuteAsync())
    {
        Console.WriteLine($"{product.ProductID,-5} | {product.SKU,-10} | {product.Name,-20} | {product.Price,10:C} | {product.Stock,5}");
    }
    Console.WriteLine("\nPress any key to return to menu...");
    Console.ReadKey();
}

async Task FindProduct(IGetProductByIdUseCase useCase)
{
    var id = ConsoleInputHelper.ReadInt("\nEnter Product ID to search");
    var product = await useCase.ExecuteAsync(id);

    if (product is null)
    {
        Console.WriteLine($"Product with ID {id} not found.");
    }
    else
    {
        Console.WriteLine("\n--- PRODUCT DETAILS ---");
        Console.WriteLine($"ID:    {product.ProductID}");
        Console.WriteLine($"SKU:   {product.SKU}");
        Console.WriteLine($"Name:  {product.Name}");
        Console.WriteLine($"Brand: {product.Brand}");
        Console.WriteLine($"Price: {product.Price:C}");
        Console.WriteLine($"Stock: {product.Stock}");
    }
    Console.WriteLine("\nPress any key to return to menu...");
    Console.ReadKey();
}

async Task RegisterProduct(ICreateProductUseCase useCase)
{
    Console.WriteLine("\n--- REGISTER NEW PRODUCT ---");
    var sku = ConsoleInputHelper.ReadString("SKU");
    var name = ConsoleInputHelper.ReadString("Name");
    var brand = ConsoleInputHelper.ReadString("Brand");
    var price = ConsoleInputHelper.ReadDecimal("Price", 0);
    var stock = ConsoleInputHelper.ReadInt("Initial Stock", 0);

    try 
    {
        var product = new Product(0, name, sku, brand, price, stock);
        var id = await useCase.ExecuteAsync(product);
        Console.WriteLine($"\nSuccess! Product registered with ID: {id}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"\nError: {ex.Message}");
    }

    Console.WriteLine("\nPress any key to return to menu...");
    Console.ReadKey();
}
