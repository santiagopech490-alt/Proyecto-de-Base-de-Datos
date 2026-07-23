# DOCUMENTACIÓN OFICIAL DEL PROYECTO DE BASE DE DATOS
## PLATAFORMA INMOBILIARIA DE LUJO: LUXU REAL ESTATE
**Curso:** Bases de Datos II / Sistemas de Bases de Datos  
**Alumno:** Santiago Asahel Pech  
**Fecha:** Julio 2026  
**Tecnologías:** Next.js 16, React 19, TypeScript, PostgreSQL, MongoDB, Redis  

---

# PORTADA (2 PUNTOS)

**UNIVERSIDAD AUTÓNOMA DE YUCATÁN**  
**FACULTAD DE MATEMÁTICAS / INGENIERÍA DE SOFTWARE**  

* **Nombre de la Asignatura:** Proyecto de Base de Datos / Gestión de Bases de Datos  
* **Nombre del Proyecto:** Luxu Real Estate - Sistema de Gestión Inmobiliaria de Lujo  
* **Nombre del Estudiante:** Santiago Asahel Pech  
* **Matrícula:** 2026-BD-9941  
* **Profesor Evaluador:** Comité Académico de Bases de Datos  
* **Semestre:** 2026-I  
* **Fecha de Entrega:** 22 de Julio de 2026  

---

# DESARROLLO (96 PUNTOS)

## 1. Descripción del Problema (3 pts.)
El sector inmobiliario de alta gama requiere un manejo riguroso y de alto rendimiento de la información. Tradicionalmente, la gestión de inmuebles de lujo sufre de serios cuellos de botella:
1. **Desorganización y Redundancia de Datos:** Las propiedades, propietarios, agentes y citas de visitas suelen almacenarse en hojas de cálculo aisladas, provocando inconsistencias, pérdida de leads y duplicación.
2. **Consultas Complejas Lentas:** Los usuarios buscan inmuebles bajo filtros estrictos (rango de precio, ubicación exactas, número de habitaciones, baños, tipo de propiedad y amenidades específicas como piscina privada o helipuerto). Sin una base de datos relacional normalizada e índices optimizados, los tiempos de respuesta se degradan.
3. **Escalabilidad y Registros de Auditoría:** El procesamiento masivo de datos analíticos (como el número de visualizaciones e interacciones diarias) satura los motores transaccionales tradicionales si no se complementa con un modelo NoSQL adecuado.
4. **Seguridad y Control de Acceso:** No existe una diferenciación clara de roles (Admin vs. Cliente vs. Agente), permitiendo que usuarios no autorizados modifiquen publicaciones.

**Solución propuesta:** La plataforma **Luxu Real Estate** resuelve estas deficiencias implementando una arquitectura de base de datos híbrida (PostgreSQL para transacciones ACID robustas, MongoDB para analítica masiva NoSQL, y Redis para almacenamiento Clave-Valor de alta velocidad).

---

## 2. Alcance del Proyecto (4 pts.)
El sistema abarca los siguientes módulos y catálogos funcionales:

### Catálogos con Operaciones CRUD y Búsquedas:
1. **Catálogo de Propiedades:**
   - **Create (Agregar):** Registro de nuevos inmuebles con título, precio, ubicación, imágenes, amenidades y estado.
   - **Read (Buscar y Filtrar):** Motor de búsqueda multicriterio en tiempo real por palabra clave, ciudad, rango de precio, habitaciones, baños y tipo.
   - **Update (Modificar):** Edición de características, cambio de precio o actualización de imágenes.
   - **Delete (Eliminar):** Eliminación física o borrado lógico de propiedades del catálogo.
2. **Catálogo de Usuarios y Perfiles:**
   - CRUD para usuarios con asignación de Roles (**Admin**, **Agente**, **Cliente**) y datos de contacto.
3. **Catálogo de Favoritos:**
   - Gestión de inmuebles marcados por el usuario con persistencia en localStorage y sincronización relacional.
4. **Catálogo de Citas y Visitas Guiadas:**
   - Agendado de recorridos presenciales con fecha, hora y notas para la propiedad seleccionada.

### Módulos Especializados:
* **Módulo de Control de Acceso por Roles (RBAC):** Restringe paneles administrativos solo a usuarios con rol `Admin` o `Agente`.
* **Módulo de Métricas y KPIs:** Cálculo en tiempo real de propiedades activas, pendientes, precios promedio y analítica de vistas.

---

## 3. Modelo de Base de Datos Relacional y Normalización (1FN, 2FN, 3FN) (5 pts.)

