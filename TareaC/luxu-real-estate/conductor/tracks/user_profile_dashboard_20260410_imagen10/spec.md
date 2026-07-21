# Specification: User Profile & Dashboard

## Overview
High-fidelity, personalized \"User Profile & Dashboard\" designed to provide a \"Luxury Organized\" experience for property discovery, activity tracking, and account management. The dashboard features a dynamic hero section, a multi-tab system for saved properties and scheduled visits, and a robust profile management interface.

## Functional Requirements
- **User Identity & Hero Section:**
    - Immersive header with a soft mint gradient.
    - Identity block with a large Avatar (with \"Edit\" overlay), Name, Location, and Join Date.
    - **Edit Avatar:** Full integration with Supabase Storage for profile image uploads with optimistic UI updates.
    - **Quick Stats Card:** Floating card displaying counts for \"Saved Properties\", \"Scheduled Visits\", and \"Sold/Closed\" transactions.
- **Tab-Based Dashboard Navigation:**
    - **Saved Properties Tab:** Responsive 3-column grid of simplified property cards (Lazy Loaded).
    - **Upcoming Visits Tab:** Vertical stack of visit rows (Lazy Loaded) with property thumbnails, date/time blocks, agent avatars, and action buttons (Reschedule, Get Directions).
    - **Preferences & Settings Tab:** Form-based management for personal info and notification toggles (Email, Push, SMS) persisted in the profiles table.
- **Dynamic Activity Tracking:**
    - **Recent Activity Feed:** A side or inline feed showing property saves, visit bookings, and password updates.
- **Loading & Error States:**
    - Use Skeleton components for each tab's content during lazy loading.
    - Implement robust error handling for data fetching and image uploads.

## Non-Functional Requirements
- **Design System:** "Luxury Organized" aesthetic using Geist Sans, Emerald (#006655) accents, and shadcn/ui components (Tabs, Avatar, Card, Button, Switch, Input, Aspect Ratio, Skeleton, Separator, Label, Badge, Form).
- **Performance:** Optimized data fetching with lazy-loaded tab content to minimize initial page load.
- **Responsiveness:** Hero stats stack on mobile; visit rows collapse into cards.

## Acceptance Criteria
- [ ] Users can view and edit their profile information and avatar image.
- [ ] Profile images are correctly uploaded to and retrieved from Supabase Storage.
- [ ] Dashboard tabs (Saved, Visits, Settings) correctly lazy-load their respective data.
- [ ] The \"Quick Stats\" card accurately reflects the user's data from Supabase.
- [ ] The \"Recent Activity\" feed updates dynamically as the user interacts with the platform.
- [ ] The entire dashboard is responsive and follows the defined design language.

## Out of Scope
- Full implementation of \"Get Directions\" (external map link only).
- Actual notification delivery (UI/DB persistence only).
- Real-time chat (Agent \"Chat\" icon can be a mock placeholder for now).
