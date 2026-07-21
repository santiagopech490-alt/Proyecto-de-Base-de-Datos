# Propuesta de Prompt Optimizado: Directorio de Usuarios (User Directory)

High-fidelity User Directory interface with advanced filtering, role-based badges, and performance metrics, designed for an Enterprise SaaS dashboard using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Professional, "Enterprise SaaS", clean and high-contrast.
- **Background:** Soft Fog (#F8FAFB) for the main application background.
- **Surface:** Pure White (#FFFFFF) for table rows and cards.
- **Primary Accent:** Emerald (#006655) for the primary "+ Add User" button and active states.
- **Status Colors:** 
    - **Active:** Emerald (#10B981) background with white text.
    - **Away:** Amber (#F59E0B) background with white text.
    - **Inactive:** Slate (#64748B) background with white text.
- **Role Badges:**
    - **Admin:** Deep Obsidian (#111827) for high-authority feel.
    - **Broker:** Mint (#D1FAE5) background with Emerald text (#065F46).
    - **Agent:** Light Gray (#F1F5F9) background with Slate text (#475569).
- **Typography:** Geist Sans (Sans-serif) for professional clarity.
- **Layout:** Wide horizontal spacing with a subtle hover effect (bg-slate-50/50) on rows.

**Page Structure:**
1.  **Dashboard Header:**
    *   **Headline:** "User Directory" (Text-2xl, Font-bold) with a muted subtitle "Manage team members, roles, and system permissions."
    *   **Search & Action Bar:** A primary Search input with a magnifying glass icon and a "+ Add User" Emerald button.
    *   **Tab Navigation:** A `shadcn/ui` Tabs component for filtering: [All Users, Agents, Brokers, Admins].

2.  **Data Table / User Rows:**
    *   **Column: User Info:** `shadcn/ui` Avatar with a small status dot indicator (bottom-right). Stacked text: Name (Semibold) above Email (Muted-sm) and a small Gray User ID.
    *   **Column: Role & Status:** Displays the Role Badge and the Status Badge side-by-side with appropriate icons.
    *   **Column: Performance Metrics:** Numeric data points (Properties, Sales YTD) displayed with clean typography.
    *   **Column: Access Level:** Descriptive access type (e.g., Full Access, Limited).
    *   **Column: Actions:** A "Change Role" Dropdown Menu button. Options: Administrator (Icon), Broker (Icon), Agent (Icon), Viewer (Icon), and a separator before "Suspend User" (Destructive Red text).

3.  **Pagination Footer:**
    *   Left side: "Showing 1 to 5 of 42 users" (Muted-sm).
    *   Right side: Numeric pagination buttons [1, 2, 3, ..., 9] with "Previous" and "Next" chevron controls.

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` (Table, Badge, Avatar, DropdownMenu, Tabs, Input, Button).
- Ensure row height is generous for a premium feel.
- Implement responsive behavior: Hide less critical columns (Performance, Access Level) on mobile view.
- Structure the component to accept a `profiles` array prop, mapping to the Supabase schema.

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
