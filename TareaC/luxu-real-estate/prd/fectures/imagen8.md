# Propuesta de Prompt Optimizado: Modal de Filtros (Filters Modal)

High-fidelity advanced search filters modal with interactive range sliders, numeric counters, and dynamic property counters using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Clean, functional, high-fidelity "Concierge" style.
- **Background:** Pure White (#FFFFFF) for the modal surface.
- **Backdrop:** Muted Slate Overlay (#0F172A with 40% opacity).
- **Primary Accent:** Emerald (#006655) for active states, sliders, and primary buttons.
- **Secondary Accent:** Soft Mint (#F0F5F5) for selected toggle backgrounds.
- **Input Background:** Ultra-Light Gray (#F8FAFB) for field interiors.
- **Typography:** Geist Sans (Sans-serif) for labels and numeric values.
- **Cards/Modal:** Large rounded corners (20px), prominent shadow (shadow-2xl).

**Page Structure (Modal Content):**
1.  **Modal Header:**
    *   **Headline:** "Filters" (Text-xl, Font-bold) centered with a "Reset" ghost button on the far left and a "Close (X)" icon on the far right.

2.  **Filter Sections (Vertical Stack):**
    *   **Location Search:** `shadcn/ui` Input with a magnifying glass icon and a placeholder "Where would you like to live?".
    *   **Price Range Slider:** 
        *   Dual-thumb `shadcn/ui` Slider in Emerald.
        *   Synchronized numeric inputs below for "Min Price" and "Max Price" with currency symbols ($).
    *   **Property Type Selector:** `shadcn/ui` Select dropdown (e.g., House, Apartment, Villa, Penthouse).
    *   **Room Counters:** Horizontal row of numeric steppers (plus/minus buttons) for "Bedrooms" and "Bathrooms". Labels on the left, controls on the right.
    *   **Amenities & Features:** A 3-column grid of `Toggle` chips (e.g., Pool, Gym, Wi-Fi, Garden). Selected state: Emerald border, Soft Mint background, and a small Emerald dot indicator.

3.  **Dynamic Footer:**
    *   **Layout:** Sticky bottom bar with horizontal padding.
    *   **Actions:** 
        *   "Clear all filters" (Ghost button, Slate text).
        *   "Show [42] Homes" (Solid Emerald button, full-width on mobile, right-aligned on desktop). Include a right-arrow icon.

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` (Dialog, Slider, Select, Toggle, Input, Button).
- Ensure the Range Slider correctly updates the numeric inputs and vice versa.
- Implement the "Show [N] Homes" count as a dynamic variable to be synced with the Supabase query results.
- Responsive Behavior: The modal should take 100% width/height on mobile (Slide-up sheet) and be a centered fixed-width dialog on desktop (max-w-md).

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