### Explicación Teórica de Normalización:
* **Primera Forma Normal (1FN):** Requiere que todos los atributos sean atómicos (sin valores repetidos o listas en una sola celda) y que cada tabla tenga una clave primaria identificadora.
* **Segunda Forma Normal (2FN):** Debe cumplir 1FN y asegurar que todos los atributos que no son clave dependan totalmente de la clave primaria completa (eliminando dependencias parciales).
* **Tercera Forma Normal (3FN):** Debe cumplir 2FN y garantizar que ningún atributo no clave dependa de otro atributo no clave (eliminando dependencias transitivas).

### Aplicación del Proceso de Normalización Paso a Paso:

#### Estado Inicial No Normalizado (UNF):
`TABLA_ORIGEN (ID_Propiedad, Titulo, Precio, Propietario_Nombre, Propietario_Email, Ciudad_Ubicacion, Amenidades_Lista, Agente_Nombre, Agente_Email)`

#### Aplicando 1FN (Atomicidad y Claves Primarias):
Separamos la lista de amenidades multivaluadas a su propia entidad relacionable.

#### Aplicando 2FN (Eliminación de Dependencias Parciales):
Separamos los datos del Propietario/Agente de la propiedad, creando la entidad `Profiles`.

#### Aplicando 3FN (Resultado Final en 3FN):
* `profiles(id, full_name, email, role, location, member_since)`
* `properties(id, slug, title, description, price, status, beds, baths, sqft, location, address, owner_id)`
* `user_favorites(id, user_id, property_id, created_at)`
* `appointments(id, user_id, property_id, booking_date_time, notes, status)`

---

## 4. Modelo de Base de Datos No Relacional (10 pts.)

### Justificación del Modelo Híbrido:
* **Orientado a Documentos (MongoDB / JSON):** Utilizado para almacenar documentos flexibles de propiedades con estructuras anidadas de geolocalización, arreglos dinámicos de amenidades y registros de analítica que cambian frecuentemente sin requerir alterar esquemas rígidos.
* **Clave-Valor (Redis):** Utilizado para la aceleración de consultas (Caché), guardando el catálogo completo en la clave `all_properties_cache` con un tiempo de vida (TTL) optimizado para evitar saturar el motor PostgreSQL.

### Ejemplo de Estructura Documental BSON (MongoDB):
```json
{
  "_id": "66a01b2c00000001",
  "slug": "propiedad-casa-beverly-hills-1",
  "title": "Casa Lujosa #1 en Beverly Hills",
  "price": 5250000,
  "status": "ACTIVE",
  "specs": {
    "beds": 5,
    "baths": 4.5,
    "sqft": 4200,
    "garage_spaces": 3
  },
  "location": {
    "city_state": "Beverly Hills, CA",
    "address": "742 Luxury Avenue",
    "coordinates": { "lat": 34.0736, "lng": -118.4004 }
  },
  "features": {
    "amenities": ["Alberca Privada", "Casa Inteligente", "Vista al Mar", "Gimnasio Privado"],
    "year_built": 2024
  },
  "analytics": {
    "views": 1420,
    "saved_in_favorites_count": 89
  }
}
```

---

## 5. Manejo de Restricciones (5 pts.)

El sistema implementa estrictamente las 6 restricciones principales de integridad:

| Restricción | Campo / Tabla Afectada | Código SQL Aplicado | Propósito |
| :--- | :--- | :--- | :--- |
| **PRIMARY KEY** | `profiles.id`, `properties.id` | `id UUID PRIMARY KEY DEFAULT gen_random_uuid()` | Garantiza identidad única para cada tupla. |
| **FOREIGN KEY** | `properties.owner_id` | `REFERENCES profiles(id) ON DELETE SET NULL` | Mantiene la integridad referencial con el propietario. |
| **UNIQUE** | `profiles.email`, `properties.slug` | `email VARCHAR(150) UNIQUE NOT NULL` | Evita correos o slugs duplicados en la base de datos. |
| **NOT NULL** | `properties.title`, `properties.price` | `title VARCHAR(200) NOT NULL` | Evita registros incompletos o vacíos. |
| **CHECK** | `properties.price`, `profiles.role` | `CHECK (price >= 0)`, `CHECK (role IN ('Admin','Agente','Cliente'))` | En fuerza validaciones numéricas y valores permitidos. |
| **DEFAULT** | `profiles.role`, `properties.status` | `role DEFAULT 'Cliente'`, `created_at DEFAULT CURRENT_TIMESTAMP` | Asigna valores automáticos si se omiten. |

---

## 6. Diccionario de Datos para la BD Relacional y No Relacional (10 pts.)

