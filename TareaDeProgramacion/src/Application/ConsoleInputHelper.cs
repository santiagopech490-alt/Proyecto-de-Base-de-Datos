using System;

namespace TareaDeProgramacion.UI;

public static class ConsoleInputHelper
{
    public static string ReadString(string prompt)
    {
        while (true)
        {
            Console.Write($"{prompt}: ");
            var input = Console.ReadLine();
            if (!string.IsNullOrWhiteSpace(input)) return input.Trim();
            Console.WriteLine("Error: Input cannot be empty.");
        }
    }

    public static int ReadInt(string prompt, int min = int.MinValue)
    {
        while (true)
        {
            Console.Write($"{prompt}: ");
            if (int.TryParse(Console.ReadLine(), out var result) && result >= min) return result;
            Console.WriteLine($"Error: Please enter a valid number (minimum: {min}).");
        }
    }

    public static decimal ReadDecimal(string prompt, decimal min = 0)
    {
        while (true)
        {
            Console.Write($"{prompt}: ");
            if (decimal.TryParse(Console.ReadLine(), out var result) && result >= min) return result;
            Console.WriteLine($"Error: Please enter a valid decimal (minimum: {min}).");
        }
    }
}
