# Propuesta de Prompt Optimizado: Detalle de Propiedad (Property View)

High-fidelity single property details page with an immersive media gallery, sticky action sidebar, and detailed metadata widgets, following a "Contemporary Luxury" aesthetic using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Contemporary Luxury, minimal, photo-centric.
- **Background:** Soft Fog (#F8FAFB) for the main page background.
- **Surface:** Pure White (#FFFFFF) for elevated cards and section containers.
- **Primary Accent:** Emerald (#006655) for the "Schedule Visit" primary action.
- **Secondary Accent:** Sage Grey (#718096) for technical labels and icons.
- **Typography:** Geist Sans (Sans-serif) for body text; Geist Mono (Monospace) for technical specs (e.g., Year Built, SQFT).
- **Cards:** Crisp borders (1px #E2E8F0), rounded corners (12px), subtle shadow-sm.
- **Spacing:** Generous whitespace (p-8) between main content blocks.

**Page Structure:**
1.  **Immersive Media Gallery:**
    *   **Hero Image:** High-resolution `aspect-[21/9]` container with floating "Premium" and "New" badges (top-left).
    *   **Thumbnail Strip:** A horizontal scrollable strip of 5-6 thumbnails with an "Active" state border (#006655).
    *   **Action Button:** A "View All Photos" floating button with a gallery icon (bottom-right of hero).

2.  **Layout Container:** A 2-column grid layout (65% main content, 35% sidebar) with a 2rem gap.

3.  **Main Column (Left):**
    *   **Property Overview Header:** H1 Title, Price (Text-3xl, Bold), and Location with a clickable "View on Map" link.
    *   **Key Features Row:** A flex-row of `shadcn/ui` Cards with icons: [SQFT, Bedrooms, Bathrooms, Garage].
    *   **"About this Home" Section:** Typography-optimized description text with a "Read More" expansion toggle.
    *   **Amenities Grid:** A 2-column icon list (Checkmarks) for features like Pool, Gym, Smart Home, etc.
    *   **Mortgage Calculator Widget:** A subtle `bg-slate-50` banner with a "Calculate Monthly Payment" button.

4.  **Sticky Sidebar (Right):**
    *   **Behavior:** `sticky top-24` to follow the user during scroll.
    *   **Agent Profile Card:** `shadcn/ui` Avatar, name, "Top Rated Agent" badge, and quick-action icons (Phone, WhatsApp, Message).
    *   **Booking Actions:** Primary solid Emerald button "Schedule Visit" and secondary outlined "Contact Agent" button.
    *   **Location Widget:** A static high-fidelity map preview with a custom pin and a "Directions" button.

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` (Card, Button, Badge, AspectRatio, Avatar, Separator).
- Implement the sidebar as a `sticky` element within the grid.
- Responsive Behavior: On screens < 1024px, the sidebar should stack below the main content, and the gallery should adjust to `aspect-video`.
- Use `next/image` for all property photos with appropriate `sizes` attributes for optimization.

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
