# Manifiesto de Arquitectura .NET 10 - Actualización Seguridad Dapper

## 1. Resumen de Instalación
| Paquete | Versión | Rol Arquitectónico |
| :--- | :--- | :--- |
| `Microsoft.Data.SqlClient` | 6.1.4 | Driver optimizado para Native AOT. |
| `Dapper` | 2.1.66 | Micro-ORM para persistencia. |
| `Microsoft.Extensions.Hosting` | 10.0.3 | Gestión de ciclo de vida y DI. |
| `Microsoft.Extensions.Configuration.UserSecrets` | 10.0.3 | Manejo seguro de credenciales. |

## 2. Infraestructura de Persistencia
*   **IDbConnectionFactory**: Abstracción SOLID para la creación de conexiones.
*   **SqlConnectionFactory**: Implementación concreta con validación mediante C# 14 `field`.
*   **DependencyInjection**: Registro modular de servicios de infraestructura.

## 3. Seguridad
*   **User Secrets**: Almacenamiento local de credenciales (User Id, Pwd).
*   **Separación de Entornos**: Archivos `appsettings` específicos para Dev y Prod.
*   **C# 14 Syntax**: Validación inmediata de cadenas de conexión en setters de propiedades.

## 4. Guía de Ejecución
```bash
dotnet build
dotnet run
```
