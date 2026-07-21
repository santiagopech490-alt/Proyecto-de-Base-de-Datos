<role>
  Actúa como un Desarrollador Senior de Software experto en Clean Architecture y principios SOLID. Eres especialista en el ecosistema .NET 10 y dominas los patrones de Inyección de Dependencias (DI). Tu enfoque es producir código altamente testeable, desacoplado y optimizado para el rendimiento.
</role>

<context>
  Estamos en la fase de implementación de una aplicación de consola para la gestión de Clientes. 
  Ya contamos con los contratos de repositorio (IClientRepository) y las interfaces de los casos de uso (I[Action]UseCase).
  
  Estructura de archivos relevante:
  - Interfaces de Casos de Uso: Localizadas en /src/Core/UseCases/Clients/
  - Contratos de Repositorio: Localizados en /src/Core/Repositories/
  - Modelos de Dominio: Localizados en /src/Core/Entities/ (Client.cs)
  - Punto de entrada: Program.cs
</context>

<task_objective>
  Implementar de forma concreta todos los casos de uso de Clientes definidos en '/src/Core/UseCases/Clients/' creando sus respectivas clases en '/src/Application'. Además, debes registrar estas implementaciones y sus dependencias en el contenedor de servicios en 'Program.cs'.
</task_objective>

<technical_constraints>
  <rule_set name="Implementación de Lógica">
    - Ubicación: Guardar clases en la carpeta /src/Application.
    - Nomenclatura: Formato [ActionClassName]UseCaseImpl.cs (ej. CreateClientUseCaseImpl.cs).
    - SOLID: Adherencia estricta al Principio de Inversión de Dependencias (DIP).
    - Validación: Cada caso de uso debe incluir validaciones (ej. validar que el Email no esté duplicado al crear, o que el ID exista al actualizar).
  </rule_set>
  
  <rule_set name="C# 14 Idiomático">
    - Inyección de Dependencias: Utilizar obligatoriamente 'Primary Constructors' para inyectar el 'IClientRepository' en las clases de implementación.
    - Propiedades: Usar la palabra clave 'field' para cualquier lógica de validación simple en las propiedades.
    - Expresiones de Colección: Usar sintaxis [] para inicializar listas o arrays de clientes si es necesario.
  </rule_set>
  
  <rule_set name="Registro de Dependencias">
    - Modificar Program.cs para registrar cada caso de uso de cliente y su interfaz (Scoped o Transient).
    - Asegurar que el 'IClientRepository' y su implementación 'ClientRepositoryImpl' también estén registrados.
  </rule_set>
</technical_constraints>

<execution_workflow>
  1. ANALIZAR: Leer las interfaces en '/src/Core/UseCases/Clients/' para identificar los métodos a implementar.
  2. EXPLORAR: Revisar 'IClientRepository.cs' para entender los métodos de persistencia disponibles.
  3. PLANIFICAR: Diseñar la lógica de validación para cada acción (ej. evitar duplicidad de correos electrónicos).
  4. IMPLEMENTAR: Crear los archivos en '/src/Application/UseCases/Clients/' usando C# 14.
  5. REGISTRAR: Actualizar 'Program.cs' con el ServiceCollection correspondiente.
  6. VERIFICAR: Asegurar que la capa Application no dependa de 'Microsoft.Data.SqlClient' ni de 'Dapper'.
</execution_workflow>

<output_format>
  - Lista de nuevas clases creadas con sus rutas completas.
  - Bloques de código C# para cada implementación de caso de uso.
  - El código actualizado de la sección de registro de dependencias en Program.cs.
  - Sección <architect_feedback> con sugerencias sobre la robustez de las validaciones de clientes.
</output_format>

<quality_gate>
  - ¿Se utilizan Primary Constructors para la inyección del repositorio?
  - ¿Los nombres de las clases terminan en UseCaseImpl?
  - ¿Se registra cada interfaz de cliente con su implementación en Program.cs?
  - ¿El código de la capa Application es independiente de la infraestructura de base de datos?
</quality_gate>