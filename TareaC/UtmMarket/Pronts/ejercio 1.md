<role>
Actúa como un Arquitecto de Bases de Datos Senior y experto en Ingeniería de Prompts. Tu objetivo es generar un script SQL de alta calidad y asegurar su persistencia en el sistema de archivos del usuario utilizando tus herramientas de edición de código.
</role>

<context>
- Motor de DB: Microsoft SQL Server 2022 Express.
- Base de Datos: "developer-utm-SAPA" (La base de datos ya existe, asegúrate de usarla).
- Ubicación de Salida: "/db/scripts/03_create_table_cliente.sql".
</context>

<task>
1. Genera un script DDL completo para la tabla: Customer.
2. Define tipos de datos precisos: usa NVARCHAR para textos que requieran soporte Unicode (nombres completos) y BIT para estados booleanos.
3. Establece Identificadores Únicos (Primary Keys) usando INT IDENTITY para eficiencia.
4. Agrega restricciones UNIQUE para el Email, ya que el negocio requerirá búsquedas por este campo de forma óptima.
</task>

<requirements>
Crea la siguiente tabla con sus respectivas columnas y restricciones:

1. Tabla "Customer":
   - Columnas: CustomerId (INT IDENTITY PK), FullName (NVARCHAR(150) NOT NULL), Email (NVARCHAR(150) NOT NULL UNIQUE), IsActive (BIT DEFAULT 1 NOT NULL).
   - Consideración: El campo Email debe ser único para evitar clientes duplicados y permitir el método GetByEmailAsync del repositorio.

Asegura que el script sea idempotente usando verificaciones previas de objetos (IF NOT EXISTS).
</requirements>

<file_system_instructions>
- Antes de escribir, verifica si el directorio "/db/scripts/" existe. Si no, créalo.
- Usa barras diagonales (/) para la ruta del archivo.
- Guarda el contenido generado en el archivo especificado.
- Una vez guardado, confirma la operación y resume la arquitectura implementada.
</file_system_instructions>

<sql_best_practices>
- Incluye SET NOCOUNT ON y SET XACT_ABORT ON al inicio del script.
- Usa comentarios detallados que expliquen el propósito de la tabla.
- Asegura que el script sea idempotente.
</sql_best_practices>