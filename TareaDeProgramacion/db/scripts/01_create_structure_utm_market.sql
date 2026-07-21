-- =================================================================================================
-- Arquitecto: Senior Database Architect
-- Motor de DB: Microsoft SQL Server 2022 Express
-- Base de Datos: developer-utm-SAPA
-- Descripción: Script DDL para la creación de la estructura de tablas del sistema utmMarket.
-- Features de Seguridad e Integridad:
-- 1. Idempotencia: Uso de `IF NOT EXISTS` para evitar errores en ejecuciones repetidas.
-- 2. Tipos de Datos Precisos: `DECIMAL(19,4)` para valores monetarios, `NVARCHAR` para soporte Unicode.
-- 3. Constraints CHECK: Validación de datos a nivel de base de datos para prevenir valores negativos.
-- 4. Foreign Keys: Relaciones explícitas para mantener la integridad referencial.
-- 5. Transaccionalidad: `SET XACT_ABORT ON` para asegurar la atomicidad del script.
-- =================================================================================================

USE [developer-utm-SAPA];
GO

SET NOCOUNT ON;
SET XACT_ABORT ON;

BEGIN TRANSACTION;

-- =================================================================================================
-- Tabla: Producto
-- Almacena el catálogo de productos disponibles para la venta.
-- =================================================================================================
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Producto]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Producto](
        [ProductoId] INT IDENTITY(1,1) NOT NULL,
        [Nombre] NVARCHAR(100) NOT NULL,
        [SKU] VARCHAR(20) NOT NULL,
        [Marca] NVARCHAR(50) NOT NULL,
        [Precio] DECIMAL(19,4) NOT NULL,
        [Stock] INT NOT NULL,
        CONSTRAINT [PK_Producto] PRIMARY KEY CLUSTERED ([ProductoId] ASC),
        CONSTRAINT [UK_Producto_SKU] UNIQUE NONCLUSTERED ([SKU] ASC),
        CONSTRAINT [CK_Producto_Precio] CHECK ([Precio] >= 0),
        CONSTRAINT [CK_Producto_Stock] CHECK ([Stock] >= 0)
    );
    PRINT 'Tabla [Producto] creada exitosamente.';
END
ELSE
BEGIN
    PRINT 'Tabla [Producto] ya existe.';
END
GO

-- =================================================================================================
-- Tabla: Venta
-- Registra las transacciones de venta (encabezado).
-- =================================================================================================
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Venta]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[Venta](
        [VentaId] INT IDENTITY(1,1) NOT NULL,
        [Folio] VARCHAR(20) NOT NULL,
        [FechaVenta] DATETIME NOT NULL,
        [TotalArticulos] INT NOT NULL,
        [TotalVenta] DECIMAL(19,4) NOT NULL,
        [Estatus] TINYINT NOT NULL, -- 1: Pendiente, 2: Completada, 3: Cancelada
        CONSTRAINT [PK_Venta] PRIMARY KEY CLUSTERED ([VentaId] ASC),
        CONSTRAINT [UK_Venta_Folio] UNIQUE NONCLUSTERED ([Folio] ASC),
        CONSTRAINT [CK_Venta_Estatus] CHECK ([Estatus] IN (1, 2, 3))
    );
    PRINT 'Tabla [Venta] creada exitosamente.';
END
ELSE
BEGIN
    PRINT 'Tabla [Venta] ya existe.';
END
GO

-- =================================================================================================
-- Tabla: DetalleDeVenta
-- Almacena el detalle de los productos incluidos en cada venta.
-- =================================================================================================
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DetalleDeVenta]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dbo].[DetalleDeVenta](
        [DetalleDeVentaId] INT IDENTITY(1,1) NOT NULL,
        [VentaId] INT NOT NULL,
        [ProductoId] INT NOT NULL,
        [PrecioUnitario] DECIMAL(19,4) NOT NULL,
        [Cantidad] INT NOT NULL,
        [TotalDetalle] DECIMAL(19,4) NOT NULL,
        CONSTRAINT [PK_DetalleDeVenta] PRIMARY KEY CLUSTERED ([DetalleDeVentaId] ASC),
        CONSTRAINT [FK_DetalleDeVenta_Venta] FOREIGN KEY([VentaId]) REFERENCES [dbo].[Venta] ([VentaId]),
        CONSTRAINT [FK_DetalleDeVenta_Producto] FOREIGN KEY([ProductoId]) REFERENCES [dbo].[Producto] ([ProductoId]),
        CONSTRAINT [CK_DetalleDeVenta_PrecioUnitario] CHECK ([PrecioUnitario] >= 0),
        CONSTRAINT [CK_DetalleDeVenta_Cantidad] CHECK ([Cantidad] >= 0)
    );
    PRINT 'Tabla [DetalleDeVenta] creada exitosamente.';
END
ELSE
BEGIN
    PRINT 'Tabla [DetalleDeVenta] ya existe.';
END
GO

COMMIT TRANSACTION;

PRINT 'Script DDL ejecutado y commiteado exitosamente.';
GO
