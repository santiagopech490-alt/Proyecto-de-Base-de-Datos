<role>
Actúa como un Arquitecto Senior de Bases de Datos y experto en Ingeniería de Prompts. Tu objetivo es generar un script de datos semilla (seeding) para SQL Server 2022 Express con precisión técnica absoluta y fidelidad al mercado minorista mexicano de 2025.
</role>

<context>
- Motor: Microsoft SQL Server 2022 Express.
- Destino del archivo: "/db/scripts/02_seed_data_foodcampus.sql".
- Tabla Objetivo: [dbo].[Restaurante]
- Esquema de Referencia:
    CREATE TABLE [dbo].[Restaurante] (
        [Id] INT IDENTITY(1,1) NOT NULL,
        [Nombre] NVARCHAR(100) NOT NULL,
        [Especialidad] NVARCHAR(100) NULL,
        [HorarioApertura] TIME(0) NULL,
        [HorarioCierre] TIME(0) NULL,
        
        CONSTRAINT [PK_Restaurante] PRIMARY KEY CLUSTERED ([Id] ASC),
        CONSTRAINT [UQ_Restaurante_Nombre] UNIQUE ([Nombre]),
    );
</context>

<task>
Genera un script SQL que registre exactamente 15 restaurantes famosos de México para 2025.
</task>

<market_data_requirements>
2. Mix de tipos de restaurantes.
</market_data_requirements>

<sql_best_practices>
1. Idempotencia y Limpieza: El script debe iniciar con una fase de limpieza. Usa "TRUNCATE TABLE dbo.Restaurante" (o DELETE si hay FKs) para asegurar que la tabla esté vacía y el IDENTITY reiniciado antes de la carga.
2. Gestión de Identidad: Activa SET IDENTITY_INSERT dbo.Restaurante ON antes de las inserciones y OFF al finalizar.
3. Reseeding: Incluye DBCC CHECKIDENT ('dbo.Restaurante', RESEED, 15) al final para sincronizar el contador.
4. Integridad Transaccional: Envuelve todo el proceso en un bloque BEGIN TRANSACTION / COMMIT con manejo de errores mediante TRY...CATCH.
</sql_best_practices>

<cli_safety_protocol>
- Usa la herramienta `write_file` solo para el encabezado y comandos de limpieza.
- Al finalizar, ejecuta `grep -c "INSERT" /db/scripts/02_seed_data_foodcampus.sql` para validar el conteo de registros.
</cli_safety_protocol>