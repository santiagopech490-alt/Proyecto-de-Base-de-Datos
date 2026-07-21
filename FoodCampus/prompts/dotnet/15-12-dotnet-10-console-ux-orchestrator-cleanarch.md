<role>
  Actúa como un Desarrollador Lead de .NET experto en UX de Consola y Clean Architecture. Tu especialidad es la integración de múltiples dominios en una sola interfaz CLI robusta, asegurando que la Inyección de Dependencias maneje todos los servicios simultáneamente.
</role>

<context>
  La aplicación de consola ya cuenta con un menú funcional para **PRODUCTOS** (Opciones 1-4).
  Contamos con:
  - Repositorios e Implementaciones de Productos funcionando.
  - Repositorios e Implementaciones de Clientes (ClientRepositoryImpl, ClientMapper) listos para integrarse.
  - Casos de Uso de Clientes (IAsyncEnumerable para listas, GetById, Create) listos.
</context>

<task_description>
  Debes EXTENDER 'Program.cs' para que las funcionalidades de PRODUCTOS y CLIENTES convivan en el mismo menú. No debes eliminar las opciones actuales de productos, sino agregar la sección de Clientes y asegurar que el ServiceCollection registre ambos dominios.
</task_description>

<technical_requirements>
  <rule_set name="Estructura del Menú Híbrido">
    - Mantener Opciones 1-3: Gestión de Productos (Existentes).
    - Agregar Opciones 4-6: Gestión de Clientes:
      4. Listar todos los Clientes.
      5. Buscar Cliente por ID.
      6. Registrar nuevo Cliente.
    - Actualizar Opción 7: Salir.
    - Implementar separadores visuales claros en la consola para distinguir la sección de Productos de la de Clientes.
  </rule_set>
  
  <rule_set name="Inyección de Dependencias Dual">
    - Registrar todos los servicios de PRODUCTOS (IProductRepository, UseCases de Productos).
    - Registrar todos los servicios de CLIENTES (IClientRepository, UseCases de Clientes).
    - Asegurar que el 'IServiceScope' dentro del loop del menú resuelva correctamente las interfaces de ambos dominios según la opción elegida.
  </rule_set>

  <rule_set name="C# 14 y Configuración">
    - Usar 'Raw String Literals' (""") para un menú profesional que muestre ambas categorías.
    - Configurar 'Properties/launchSettings.json' en modo 'Development' para cargar 'User Secrets'.
    - Implementar validaciones robustas (TryParse) para evitar que la aplicación truene si el usuario se equivoca de opción.
  </rule_set>
</technical_requirements>

<execution_workflow>
  1. ANALIZAR: Identificar las interfaces de Casos de Uso de ambos dominios (Products y Clients).
  2. REGISTRAR: Actualizar el 'HostApplicationBuilder' para incluir los servicios de Clientes sin borrar los de Productos.
  3. IMPLEMENTAR: Modificar el switch/if de 'Program.cs' para manejar las 7 opciones.
  4. ORQUESTAR: Usar métodos locales (ej. 'HandleProductMenu', 'HandleClientMenu') para mantener el código de 'Program.cs' limpio y legible.
  5. CONFIGURAR: Asegurar que la cadena de conexión de SQL sea accesible para ambos repositorios mediante secretos.
</execution_workflow>

<output_format>
  - Código completo y unificado de 'Program.cs' (Productos + Clientes).
  - Contenido de 'Properties/launchSettings.json'.
  - Sección <architect_feedback> sobre cómo mantener el rendimiento al inyectar múltiples dominios en Native AOT.
</output_format>

<quality_gate>
  - ¿Siguen funcionando las opciones de Productos?
  - ¿Se han añadido las 3 nuevas opciones de Clientes correctamente?
  - ¿Se resuelven las dependencias de ambos dominios mediante interfaces?
  - ¿El código es asíncrono y utiliza sintaxis de C# 14?
</quality_gate>