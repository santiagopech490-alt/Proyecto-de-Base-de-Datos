# Specification: Property View Track

## Overview
Implement a high-fidelity, immersive property details page for the Luxu Real Estate platform. This page will feature a sophisticated media gallery, a sticky sidebar with agent information and booking actions, and detailed metadata widgets, adhering to the "Contemporary Luxury" design language.

## Functional Requirements
- **Immersive Media Gallery:** Implement a carousel-based gallery with a hero image (aspect ratio 21/9) and a thumbnail strip.
- **Dynamic Data Fetching:** Sourcing property details dynamically from Supabase with robust fallback for missing data.
- **SEO-Optimized Routing:** Use property slugs (e.g., `/properties/[slug]`) for property detail pages.
- **Main Content Area:**
    - Property header with title, price (Bold, 3xl), and location with a map link.
    - Key features grid (SQFT, Bedrooms, Bathrooms, Garage).
    - Expandable "About this Home" section with a "Read More" toggle.
    - 2-column amenities grid with icons.
    - Mortgage calculator widget placeholder.
- **Sticky Sidebar:**
    - Agent profile card with avatar, rating badge, and quick-action icons (Phone, WhatsApp, Message).
    - Booking actions: "Schedule Visit" (Emerald primary) and "Contact Agent" (Outlined secondary).
    - Static map preview widget.
- **Responsive Design:** Stack sidebar below content on mobile/tablet and adjust gallery aspect ratio to 16/9.

## Non-Functional Requirements
- **Performance:** Use `next/image` for image optimization and implement server components where possible for data fetching.
- **Design:** Adhere to "Contemporary Luxury" style using Geist Sans/Mono, Emerald (#006655) accents, and shadcn/ui components (Card, Badge, Button, Avatar, Aspect Ratio, Carousel).
- **Type Safety:** Full TypeScript implementation for data structures and component props.

## Acceptance Criteria
- [ ] Property detail page accessible via `/properties/[slug]`.
- [ ] Media gallery allows navigating through multiple property images.
- [ ] "Schedule Visit" and "Contact Agent" buttons are visible and accessible.
- [ ] Sidebar remains sticky on desktop scroll and stacks on mobile.
- [ ] "Read More" toggle correctly expands/collapses the description.
- [ ] Page follows the visual design specified in the "Contemporary Luxury" prompt.

## Out of Scope
- Full functional implementation of the mortgage calculator logic (beyond the UI widget).
- Real-time chat integration for "Contact Agent".
- Dynamic map integration (static preview only for now).
