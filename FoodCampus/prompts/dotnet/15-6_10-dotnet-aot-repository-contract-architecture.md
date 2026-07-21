<role>
Actúa como un Principal Software Architect experto en .NET 10, C# 14 y diseño de sistemas de alto rendimiento. Tu especialidad es la implementación de patrones de persistencia en Arquitecturas Limpias, optimizados para Native AOT y Dapper.
</role>

<context>
- Proyecto: "[UtmMarket.csproj]" (Console Application).
- Objetivo: Diseñar el contrato de repositorio (Interface) para la entidad "Cliente".
- Stack Técnico: .NET 10.0 (LTS), C# 14, Native AOT.
- Mapeo: Se dispone de 'ClienteMapper' para la conversión entre 'ClienteEntity' (Persistencia) y 'Cliente' (Dominio).
- Archivos de referencia: @src/Core/Entities/Cliente.cs y @src/Infrastructure/Models/Data/ClienteEntity.cs.
</context>

<task>
Crea la interfaz "IClienteRepository.cs" en el directorio "src/Core/Repositories/". El contrato debe ser riguroso, estar en inglés (IClientRepository) y seguir los estándares de C# 14.
</task>

<interface_specifications>
1. Consulta de Flujo (Streaming):
   - 'GetAllAsync': Debe retornar 'IAsyncEnumerable<Client>' para permitir el procesamiento de grandes volúmenes de clientes sin cargar toda la lista en memoria.
2. Consulta por Identidad:
   - 'GetByIdAsync': Debe retornar 'Task<Client?>', manejando la nulidad con C# 14 NRT.
3. Filtrado por Criterios (AOT Friendly):
   - 'FindAsync': Define un método que acepte un objeto 'ClientFilter'. El filtro debe incluir búsqueda por 'FullName', 'Email' y el estado 'IsActive'. Evita Expressions genéricas para asegurar compatibilidad con Native AOT.
4. Operaciones de Persistencia:
   - 'AddAsync': Recibe 'Client' de dominio y retorna el objeto con su ID generado.
   - 'UpdateAsync': Actualiza los datos del cliente (nombre, email, estado).
5. Cancelación Cooperativa:
   - Todos los métodos deben incluir 'CancellationToken cancellationToken = default'.
</interface_specifications>

<coding_standards_csharp14>
- Abstracción: La interfaz debe ser pura, sin dependencias de Dapper o infraestructura.
- C# 14 syntax: Para 'ClientFilter', utiliza Primary Constructors y la palabra clave 'field' para validaciones de propiedades (ej. asegurar que el email tenga un formato básico antes de la consulta).
- IMPORTANTE: No declares campos privados manuales si usas 'field'.
- Documentación: Incluye comentarios XML (///) detallando el comportamiento de cada método.
</coding_standards_csharp14>

<cli_safety_protocol>
- Lee el contenido de los archivos de dominio 'Cliente.cs' para asegurar la coincidencia de tipos.
- Verifica si el directorio "src/Core/Repositories/" existe; si no, créalo.
- Asegura que el contrato permita la búsqueda eficiente de clientes activos/inactivos.
</cli_safety_protocol>

<output_format>
Devuelve un documento Markdown que contenga:
1. El código fuente completo de 'IClientRepository.cs'.
2. La definición del objeto 'ClientFilter' (como un record inmutable con sintaxis de C# 14).
3. Una sección de "Asesoría Arquitectónica" sobre cómo Native AOT afecta la serialización de tipos en el repositorio de Clientes.
</output_format>