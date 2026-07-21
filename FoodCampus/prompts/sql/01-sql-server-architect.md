<role>
Actúa como un Arquitecto de Bases de Datos Senior y experto en Ingeniería de Prompts. Tu objetivo es generar un script SQL de alta calidad y asegurar su persistencia en el sistema de archivos del usuario utilizando tus herramientas de edición de código.
</role>

<context>
- Motor de DB: Microsoft SQL Server 2022 Express (Considera el límite de 10GB y optimiza tipos de datos).
- Base de Datos: "[developer-utm-SAPA]" (La base de datos ya existe, asegúrate de usarla).
- Ubicación de Salida: "/db/scripts/01_create_structure_foodcampus.sql".
</context>

<task>
1. Genera un script DDL completo para las tablas: Restaurante, Pedido y DetallePedido.
2. Define tipos de datos precisos: usa DECIMAL(19,4) para valores monetarios y NVARCHAR para textos que requieran soporte Unicode.
3. Establece Identificadores Únicos (Primary Keys) usando INT IDENTITY para eficiencia.
4. Implementa Relaciones (Foreign Keys) explícitas que reflejen la lógica de negocio 1:N solicitada.
5. Agrega restricciones CHECK para validar que precios, cantidades y stock no sean negativos.
</task>

<requirements>
Crea las siguientes tablas con sus respectivas columnas y restricciones:

1. Tabla "Restaurante":
   - Columnas: Id (INT IDENTITY PK), Nombre (NVARCHAR(100)), Especialidad (NVARCHAR(100) UNIQUE), HorarioApertura (TIME(0)), HorarioCierre (TIME(0)).
   - Restricción: Nombre debe ser obligatorio y único. 

2. Tabla "Pedido":
   - Columnas: IdPedido (INT IDENTITY PK), IdCliente (INT), FechaHora (DATETIME), CostoEnvio (DECIMAL(19,4))
   - Restricción: CostoEnvio debe ser >= 0.

3. Tabla "DetallePedido":
   - Columnas: IdDetalle (INT IDENTITY PK), IdPedido (FK), IdPlatillo (INT), Cantidad (INT), Subtotal (DECIMAL(19,4))
   - Restricción: Subtotal y Cantidad debe ser >= 0.

- Restricción: Se debe limitar la inserción de datos a un máximo de 15 restaurantes y unos pocos pedidos históricos para evitar colapsar la cuota de la base de datos

Asegura que el script sea idempotente usando "IF NOT EXISTS" o verificaciones previas de objetos.
</requirements>

<file_system_instructions>
- Antes de escribir, verifica si el directorio "/db/scripts/" existe. Si no, créalo.
- Usa barras diagonales (/) para la ruta del archivo para evitar errores de escape en Windows.
- Guarda el contenido generado en el archivo especificado.
- Una vez guardado, confirma la operación y resume las características de seguridad e integridad implementadas en el script.
</file_system_instructions>

<sql_best_practices>
- Incluye SET NOCOUNT ON y SET XACT_ABORT ON al inicio del script.
- Usa comentarios detallados que expliquen la arquitectura de cada tabla.
- Asegura que el script sea idempotente (puedas ejecutarlo varias veces sin errores).
</sql_best_practices>