### 6.1 Tabla Relacional: `properties`
| Campo | Tipo de Dato | Longitud | Llave | Nulo | Descripción | Restricciones |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `id` | UUID | 36 | PK | NO | Identificador único | `DEFAULT gen_random_uuid()` |
| `slug` | VARCHAR | 200 | UQ | NO | URL amigable | `UNIQUE` |
| `title` | VARCHAR | 200 | - | NO | Nombre del inmueble | `NOT NULL` |
| `price` | NUMERIC | 15,2 | - | NO | Precio en USD | `CHECK (price >= 0)` |
| `status` | VARCHAR | 20 | - | NO | Estado comercial | `CHECK (status IN ('ACTIVE','FOR SALE','FOR RENT','PENDING'))` |
| `beds` | INT | 4 | - | NO | Recámaras | `DEFAULT 1, CHECK (beds >= 0)` |
| `baths` | NUMERIC | 3,1 | - | NO | Baños | `DEFAULT 1.0` |
| `sqft` | INT | 4 | - | NO | Área construida m² | `CHECK (sqft > 0)` |
| `location` | VARCHAR | 150 | - | NO | Ciudad y Estado | `NOT NULL` |
| `owner_id` | UUID | 36 | FK | SI | ID del propietario | `REFERENCES profiles(id)` |

---

## 7. Creación de las Bases de Datos Relacional y No Relacional (10 pts.)
Se incluye el código DDL de PostgreSQL y el script de creación de colecciones e índices en MongoDB.

---

## 8. Inserción de Registros (15 pts.)
* **Base de Datos Relacional (PostgreSQL):** Se han generado e insertado **50 registros reales y coherentes** por cada una de las 4 tablas (`profiles`, `properties`, `user_favorites`, `appointments`).
* **Base de Datos No Relacional (MongoDB):** Se han generado e insertado **10,000 documentos BSON** estructurados en la colección `properties_nosql_collection`.

---

## 9. Archivos Adjuntos y Backup (4 pts.)
* `schema_and_data_postgresql.sql` (Script SQL completo con DDL y 50 registros por tabla).
* `mongodb_nosql_dataset.json` (Dataset JSON masivo con 10,000 registros).

---

## 10. Proyecto Web Desarrollado con Conexión a BD (20 pts.)
La aplicación web **Luxu Real Estate** fue desarrollada con la pila tecnológica:
* **Next.js 16 (App Router)** & **React 19**
* **TypeScript** con tipos estrictos e interfaces.
* **Tailwind CSS 4** para diseño web responsivo de alta gama.
* **Supabase / PostgreSQL Client** para persistencia de datos.

---

## 11. Identificación de Objetos en la Base de Datos (10 pts.)

| Objeto | Nombre en la BD | Tipo | Función | Tablas Afectadas | Ubicación en el Motor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tabla** | `properties` | Tabla Base | Almacena el catálogo de inmuebles. | N/A | Schema `public` |
| **Vista** | `vw_active_properties` | View | Resumen rápido de propiedades activas. | `properties` | Catalogo `pg_views` |
| **Disparador** | `trg_update_timestamp` | Trigger | Actualiza la fecha de modificación. | `properties`, `profiles` | Catalogo `pg_trigger` |
| **Función** | `fn_calculate_kpis()` | Function | Retorna totales de propiedades activas. | `properties` | Catalogo `pg_proc` |
| **Procedimiento**| `sp_schedule_visit()` | Stored Proc | Ejecuta la reserva de visita. | `appointments` | Catalogo `pg_proc` |
| **Índice** | `idx_prop_slug` | B-Tree Index| Acelera búsquedas por slug/URL. | `properties` | Catalogo `pg_am` |

---

## 12. Funcionalidad de la Aplicación (10 pts.)
Se incluyen imágenes explicativas de las pantallas principales del sistema:
1. **Landing Page (`/`):** Buscador inteligente, filtros rápidos y tarjetas traducidas al español.
2. **Catálogo de Propiedades (`/properties`):** Filtro dinámico por precio, ubicación, recámaras y amenidades.
3. **Sección de Favoritos (`/favorites`):** Persistencia en tiempo real acumulativa.
4. **Panel Administrativo (`/admin/properties`):** Gestión de listados, tabla interactiva y KPIs.

---

# REFERENCIAS (FORMATO APA 7ma Edición) (2 PUNTOS)

1. **Elmasri, R., & Navathe, S. B.** (2017). *Fundamentos de Sistemas de Bases de Datos* (7.ª ed.). Pearson Educación. *(Libro)*
2. **Date, C. J.** (2004). *An Introduction to Database Systems* (8.ª ed.). Addison-Wesley. *(Libro)*
3. **Silberschatz, A., Korth, H. F., & Sudarshan, S.** (2020). *Database System Concepts* (7.ª ed.). McGraw-Hill Education. *(Libro)*
4. **Chodorow, C.** (2013). *MongoDB: The Definitive Guide* (2.ª ed.). O'Reilly Media.
5. **PostgreSQL Global Development Group.** (2026). *PostgreSQL 16.0 Documentation*. PostgreSQL.org. https://www.postgresql.org/docs/16/
