# Specification: Your Favorites Dashboard (Track: favorites_dashboard_20260408)

## Overview
Implementation of a high-fidelity "Your Favorites" dashboard based on the `favorites_list_screen` prototype. This screen allows users to manage saved properties with a luxury "Lifestyle Boutique" aesthetic, utilizing hybrid persistence and responsive grid layouts.

## Design System (Source: favorites_list_screen/code.html)
- **Palette:**
  - `nordic`: #19322F (Texto principal / Contraste)
  - `mosque`: #006655 (Acciones primarias / Botones)
  - `hintgreen`: #D9ECC8 (Fondos de estados / Badges)
  - `clearday`: #EEF6F6 (Fondo de página principal)
  - `white`: #FFFFFF (Tarjetas / Superficies)
- **Typography:** SF Pro Display (Inter como fallback).
- **Icons:** Material Icons / Material Symbols Outlined.
- **UI Framework:** **shadcn/ui** (componentes: Card, Button, Badge, Select, ToggleGroup, Skeleton, Toast).
- **Layout:** Navbar fija con desenfoque (`backdrop-blur-md`), cuadrícula responsiva (1 col móvil, 2 col sm, 3 col lg, 4 col xl).

## Functional Requirements
- **Persistence:** Hybrid approach—Local Storage for guests, Supabase `user_favorites` table for authenticated users.
- **Dynamic Header:**
  - Título "Your Favorites" con contador dinámico ("You have X saved properties").
  - Toolbar: Selector de ordenamiento (`Select`) y Toggle de vista (`ToggleGroup`).
- **Property Card (FavoriteCard):**
  - Imagen con relación de aspecto ajustable.
  - Botón de favorito flotante (Corazón activo en `mosque`).
  - Badge de estado dinámico (e.g., "New Listing" con fondo `nordic/90`).
  - Información: Precio, tag de estado (`Badge` en `hintgreen`), dirección truncada.
  - Metadatos: Iconos de Camas, Baños y sqft en color `mosque`.
  - Botón de acción: "Book Visit" con estilo de borde `mosque`.
- **Empty/Add State:**
  - Tarjeta "Discover More" con borde punteado, fondo `hintgreen/30` y botón "Browse Listings".
- **Loading State:** Skeletons (`Skeleton`) que repliquen la estructura de la tarjeta.

## Acceptance Criteria
- [ ] La interfaz replica exactamente los colores y espaciados del prototipo `code.html`.
- [ ] El toggle de vista cambia entre cuadrícula y lista (funcionalidad base).
- [ ] Las tarjetas muestran efectos de hover (elevación y escala suave).
- [ ] El sistema de persistencia sincroniza favoritos locales con la base de datos al iniciar sesión.
- [ ] Los Toasts de `shadcn/ui` notifican cambios con el estilo visual del proyecto.

## Out of Scope
- Lógica de agendamiento real para "Book Visit" (solo UI).
- Sistema de notificaciones en tiempo real en la campana del Navbar.
