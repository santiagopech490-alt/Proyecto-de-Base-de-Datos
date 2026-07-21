# Specification: My Properties Administration Dashboard

## Overview
High-fidelity "My Properties" dashboard for users (property owners/agents) to manage their listings. Features real-time KPI metrics, a professional data table, and integration with Supabase for data fetching and management.

## Functional Requirements
- **Authentication & Filtering:**
    - Listings must be filtered by the current user's `owner_id` obtained via Supabase Auth.
- **KPI Metrics (Client-side):**
    - **Total Listings:** Total number of properties owned by the user.
    - **Active Properties:** Properties with the "Active" status.
    - **Pending Sale:** Properties with the "Pending" status.
- **Property Management Table:**
    - Display thumbnail (1:1), name, address, and badges (Beds, Baths, sqft).
    - Display sales price and monthly rent placeholder.
    - Status badges with semantic coloring (Active: Emerald, Pending: Amber, Sold: Gray).
    - Format dates as "Oct 24, 2025".
- **Actions:**
    - **Edit:** Navigate to the existing edit property form.
     - **Delete:** Trigger a delete confirmation (standard navigation or action).
    - **+ Add New Property:** Primary action to navigate to the creation form.
- **Pagination:**
    - Display results in pages (e.g., 5-10 results per page) with "Previous" and "Next" buttons.

## Non-Funf4ional Requirements
- **UI/UX:file:**
    - **Theme:** Professional Admin Dashboard, clean, data-centric.
    - **Colors:** Background: Soft Fog (#F8FAFB), Surface: White (#FFFFFF), Primary: Emerald (#006655).
    - **Typography:** Geist Sans.
    - **Responsiveness:** Scrollable container for the table on small screens; hide non-essential columns if needed.
    - **Interactivity:** Hover effects on table rows (`hover:bg-slate-50/50`).
- **Frameworks:**
    - Next.js 16 (App Router).

    - Tailwind CSS 4.
    - shadcn/ui (Table, Badge, Card, Button, Avatar, AspectRatio, Pagination, Skeleton).

## Acceptance Criteria
- [ ] Users can see only their properties.
- [ ] KPIs accurately reflect the status counts of the fetched data.
- [ ] Property table matches the visual design (thumbnails, badges, prices).
- [ ] Edit and Add actions correctly navigate to their respective forms.
- [ ] The dashboard is responsive and follows the defined design system.

## Out of Scope
- Global property search (only filtering for the current user's properties).
- Advanced analytics beyond the three specified KPIs.
- In-place editing (use standard navigation instead).

