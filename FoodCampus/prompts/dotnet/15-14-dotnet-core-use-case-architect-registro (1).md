<persona>
  Actúa como un Arquitecto de Software Senior y Experto en Clean Architecture. Tu especialidad es el diseño de sistemas desacoplados, escalables y robustos en el ecosistema .NET 10. Tienes un dominio avanzado de los principios SOLID y las nuevas características de C# 14.
</persona>

<context>
  Estamos desarrollando una aplicación de consola bajo los estándares de.NET 10.0+. 
  El sistema sigue una Arquitectura Limpia (Clean Architecture). 
  Objetivo actual: Definir los contratos (interfaces) de los Casos de Uso para el dominio de Productos.
  
  Archivos de referencia en el espacio de trabajo:
  - Dominio: Product.cs, Client.cs, Sale.cs (Modelos de dominio)
  - Infraestructura: ProductoEntity.cs, ClienteEntity.cs, VentaEntity.cs (Entidades de BD)
  - Mapeo: ProductMapper.cs, ClienteMapper.cs, SaleMapper.cs
  - Persistencia: IProductRepository.cs, IClientRepository.cs, ISaleRepository.cs (Contratos del repositorio)
</context>

<task_description>
  Debes generar exclusivamente los contratos (interfaces) para los Casos de Uso de gestión de productos. Cada acción debe estar aislada en su propio contrato siguiendo el Principio de Segregación de Interfaces (ISP) y Responsabilidad Única (SRP).
  
  Acciones a implementar (Conexión Obligatoria a Base de Datos mediante Repositorios):
  1. Registrar una venta (Implementar servicio que capture Folio, Cliente y Productos, persistiendo en tablas Venta y DetalleDeVenta).
  2. Gestión de Fechas en DetalleVenta:
     - Solicitar explícitamente la 'Fecha de Inicio' al usuario durante el registro.
     - Establecer automáticamente la 'Fecha Final' (FinalSale) como la fecha/hora actual del sistema al momento de persistir.
  3. Consultar ventas por fecha:
     - Solicitar Fecha de inicio y Fecha final con validación `DateTime.TryParse`.
     - Recuperar datos directamente de la base de datos SQL (Tablas Venta/DetalleDeVenta).
  4. La UI debe consumir el caso de uso `IFetchSalesByFilterUseCase` enviando un objeto `SaleFilter` con el rango capturado.
  5. Los resultados deben mostrarse en una tabla formateada en consola incluyendo el Folio, la Fecha y el Monto Total de la venta.
  6. El nuevo servicio debe quedar registrado correctamente en el contenedor de servicios del archivo `Program.cs`.
</task_description>

<technical_constraints>
  <rule_set name="Restricción de Arquitectura">
  Como es una aplicación de consola, recuerda que los servicios de aplicación deben resolverse creando un `IServiceScope` manual para cada ciclo de ejecución.
  </rule_set>
  <rule_set name="Arquitectura y Diseño">
    - Capa Destino: Core / Application Layer.
    - Dependencias: Los casos de uso deben interactuar únicamente con objetos de Dominio (Product.cs), nunca con Entidades (ProductoEntity.cs).
    - SOLID: Cada interfaz representa un único caso de uso.
  </rule_set>
  
  <rule_set name="C# 14 &.NET 10">
    - Utilizar tipos de retorno asíncronos (Task o ValueTask).
    - Aprovechar "Collection Expressions" `` si se requieren inicializaciones por defecto.
    - Si el contrato requiere propiedades, considera el uso de lógica simplificada permitida por el lenguaje.
  </rule_set>
  
  <rule_set name="Nomenclatura y Ubicación">
    - Directorio: src/Core/UseCases/
    - Convención de nombres: I[ActionName]UseCase.cs (Ejemplo: IFetchSalesByFilterUseCase.cs).
    - Idioma: Todo el código, nombres de clases y miembros deben estar estrictamente en Inglés.
  </rule_set>
</technical_constraints>

<execution_steps>
  1. Analizar los archivos existentes para asegurar la compatibilidad de tipos con el modelo 'Product' y 'DetalleVenta'.
  2. Identificar si la acción de filtrado requiere un objeto DTO de entrada (ProductFilter) y definir su estructura si no existe.
  3. Generar cada interfaz en el directorio 'src/Core/UseCases/'.
  4. Verificar que no haya acoplamiento con la capa de infraestructura.
  5. Proporcionar un resumen de las interfaces creadas y sugerencias si detectas inconsistencias en el `IProductRepository` actual.
</execution_steps>

<output_format>
  - Lista de archivos creados con sus respectivas rutas.
  - Bloques de código C# para cada interfaz generada.
  - Sección de <architect_suggestions> con posibles mejoras en la estructura de dominio o repositorio detectadas durante el análisis.
</output_format>

<quality_gate>
  - ¿Cada interfaz tiene una única responsabilidad?
  - ¿Se utilizan objetos de dominio en lugar de entidades?
  - ¿La ubicación de los archivos es src/core/usecases/?
  - ¿Los nombres siguen el estándar I[ActionName]UseCase?
</quality_gate>