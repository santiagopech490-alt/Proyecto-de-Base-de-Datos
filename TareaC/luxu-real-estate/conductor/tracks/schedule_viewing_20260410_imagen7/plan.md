# Implementation Plan: Schedule a Viewing Appointment Booking Interface

## Phase 1: Data Model & API Services
- [x] Task: Install necessary shadcn/ui components (`calendar`, `card`, `avatar`, `button`, `toggle-group`, `textarea`, `badge`, `separator`).
- [x] Task: Create Supabase migration for the bookings table (UserID, PropertyID, DateTime, Notes, Status).
- [x] Task: Define TypeScript interfaces for Booking and Availability in types/booking.ts.
- [x] Task: Write Failing Tests for booking-service.ts (methods: createBooking, getAvailability).
- [x] Task: Implement createBooking and getAvailability in lib/services/booking-service.ts.
    - [x] Add logic to mock/simulate busy time slots.
- [ ] Task: Conductor - User Manual Verification 'Data Model & API Services' (Protocol in workflow.md)

## Phase 2: Core UI Components
- [x] Task: Write Failing Tests for PropertySummaryCard component.
- [x] Task: Implement components/booking/PropertySummaryCard.tsx (Left Pane UI: Image, Price, Address, Badges, Agent).
- [x] Task: Write Failing Tests for BookingScheduler component.
- [x] Task: Implement components/booking/BookingScheduler.tsx (Right Pane UI: Calendar, ToggleGroup for Time, Textarea).
    - [x] Task: Integrate shadcn/ui Calendar and ToggleGroup. (Implicitly included dialog components)
- [x] Task: Implement components/booking/BookingSuccessModal.tsx for post-booking confirmation.
- [ ] Task: Conductor - User Manual Verification 'Core UI Components' (Protocol in workflow.md)

## Phase 3: Page Integration & Flow
- [x] Task: Create the scheduling route at app/properties/[id]/schedule/page.tsx. (Note: Handled slug conflict in code. File system issue with '[id]' directory preventing server start requires manual intervention.)
- [x] Task: Implement data fetching for property details and availability.
- [ ] Task: Implement form submission logic and error handling.
- [ ] Task: Apply responsive grid layout (2-column desktop, 1-column mobile).
- [ ] Task: Write Integration Tests for the full booking flow.
- [ ] Task: Conductor - User Manual Verification 'Page Integration & Flow' (Protocol in workflow.md)

## Phase 4: Styling Refinement & Final Verification
- [ ] Task: Finalize styling using Soft Mint (#F0F5F5) and Emerald (#006655) accents.
- [ ] Task: Verify 'Back to property details' navigation and 'Chat' mock action.
- [ ] Task: Run full test suite and ensure >80% code coverage.
- [ ] Task: Conductor - User Manual Verification 'Styling Refinement & Final Verification' (Protocol in workflow.md)
