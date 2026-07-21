# Specification: User Directory Dashboard

## Overview
Implement an Enterprise-grade User Directory Dashboard. This feature will allow admins to view, search, filter, and manage user roles and statuses within the application, utilizing Supabase as the data backend.

## Functional Requirements
- **Dashboard UI:** A high-fidelity table-based interface including user avatars, status indicators, and role badges.
- **Search & Filtering:**
    - Global search for users by name/email.
    - Tabbed filtering for [All Users, Agents, Brokers, Admins].
- **Data Integration:** Fetch user profiles from the Supabase `profiles` table.
- **User Management:**
    - Role management via Dropdown Menu.
    - Suspend/unsuspend user functionality.

## Non-Functional Requirements
- **Styling:** Tailwind CSS 4, utilizing the design system defined in `prd/fectures/imagen2.md`.
- **UI Framework:** `shadcn/ui` components (Table, Avatar, Badge, DropdownMenu, Tabs, Input, Button, Card, Switch, Aspect Ratio, Skeleton, Separator, Pagination).
- **Responsive Design:** Columns adapt/hide on smaller screen sizes.

## Acceptance Criteria
- [ ] Users are correctly fetched and displayed from Supabase.
- [ ] Tabs filter the user list correctly.
- [ ] Search input successfully filters displayed users.
- [ ] Role changes and suspension actions successfully update the database.

## Out of Scope
- Integration with payment systems.
- Activity logs for user actions (planned for future tracks).
