# Track add-new-property-form_20260407 Specification

## Overview
Implement a high-fidelity "Add New Property" creation form with a modern dashboard aesthetic, integrated with Supabase for data persistence and storage.

## Functional Requirements
- **Form Management:** Use `react-hook-form` with `zod` for validation.
- **Header:** Sticky header with "Add New Property" title and action group ("Save Draft", "Save Property").
- **Layout:** 2-column layout (7:3 width distribution).
- **Basic Info:** Title, Price, Status, Type.
- **Description:** Textarea with a rich-text toolbar mockup.
- **Media:** Image upload dropzone with client-side previews and Supabase Storage integration.
- **Location:** Address input and a Leaflet-based map for marker placement.
- **Details:** Area, Built Year, and numeric steppers for Bedrooms, Bathrooms, and Parking.
- **Amenities:** Checklist of features (Swimming Pool, Gym, etc.).
- **Persistence:** Save property data and media directly to Supabase.

## Non-Functional Requirements
- Responsive design (collapses to single column on mobile).
- Tailwind CSS 4 patterns.
- `shadcn/ui` components (Card, Button, Input, etc.).
- Consistent design system (#F8FAFB background, #006655 Emerald accents).

## Acceptance Criteria
- [ ] Users can enter property details and upload images.
- [ ] Form validation prevents submission with missing required fields.
- [ ] Images are successfully uploaded to Supabase Storage and associated with the property.
- [ ] Property data is saved in the Supabase `properties` table.
- [ ] Map allows picking a location and updates the address/coordinates.
- [ ] UI is fully responsive and matches the design prompt in `prd/fectures/imagen1.md`.

## Out of Scope
- Detailed rich-text editor functionality (only mockup/toolbar).
- Advanced search filters (handled in other tracks).
