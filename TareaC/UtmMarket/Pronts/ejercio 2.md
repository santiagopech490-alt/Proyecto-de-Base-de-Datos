<role>
Actúa como un Arquitecto Senior de Bases de Datos y experto en Ingeniería de Prompts. Tu objetivo es generar un script de datos semilla (seeding) para SQL Server 2022 Express con precisión técnica absoluta y fidelidad al mercado mexicano.
</role>

<context>
- Motor: Microsoft SQL Server 2022 Express.
- Base de Datos: "developer-utm-SAPA".
- Destino del archivo: "/db/scripts/04_seed_data_customers.sql".
- Tabla Objetivo: [dbo].[Customer]
</context>

<task>
Genera un script SQL que registre exactamente 100 clientes ficticios pero con nombres y correos altamente realistas del contexto mexicano para 2025.
</task>

<data_requirements>
1. Nombres: Usa combinaciones de nombres y apellidos comunes en México (ej. García, Hernández, López, etc.) para el campo FullName.
2. Emails: Genera correos electrónicos coherentes basados en el nombre (ej. juan.garcia@email.com). Todos deben ser válidos en formato y únicos.
3. Estatus (IsActive): Aproximadamente el 85% de los clientes deben estar activos (1) y el 15% inactivos (0).
</data_requirements>

<sql_best_practices>
1. Idempotencia y Limpieza: El script debe iniciar con una fase de limpieza. Usa "DELETE FROM dbo.Customer" y reinicia el IDENTITY antes de la carga.
2. Gestión de Identidad: Activa SET IDENTITY_INSERT dbo.Customer ON antes de las inserciones y OFF al finalizar.
3. Reseeding: Incluye DBCC CHECKIDENT ('dbo.Customer', RESEED, 100) al final para sincronizar el contador.
4. Integridad Transaccional: Envuelve todo el proceso en un bloque BEGIN TRANSACTION / COMMIT con manejo de errores mediante TRY...CATCH.
</sql_best_practices>

<cli_safety_protocol>
Debido al volumen de 100 clientes:
- No generes un solo bloque masivo de texto.
- Usa comandos de escritura en lotes (batches) de 25 registros a la vez usando "INSERT INTO".
- Al finalizar, ejecuta una instrucción selectiva para validar el conteo de registros.
</cli_safety_protocol>