# Propuesta de Prompt Optimizado: Perfil de Usuario (User Profile & Dashboard)

High-fidelity User Profile and Personal Dashboard with dynamic activity tracking, property favorites grid, and account management using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Personalized, human-centric, "Luxury Organized" aesthetic.
- **Background:** Ultra-Light Gray (#F8FAFB) for the workspace area.
- **Header Surface:** Soft Mint Gradient (#F0F5F5 to #FFFFFF) for the user hero section.
- **Surface:** Pure White (#FFFFFF) for elevated cards and section containers.
- **Primary Accent:** Emerald (#006655) for active tabs, primary actions, and "Verified" status.
- **Secondary Accent:** Slate Grey (#64748B) for labels and technical metadata.
- **Typography:** Geist Sans (Sans-serif) for high readability across dashboards.
- **Cards:** Rounded corners (16px), soft shadow-sm, generous internal padding (p-8).

**Page Structure:**
1.  **User Hero Section (Banner):**
    *   **Immersive Header:** A full-width subtle mint gradient containing the user identity.
    *   **Identity Block:** Large `shadcn/ui` Avatar with an "Edit" overlay icon, Name (Text-2xl, Bold), Location (Muted-sm with icon), and "Member since Oct 2025".
    *   **Quick Stats Card:** An elevated floating card with three segments: [Saved Properties, Scheduled Visits, Sold/Closed]. Each segment features a large number and a descriptive label, separated by thin vertical lines.

2.  **Dashboard Navigation:**
    *   **Tab System:** `shadcn/ui` Tabs component for switching views: [Saved Properties, Scheduled Visits, Preferences & Settings].

3.  **Section Content (Dynamic):**
    *   **Saved Properties Grid:** A responsive 3-column grid of simplified property cards (Image with `aspect-video`, Price, Title, Location, and meta-icons).
    *   **Upcoming Visits List:** A vertical stack of horizontal rows. Each row includes: Property thumbnail (1:1), Date/Time block (Bold), Assigned Agent Avatar, and Action buttons [Reschedule, Get Directions].
    *   **Account Preferences:** A clean form layout with `shadcn/ui` Inputs for personal info and `Switch` toggles for notification preferences (Email, Push, SMS).

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` (Tabs, Card, Avatar, Button, Switch, Input, AspectRatio).
- Ensure the layout is responsive: Stack the Hero Stats on mobile and collapse the Visit rows into cards.
- Prepare the component to map data from Supabase `profiles`, `favorites`, and `appointments` tables.
- Implement a "Loading State" using `Skeleton` for each tab's content.

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
