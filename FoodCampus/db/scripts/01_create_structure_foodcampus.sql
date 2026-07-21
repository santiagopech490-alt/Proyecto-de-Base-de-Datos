/*
===============================================================================
Database: [developer-utm-SAPA]
Script: 01_create_structure_foodcampus.sql
Description: DDL Script for Restaurante, Pedido, and DetallePedido tables.
Version: 1.1 (Updated DB Name)
Author: DB Architect
===============================================================================
*/

SET NOCOUNT ON;
SET XACT_ABORT ON;

-- Ensure we are using the correct database
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'developer-utm-SAPA')
BEGIN
    CREATE DATABASE [developer-utm-SAPA];
END
GO

USE [developer-utm-SAPA];
GO

-- 1. Create Table "Restaurante"
-- Stores information about available restaurants with opening/closing hours.
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Restaurante]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Restaurante] (
        [Id] INT IDENTITY(1,1) NOT NULL,
        [Nombre] NVARCHAR(100) NOT NULL,
        [Especialidad] NVARCHAR(100) NULL,
        [HorarioApertura] TIME(0) NULL,
        [HorarioCierre] TIME(0) NULL,
        
        CONSTRAINT [PK_Restaurante] PRIMARY KEY CLUSTERED ([Id] ASC),
        CONSTRAINT [UQ_Restaurante_Nombre] UNIQUE ([Nombre]),
        CONSTRAINT [UQ_Restaurante_Especialidad] UNIQUE ([Especialidad])
    );
END
GO

-- Trigger to limit the number of restaurants to 15 (Business Restriction)
IF EXISTS (SELECT * FROM sys.triggers WHERE name = 'TRG_LimitRestaurantes')
    DROP TRIGGER [dbo].[TRG_LimitRestaurantes];
GO

CREATE TRIGGER [dbo].[TRG_LimitRestaurantes]
ON [dbo].[Restaurante]
FOR INSERT
AS
BEGIN
    DECLARE @Count INT;
    SELECT @Count = COUNT(*) FROM [dbo].[Restaurante];
    
    IF @Count > 15
    BEGIN
        ROLLBACK TRANSACTION;
        RAISERROR ('Maximum limit of 15 restaurants reached for this database version.', 16, 1);
    END
END
GO

-- 2. Create Table "Pedido"
-- Stores general header information for client orders.
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Pedido]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Pedido] (
        [IdPedido] INT IDENTITY(1,1) NOT NULL,
        [IdCliente] INT NOT NULL,
        [FechaHora] DATETIME DEFAULT GETDATE(),
        [CostoEnvio] DECIMAL(19,4) NOT NULL,
        
        CONSTRAINT [PK_Pedido] PRIMARY KEY CLUSTERED ([IdPedido] ASC),
        CONSTRAINT [CK_Pedido_CostoEnvio] CHECK ([CostoEnvio] >= 0)
    );
END
GO

-- 3. Create Table "DetallePedido"
-- Stores the line items for each order, linking to the Pedido table.
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DetallePedido]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[DetallePedido] (
        [IdDetalle] INT IDENTITY(1,1) NOT NULL,
        [IdPedido] INT NOT NULL,
        [IdPlatillo] INT NOT NULL,
        [Cantidad] INT NOT NULL,
        [Subtotal] DECIMAL(19,4) NOT NULL,
        
        CONSTRAINT [PK_DetallePedido] PRIMARY KEY CLUSTERED ([IdDetalle] ASC),
        CONSTRAINT [FK_DetallePedido_Pedido] FOREIGN KEY ([IdPedido]) 
            REFERENCES [dbo].[Pedido] ([IdPedido]),
        CONSTRAINT [CK_DetallePedido_Cantidad] CHECK ([Cantidad] >= 0),
        CONSTRAINT [CK_DetallePedido_Subtotal] CHECK ([Subtotal] >= 0)
    );
END
GO

PRINT 'SQL Script execution completed successfully for database [developer-utm-SAPA].';
