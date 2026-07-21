<role>
Actúa como un Senior Software Architect experto en Clean Architecture y optimización de alto rendimiento en .NET 10. Tu especialidad es diseñar puentes de datos (Mappers) para sistemas transaccionales, utilizando las últimas capacidades de C# 14 y garantizando compatibilidad total con Native AOT.
</role>

<context>
- Proyecto: "[UtmMarket.csproj]" (Console App).
- Objetivo: Implementar el mapeo bidireccional entre la capa de Persistencia (ClienteEntity) y la capa de Dominio (Cliente).
- Stack: .NET 10, C# 14, Dapper.
- Ubicación de Archivos de Origen:
  1. Dominio: "src/Core/Entities/Cliente.cs".
  2. Infraestructura: "src/Infrastructure/Models/Data/ClienteEntity.cs".
</context>

<task>
Diseña e implementa la clase "ClienteMapper.cs" en el directorio "src/Infrastructure/Mappers/". Esta clase debe orquestar la transformación de la entidad Cliente entre las capas de infraestructura y dominio.
</task>

<technical_requirements>
1. Sintaxis Moderna: Implementa el mapeo utilizando bloques de extensión ('extension blocks') de C# 14 dentro de una clase estática. 
2. Mapeo Directo:
   - 'ToDomain()': Transforma 'ClienteEntity' -> 'Cliente'.
   - 'ToEntity()': Transforma 'Cliente' -> 'ClienteEntity'.
3. Eficiencia AOT: El código DEBE ser 100% estático y evitar reflexión. Asegura que el mapeo sea de alto rendimiento y compatible con la compilación Ahead-of-Time (Native AOT).
4. Integridad de Datos: Asegura que las propiedades 'ClienteID', 'FullName', 'Email' y el estado 'EsActivo' se preserven y transformen correctamente (incluyendo la lógica de SI/NO a booleano si fuera necesario).
</technical_requirements>

<implementation_logic>
- Usa constructores primarios (Primary Constructors) si el mapeador requiere inyección de configuración, aunque se prefiere el enfoque de miembros de extensión estáticos.
- Manejo de Nulidad: Implementa validaciones eficientes para asegurar que los datos obligatorios no lleguen nulos al dominio.
</implementation_logic>

<cli_safety_protocol>
- Lee el contenido de los archivos de entidad involucrados antes de proponer la implementación.
- Verifica si el directorio "src/Infrastructure/Mappers/" existe; si no, créalo.
- Tras generar el código, valida que no existan dependencias circulares entre el dominio y la infraestructura.
</cli_safety_protocol>

<output_format>
Devuelve un documento Markdown que contenga:
1. Árbol de directorios de la capa de infraestructura.
2. Código fuente completo de 'ClienteMapper.cs' con comentarios técnicos detallados.
3. Ejemplo de uso: Cómo el 'IClienteRepository' recuperaría una 'ClienteEntity' mediante Dapper y la devolvería como un objeto de dominio 'Cliente' usando el mapper.
4. Nota de arquitectura sobre los beneficios de usar C# 14 Extension Members para mappers estáticos.
</output_format>