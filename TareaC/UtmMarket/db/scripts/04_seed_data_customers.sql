/*
==============================================================================
Archivo: 04_seed_data_customers.sql
Descripción: Script de Seeding para la tabla Customer (100 registros realistas).
Mercado: México 2025
Arquitecto: Senior Database Architect (Gemini CLI)
==============================================================================
*/

USE [developer-utm-SAPA];
GO

SET NOCOUNT ON;
SET XACT_ABORT ON;

BEGIN TRANSACTION;
BEGIN TRY
    -- 1. Limpieza de datos previa e inicialización del contador de identidad
    DELETE FROM dbo.Customer;
    DBCC CHECKIDENT ('dbo.Customer', RESEED, 0);

    -- 2. Habilitar inserción explícita de Identidad
    SET IDENTITY_INSERT dbo.Customer ON;

    -- Lote 1 (1-25)
    INSERT INTO dbo.Customer (CustomerId, FullName, Email, IsActive) VALUES
    (1, 'Juan Carlos Hernández', 'juan.hernandez@outlook.com.mx', 1),
    (2, 'María Elena García', 'm.garcia.elena@gmail.com', 1),
    (3, 'José Luis Martínez', 'j.luis.mtz@yahoo.com.mx', 1),
    (4, 'Guadalupe López', 'guadalupe.lopez@empresa.mx', 0),
    (5, 'Francisco Javier González', 'fj.gonzalez2025@hotmail.com', 1),
    (6, 'Juana Rodríguez', 'juana.rodriguez.mx@proton.me', 1),
    (7, 'Antonio Pérez', 'antonio.perez.consultor@gmail.com', 1),
    (8, 'Alejandro Sánchez', 'a.sanchez.dev@outlook.com', 1),
    (9, 'Rosa María Ramírez', 'rosa.ramirez.m@icloud.com', 1),
    (10, 'Manuel Flores', 'manuel.flores.vendas@empresa.mx', 0),
    (11, 'Ricardo Gómez', 'ricardo.gomez.mx@gmail.com', 1),
    (12, 'Beatriz Díaz', 'b.diaz.mex@outlook.com', 1),
    (13, 'Gabriel Reyes', 'gabriel.reyes.p@yahoo.com', 1),
    (14, 'Sofía Morales', 'sofia.morales.25@gmail.com', 1),
    (15, 'Javier Vázquez', 'javier.vazquez.log@empresa.mx', 1),
    (16, 'Elena Castillo', 'elena.castillo.m@hotmail.com', 1),
    (17, 'Miguel Ángel Jiménez', 'miguel.jimenez.mx@gmail.com', 0),
    (18, 'Carmen Gutiérrez', 'carmen.gutierrez.v@outlook.com', 1),
    (19, 'Roberto Ruiz', 'roberto.ruiz.consulting@gmail.com', 1),
    (20, 'Isabel Mendoza', 'isabel.mendoza.mx@yahoo.com', 1),
    (21, 'Fernando Aguilar', 'fernando.aguilar.p@gmail.com', 1),
    (22, 'Silvia Ortiz', 'silvia.ortiz.mx@outlook.com', 1),
    (23, 'Carlos Moreno', 'carlos.moreno.dev@gmail.com', 1),
    (24, 'Martha Salazar', 'martha.salazar.m@empresa.mx', 1),
    (25, 'Eduardo Vargas', 'eduardo.vargas.log@hotmail.com', 1);

    -- Lote 2 (26-50)
    INSERT INTO dbo.Customer (CustomerId, FullName, Email, IsActive) VALUES
    (26, 'Patricia Méndez', 'patricia.mendez.mx@gmail.com', 1),
    (27, 'Raúl Castro', 'raul.castro.v@outlook.com', 1),
    (28, 'Yolanda Romero', 'yolanda.romero.p@yahoo.com', 0),
    (29, 'Jorge Herrera', 'jorge.herrera.mx@gmail.com', 1),
    (30, 'Lucía Medina', 'lucia.medina.v@empresa.mx', 1),
    (31, 'Alberto Domínguez', 'alberto.dominguez.p@hotmail.com', 1),
    (32, 'Claudia Peña', 'claudia.pena.mx@gmail.com', 1),
    (33, 'Arturo Soto', 'arturo.soto.dev@outlook.com', 1),
    (34, 'Sandra Guerrero', 'sandra.guerrero.m@yahoo.com', 1),
    (35, 'Daniel Valenzuela', 'daniel.valenzuela.p@gmail.com', 0),
    (36, 'Mónica Ibarra', 'monica.ibarra.mx@empresa.mx', 1),
    (37, 'Óscar Navarro', 'oscar.navarro.v@hotmail.com', 1),
    (38, 'Verónica Rojas', 'veronica.rojas.p@gmail.com', 1),
    (39, 'Sergio Delgado', 'sergio.delgado.mx@outlook.com', 1),
    (40, 'Lorena Camacho', 'lorena.camacho.v@yahoo.com', 1),
    (41, 'Hugo Lara', 'hugo.lara.p@gmail.com', 1),
    (42, 'Gabriela Fuentes', 'gabriela.fuentes.mx@empresa.mx', 0),
    (43, 'Felipe Esquivel', 'felipe.esquivel.v@hotmail.com', 1),
    (44, 'Adriana Gallegos', 'adriana.gallegos.p@gmail.com', 1),
    (45, 'Víctor Maldonado', 'victor.maldonado.mx@outlook.com', 1),
    (46, 'Rosa Isela Espinoza', 'rosa.isela.e@yahoo.com', 1),
    (47, 'Mauricio Parra', 'mauricio.parra.p@gmail.com', 1),
    (48, 'Karla Velázquez', 'karla.velazquez.mx@empresa.mx', 1),
    (49, 'Andrés Luna', 'andres.luna.v@hotmail.com', 0),
    (50, 'Estela Figueroa', 'estela.figueroa.p@gmail.com', 1);

    -- Lote 3 (51-75)
    INSERT INTO dbo.Customer (CustomerId, FullName, Email, IsActive) VALUES
    (51, 'Rogelio Zavala', 'rogelio.zavala.mx@gmail.com', 1),
    (52, 'Brenda Nolasco', 'brenda.nolasco.v@outlook.com', 1),
    (53, 'Santiago Villegas', 'santiago.villegas.p@yahoo.com', 1),
    (54, 'Diana Murillo', 'diana.murillo.mx@gmail.com', 0),
    (55, 'Héctor Trejo', 'hector.trejo.v@empresa.mx', 1),
    (56, 'Paola Miranda', 'paola.miranda.p@hotmail.com', 1),
    (57, 'Efrén Villalobos', 'efren.villalobos.mx@gmail.com', 1),
    (58, 'Marisol Orozco', 'marisol.orozco.v@outlook.com', 1),
    (59, 'Ignacio Meza', 'ignacio.meza.p@yahoo.com', 1),
    (60, 'Teresa Becerra', 'teresa.becerra.mx@gmail.com', 0),
    (61, 'Armando Covarrubias', 'armando.cova.v@empresa.mx', 1),
    (62, 'Leticia Briseño', 'leticia.briseno.p@hotmail.com', 1),
    (63, 'Enrique Soria', 'enrique.soria.mx@gmail.com', 1),
    (64, 'Miriam Barajas', 'miriam.barajas.v@outlook.com', 1),
    (65, 'Gustavo Arenas', 'gustavo.arenas.p@yahoo.com', 1),
    (66, 'Nadia Beltrán', 'nadia.beltran.mx@gmail.com', 0),
    (67, 'Joaquín Galván', 'joaquin.galvan.v@empresa.mx', 1),
    (68, 'Rebeca Corona', 'rebeca.corona.p@hotmail.com', 1),
    (69, 'Saúl Olvera', 'saul.olvera.mx@gmail.com', 1),
    (70, 'Fabiola Valdés', 'fabiola.valdes.v@outlook.com', 1),
    (71, 'Israel Arredondo', 'israel.arredondo.p@yahoo.com', 1),
    (72, 'Ximena Tovar', 'ximena.tovar.mx@gmail.com', 0),
    (73, 'Ramiro Lemus', 'ramiro.lemus.v@empresa.mx', 1),
    (74, 'Cecilia Solís', 'cecilia.solis.p@hotmail.com', 1),
    (75, 'Salvador Pineda', 'salvador.pineda.mx@gmail.com', 1);

    -- Lote 4 (76-100)
    INSERT INTO dbo.Customer (CustomerId, FullName, Email, IsActive) VALUES
    (76, 'Liliana Rangel', 'liliana.rangel.v@outlook.com', 1),
    (77, 'Marcos Palacios', 'marcos.palacios.p@yahoo.com', 1),
    (78, 'Ofelia Escobedo', 'ofelia.escobedo.mx@gmail.com', 0),
    (79, 'Samuel Rosales', 'samuel.rosales.v@empresa.mx', 1),
    (80, 'Irene Saucedo', 'irene.saucedo.p@hotmail.com', 1),
    (81, 'Tomás Leyva', 'tomas.leyva.mx@gmail.com', 1),
    (82, 'Alicia Carrillo', 'alicia.carrillo.v@outlook.com', 1),
    (83, 'Benjamín Cerda', 'benjamin.cerda.p@yahoo.com', 1),
    (84, 'Guillermina Tapia', 'guillermina.tapia.mx@gmail.com', 0),
    (85, 'Omar Cedillo', 'omar.cedillo.v@empresa.mx', 1),
    (86, 'Lourdes Grimaldo', 'lourdes.grimaldo.p@hotmail.com', 1),
    (87, 'Esteban Fajardo', 'esteban.fajardo.mx@gmail.com', 1),
    (88, 'Graciela Nava', 'graciela.nava.v@outlook.com', 1),
    (89, 'Pedro Santillán', 'pedro.santillan.p@yahoo.com', 1),
    (90, 'Consuelo Gamboa', 'consuelo.gamboa.mx@gmail.com', 0),
    (91, 'Erick Magaña', 'erick.magana.v@empresa.mx', 1),
    (92, 'Lidia Duarte', 'lidia.duarte.p@hotmail.com', 1),
    (93, 'Mateo Godínez', 'mateo.godinez.mx@gmail.com', 1),
    (94, 'Norma Frías', 'norma.frias.v@outlook.com', 1),
    (95, 'Rodolfo Uribe', 'rodolfo.uribe.p@yahoo.com', 1),
    (96, 'Julieta Cisneros', 'julieta.cisneros.mx@gmail.com', 0),
    (97, 'César Granados', 'cesar.granados.v@empresa.mx', 1),
    (98, 'Araceli Ponce', 'araceli.ponce.p@hotmail.com', 1),
    (99, 'Adolfo Montes', 'adolfo.montes.mx@gmail.com', 1),
    (100, 'Virginia Lozano', 'virginia.lozano.v@outlook.com', 1);

    -- 3. Deshabilitar inserción de Identidad
    SET IDENTITY_INSERT dbo.Customer OFF;

    -- 4. Sincronizar el contador de identidad al último valor insertado
    DBCC CHECKIDENT ('dbo.Customer', RESEED, 100);

    COMMIT TRANSACTION;
    PRINT 'Carga de 100 clientes completada exitosamente.';
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
    DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
    RAISERROR(@ErrorMessage, 16, 1);
END CATCH;
GO

-- Validación final del conteo y estatus
SELECT 
    COUNT(*) as TotalRegistros, 
    SUM(CASE WHEN IsActive = 1 THEN 1 ELSE 0 END) as Activos,
    SUM(CASE WHEN IsActive = 0 THEN 1 ELSE 0 END) as Inactivos
FROM dbo.Customer;
GO
