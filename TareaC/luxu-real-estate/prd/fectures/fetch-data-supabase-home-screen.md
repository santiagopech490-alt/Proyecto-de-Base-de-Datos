# Propuesta de Prompt Optimizado: Obtención de Datos de Supabase para Home Screen

Este prompt está diseñado para ser utilizado por un agente de IA (como Gemini CLI) para implementar la integración real de datos en la página de inicio, reemplazando los mocks actuales.

---

**Objetivo:** Implementar la lógica de obtención de datos desde Supabase para la pantalla de inicio (`app/page.tsx`), asegurando un diseño premium y una experiencia de usuario fluida.

**CONTEXTO TÉCNICO:**
- **Framework:** Next.js 16 (App Router), TypeScript.
- **Estilos:** Tailwind CSS 4.
- **Fuente de Datos:** Tabla `properties` en el esquema `public` de Supabase.
- **Cliente Supabase:** Utilizar el cliente exportado en `@/lib/supabase.ts`.
- **UI Library:** shadcn/ui.
- **Archivos de Referencia:**
  - Implementación actual: `app/page.tsx`.
  - Tipos de Base de Datos: `types/supabase.ts`.
  - Diseño: `prd/resources/home_discover_sreen/screen.png`.

**SISTEMA DE DISEÑO (REQUERIDO):**
- **Vibe:** Lujo minimalista, premium, "High-fidelity".
- **Paleta de Colores:** 
  - Títulos: Deep Forest Green (#19322F).
  - Texto de Cuerpo: Sage Grey (#5C706D).
  - Acentos/Botones: Emerald (#006655).
- **Tipografía:** Geist Sans (interfaz), Geist Mono (metadatos).
- **Estados de Carga:** Implementar `Skeleton` de shadcn para evitar cambios bruscos de diseño (layout shift).

**REQUERIMIENTOS DE IMPLEMENTACIÓN:**

1.  **Sección "Featured Collections":**
    *   **Lógica:** Reemplazar `featuredProperties` (mock) con una consulta a Supabase.
    *   **Especificación:** Obtener exactamente **dos (2)** propiedades de forma aleatoria.
    *   **UI:** Mantener el componente `PropertyCard` con el prop `variant="featured"`.

2.  **Sección "New in Market":**
    *   **Lógica:** Implementar paginación por desplazamiento (offset) o por cursor.
    *   **Especificación:** Cargar propiedades en lotes de **ocho (8)** por petición.
    *   **Interacción:** El botón "Load more" debe añadir el siguiente lote al listado existente sin recargar la página.
    *   **Filtros:** Mantener funcionales los filtros "All", "Buy", "Rent", mapeándolos a la columna `listing_status` de la base de datos.

3.  **Manejo de Datos y UX:**
    *   **Mapeo:** Asegurar que los campos de Supabase (ej. `images[0]`, `price`, `bedrooms`) se pasen correctamente a las props de `PropertyCard`.
    *   **Validación:** Manejar casos donde la base de datos devuelva menos de 2 propiedades en Featured o esté vacía.
    *   **Errores:** Implementar un manejo de errores básico que no rompa la UI si falla la conexión con Supabase.

**RESTRICCIÓN CRÍTICA:**
- Toda la información mostrada en el Home debe provenir exclusivamente de la base de datos. No se permiten datos "hardcoded" o mocks en la versión final de este componente.

---
💡 **Tip:** Para mantener la consistencia visual en todo el proyecto, considera crear un archivo `DESIGN.md` con la skill `design-md`. Esto ayudará a que todas las generaciones futuras sigan el mismo lenguaje visual.
