# Propuesta de Prompt Optimizado: Listado de Mis Propiedades (My Properties)

High-fidelity "My Properties" administration dashboard with real-time KPI metrics, a professional data table for listing management, and advanced filtering using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Professional Admin Dashboard, clean, data-centric.
- **Background:** Soft Fog (#F8FAFB) for the application workspace.
- **Surface:** Pure White (#FFFFFF) for cards and table rows.
- **Primary Accent:** Emerald (#006655) for primary "+ Add New Property" action.
- **Secondary Accent:** Slate Grey (#64748B) for borders and secondary buttons.
- **Status Colors:**
    - **Active:** Emerald (#10B981) background with white text.
    - **Pending:** Amber (#F59E0B) background with white text.
    - **Sold:** Gray (#94A3B8) background with white text.
- **Typography:** Geist Sans (Sans-serif) for high readability.
- **Cards & Table:** Rounded corners (12px), subtle shadow-sm, horizontal row padding (px-6).

**Page Structure:**
1.  **Management Header:**
    *   **Headline:** "My Properties" (Text-2xl, Font-bold) with a muted subtitle "Manage your listings, track status, and update property details."
    *   **Global Actions:** "Filter" (Outlined button with icon) and "+ Add New Property" (Solid Emerald button with plus icon).

2.  **KPI Metrics Row:**
    *   Three elevated `shadcn/ui` Cards:
        *   **Total Listings:** Bold number with a building icon.
        *   **Active Properties:** Emerald count with a check icon.
        *   **Pending Sale:** Amber count with a clock icon.
    *   Each card features a subtle bottom-border color corresponding to its metric.

3.  **Property Management Table:**
    *   **Column: Property:** `shadcn/ui` AspectRatio (1:1) thumbnail with rounded-md corners. Stacked text: Property Name (Semibold), Address (Muted-sm), and a horizontal list of badges for [Beds, Baths, sqft].
    *   **Column: Price:** Sales Price (Text-lg, Semibold) above a Monthly Rent placeholder (Muted-xs).
    *   **Column: Status:** Centered `shadcn/ui` Badge with semantic coloring (Active/Pending/Sold).
    *   **Column: Date Added:** Format: "Oct 24, 2025" (Muted-sm).
    *   **Column: Actions:** Flex-row of ghost buttons for "Edit" (Pencil icon) and "Delete" (Trash icon - destructive hover).

4.  **Pagination Footer:**
    *   Left side: "Showing 1 to 5 of 24 results" (Muted-sm).
    *   Right side: "Previous" and "Next" buttons with numeric page indicators [1, 2, 3].

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` (Table, Badge, Card, Button, Avatar, AspectRatio).
- Ensure the table is responsive: Use a scrollable container on small screens or hide non-essential columns (Date Added).
- Implement row hover effects: `hover:bg-slate-50/50` for better navigation.
- Prepare the component to fetch data from the `properties` table filtered by `owner_id`.

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
