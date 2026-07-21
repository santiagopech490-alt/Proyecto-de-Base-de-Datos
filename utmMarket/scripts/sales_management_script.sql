-- Script SQL Server para gestionar ventas y detalles de venta (MC SQL Server 2022 Express)

-- Selecciona la base de datos adecuada. Descomenta y reemplaza 'YourDatabaseName' si es necesario.
-- USE [YourDatabaseName];
-- GO

-- ********************************************************************************
-- SECCIÓN 1: REGISTRAR UNA NUEVA VENTA
-- ********************************************************************************

-- Paso 1: Iniciar una nueva transacción para asegurar la atomicidad de la venta
BEGIN TRANSACTION;
BEGIN TRY

    -- Paso 2: Insertar un registro en la tabla Venta
    -- La FechaDeVenta se establece por defecto a la fecha y hora actuales.
    -- TotalDeLaVenta se actualizará después de añadir los detalles.
    INSERT INTO Venta (FechaDeVenta, TotalDeLaVenta)
    VALUES (GETDATE(), 0.00);

    -- Obtener el Folio de la venta recién insertada
    DECLARE @NuevoFolioVenta INT;
    SET @NuevoFolioVenta = SCOPE_IDENTITY();

    PRINT 'Nueva Venta registrada con Folio: ' + CAST(@NuevoFolioVenta AS NVARCHAR(10));

    -- Paso 3: Declarar variables para los detalles de la venta
    DECLARE @IdProducto1 INT = 1; -- Ejemplo: ID del primer producto (Laptop HP Pavilion)
    DECLARE @Cantidad1 INT = 1;
    DECLARE @PrecioUnitario1 DECIMAL(10, 2);
    DECLARE @StockActual1 INT;

    DECLARE @IdProducto2 INT = 2; -- Ejemplo: ID del segundo producto (Monitor Dell 27")
    DECLARE @Cantidad2 INT = 2;
    DECLARE @PrecioUnitario2 DECIMAL(10, 2);
    DECLARE @StockActual2 INT;

    DECLARE @IdProducto3 INT = 3; -- Ejemplo: ID del tercer producto (Teclado Mecánico RGB)
    DECLARE @Cantidad3 INT = 1;
    DECLARE @PrecioUnitario3 DECIMAL(10, 2);
    DECLARE @StockActual3 INT;

    -- Obtener el precio y stock actual de los productos
    SELECT @PrecioUnitario1 = Precio, @StockActual1 = Stock FROM Producto WHERE IdProducto = @IdProducto1;
    SELECT @PrecioUnitario2 = Precio, @StockActual2 = Stock FROM Producto WHERE IdProducto = @IdProducto2;
    SELECT @PrecioUnitario3 = Precio, @StockActual3 = Stock FROM Producto WHERE IdProducto = @IdProducto3;

    -- Verificar que haya suficiente stock antes de insertar DetalleDeVenta
    IF @StockActual1 < @Cantidad1 OR @StockActual2 < @Cantidad2 OR @StockActual3 < @Cantidad3
    BEGIN
        RAISERROR('No hay suficiente stock para uno o más productos.', 16, 1);
    END

    -- Paso 4: Insertar los detalles de la venta en la tabla DetalleDeVenta
    INSERT INTO DetalleDeVenta (FolioVenta, IdProducto, Cantidad, PrecioUnitario, TotalDeDetalle)
    VALUES
        (@NuevoFolioVenta, @IdProducto1, @Cantidad1, @PrecioUnitario1, @Cantidad1 * @PrecioUnitario1),
        (@NuevoFolioVenta, @IdProducto2, @Cantidad2, @PrecioUnitario2, @Cantidad2 * @PrecioUnitario2),
        (@NuevoFolioVenta, @IdProducto3, @Cantidad3, @PrecioUnitario3, @Cantidad3 * @PrecioUnitario3);

    PRINT 'Detalles de venta añadidos para la Venta Folio: ' + CAST(@NuevoFolioVenta AS NVARCHAR(10));

    -- Paso 5: Actualizar el stock de los productos vendidos
    UPDATE Producto
    SET Stock = Stock - @Cantidad1
    WHERE IdProducto = @IdProducto1;

    UPDATE Producto
    SET Stock = Stock - @Cantidad2
    WHERE IdProducto = @IdProducto2;

    UPDATE Producto
    SET Stock = Stock - @Cantidad3
    WHERE IdProducto = @IdProducto3;

    PRINT 'Stock de productos actualizado.';

    -- Paso 6: Actualizar el TotalDeLaVenta en la tabla Venta
    UPDATE Venta
    SET TotalDeLaVenta = (SELECT SUM(TotalDeDetalle) FROM DetalleDeVenta WHERE FolioVenta = @NuevoFolioVenta)
    WHERE Folio = @NuevoFolioVenta;

    PRINT 'Total de la Venta actualizado para Folio: ' + CAST(@NuevoFolioVenta AS NVARCHAR(10));

    -- Si todo fue exitoso, confirmar la transacción
    COMMIT TRANSACTION;
    PRINT 'Transacción de venta completada exitosamente.';

END TRY
BEGIN CATCH
    -- Si ocurre algún error, revertir la transacción
    ROLLBACK TRANSACTION;
    PRINT 'Error al registrar la venta. Transacción revertida.';
    -- Lanzar el error para que sea capturado por el cliente
    THROW;
END CATCH;
GO

-- ********************************************************************************
-- SECCIÓN 2: CONSULTAS DE VERIFICACIÓN
-- ********************************************************************************

PRINT '--- Verificando la nueva venta ---';

-- Consulta para ver la venta recién creada
SELECT *
FROM Venta
WHERE Folio = (SELECT MAX(Folio) FROM Venta); -- Obtiene la última venta registrada
GO

-- Consulta para ver los detalles de la venta recién creada
SELECT dv.*, p.Nombre AS NombreProducto, p.Marca AS MarcaProducto
FROM DetalleDeVenta dv
JOIN Producto p ON dv.IdProducto = p.IdProducto
WHERE dv.FolioVenta = (SELECT MAX(Folio) FROM Venta); -- Obtiene los detalles de la última venta
GO

-- Consulta para ver el stock actualizado de los productos involucrados
SELECT IdProducto, Nombre, Stock
FROM Producto
WHERE IdProducto IN (1, 2, 3); -- IDs de los productos vendidos en el ejemplo
GO
