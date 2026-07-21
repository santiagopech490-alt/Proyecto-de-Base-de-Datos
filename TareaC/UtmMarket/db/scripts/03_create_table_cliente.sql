/*
==============================================================================
Archivo: 03_create_table_cliente.sql
Descripción: Definición DDL para la tabla de Clientes (Customer).
Base de Datos: developer-utm-SAPA
Arquitecto: Senior Database Architect (Gemini CLI)
==============================================================================
*/

SET NOCOUNT ON;
SET XACT_ABORT ON;

-- Asegurar el uso de la base de datos correcta
USE [developer-utm-SAPA];
GO

-- Verificación de existencia para garantizar idempotencia
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Customer' AND schema_id = SCHEMA_ID('dbo'))
BEGIN
    PRINT 'Creando tabla dbo.Customer...';
    
    CREATE TABLE dbo.Customer (
        -- Identificador único autoincremental (Clave Primaria)
        -- Optimizado para índices Clustered
        CustomerId INT IDENTITY(1,1) NOT NULL,
        
        -- Nombre completo con soporte para caracteres Unicode (NVARCHAR)
        FullName NVARCHAR(150) NOT NULL,
        
        -- Email único: previene duplicados y optimiza búsquedas para GetByEmailAsync
        Email NVARCHAR(150) NOT NULL,
        
        -- Estado lógico del cliente (1: Activo, 0: Inactivo)
        IsActive BIT NOT NULL CONSTRAINT DF_Customer_IsActive DEFAULT 1,

        -- Definición explícita de la Llave Primaria
        CONSTRAINT PK_Customer PRIMARY KEY CLUSTERED (CustomerId),
        
        -- Restricción de Unicidad para el correo electrónico
        CONSTRAINT UQ_Customer_Email UNIQUE (Email)
    );

    PRINT 'Tabla dbo.Customer creada exitosamente.';
END
ELSE
BEGIN
    PRINT 'La tabla dbo.Customer ya existe en el sistema.';
END
GO
