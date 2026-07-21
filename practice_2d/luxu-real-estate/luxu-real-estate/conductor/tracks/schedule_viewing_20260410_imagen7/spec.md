# Specification: Schedule a Viewing Appointment Booking Interface

## Overview
High-fidelity \"Schedule a Viewing\" appointment booking interface for property listings. The goal is to provide a premium, concierge-style scheduling experience for authenticated users, featuring a dual-pane layout with property context and an interactive booking system.

## Functional Requirements
- **Dual-Pane Layout (2-Column Grid):**
    - **Left Column (Property Context):**
        - High-quality property hero image (aspect-square, rounded-lg).
        - Property info: Price, Address, Beds, Baths, sqft.
        - Agent Card: shadcn/ui Avatar, Listing Agent name, and a mock 'Chat' icon-button.
    - **Right Column (Booking Interface):**
        - **Calendar Widget:** shadcn/ui Calendar for date selection.
        - **Time Slots:** Grid of ToggleGroup buttons for time selection (e.g., 09:00 AM, 11:30 AM).
        - **Availability:** Some slots will be disabled/muted to simulate real-time booking (mocked logic).
        - **Additional Notes:** shadcn/ui Textarea for optional user comments.
        - **Action Bar:** 'Cancel' (ghost) and 'Confirm Visit' (emerald solid with icon) buttons.
- **Authentication:** Only logged-in users can schedule a viewing. The user ID is retrieved from the Supabase session.
- **Navigation:** 'Back to property details' button using Next.js routing.
- **Form Submission:** Booking data (UserID, PropertyID, DateTime, Notes) is submitted to the bookings table in Supabase.
- **Post-Booking Experience:** On success, display an inline \"Success\" modal or message without leaving the page.

## Non-Functional Requirements
- **Theme/Design:** Clean \"Concierge\" style with Soft Mint (#F0F5F5) background, White cards, and Emerald (#006655) accents.
- **Typography:** Geist Sans.
- **Responsiveness:** Stack the property context above the booking interface on mobile devices.
- **Implementation:** Next.js 16 (App Router), Tailwind CSS 4, shadcn/ui components (Calendar, Card, Button, Avatar, Textarea, ToggleGroup, Badge, Separator).

## Acceptance Criteria
- [ ] Users can navigate back to the property details screen.
- [ ] Only future dates can be selected in the calendar.
- [ ] Time slots are selectable; disabled slots cannot be clicked.
- [ ] Successful booking persists data to Supabase and shows a success confirmation.
- [ ] The layout is fully responsive and matches the premium design aesthetic.

## Out of Scope
- Real-time chat integration (the icon is a mock placeholder).
- External calendar syncing (e.g., Google Calendar, Outlook).
- Automated email/SMS notifications for this track.
