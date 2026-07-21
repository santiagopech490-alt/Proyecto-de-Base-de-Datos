# Propuesta de Prompt Optimizado: Pantalla de Favoritos (Your Favorites)

High-fidelity property favorites dashboard with a responsive grid, real-time filtering, and luxury "mint-clean" aesthetics using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Clean, visually inviting, "Lifestyle Boutique".
- **Background:** Soft Mint (#F0F5F5) for a fresh, high-end feel.
- **Surface:** Pure White (#FFFFFF) for elevated cards.
- **Primary Accent:** Emerald (#006655) for "Book Visit" actions and active filters.
- **Secondary Accent:** Soft Teal (#E6F0F0) for borders and empty states.
- **Interactive:** Heart icon (destructive-red on active, outline-gray on inactive).
- **Typography:** Geist Sans (Sans-serif) for numbers and labels; Inter for body text.
- **Cards:** Rounded corners (16px), soft shadow-md, overflow-hidden.

**Page Structure:**
1.  **Dynamic Page Header:**
    *   **Headline:** "Your Favorites" with a dynamic badge "(12 properties)" in a muted emerald tone.
    *   **Controls Toolbar:** `shadcn/ui` Select for "Sort by" (e.g., Price, Recent) and a Toggle Group for Grid vs. List view icons.

2.  **Property Favorites Grid:**
    *   **Layout:** Responsive 4-column grid (2-col on tablet, 1-col on mobile).
    *   **Card Header (Media):** Image with `aspect-video`, floating Heart icon (top-right), and Status Badge (top-left, e.g., "New Listing" in white-on-emerald).
    *   **Card Body:** 
        *   Price (Text-xl, Font-bold) and Tag (For Sale/Rent).
        *   Address (Muted-sm, truncate).
        *   Metadata Bar: Beds, Baths, sqft icons with label text in a horizontal row.
    *   **Card Footer:** Full-width Emerald Button "Schedule a Tour" with a trailing arrow icon.

3.  **Loading & Exploration States:**
    *   **Skeleton Card:** Implementation of `shadcn/ui` Skeleton components mimicking the property card structure (Media area, text lines, button block).
    *   **Empty State / "Add More" Card:** A special card with a dashed border, centered "Plus" icon, and "Browse More Properties" button to drive engagement when few favorites exist.

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` (Card, Button, Badge, Skeleton, Select, ToggleGroup).
- Ensure images use `next/image` with proper aspect ratio handling.
- Prepare a `FavoriteCard` component that accepts a `Property` object matching the Supabase `properties` schema.
- Implement a subtle transition effect on card hover (scale-105 or shadow-lg).

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
