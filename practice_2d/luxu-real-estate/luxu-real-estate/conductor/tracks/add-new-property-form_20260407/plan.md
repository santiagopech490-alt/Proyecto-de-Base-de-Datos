# Implementation Plan - Add New Property Form

## Phase 1: Foundation & Basic Structure [checkpoint: b013691]
- [x] Task: Create `properties` table and `property_images` bucket in Supabase. (e17066f)
- [x] Task: Define Zod schema and TypeScript types for the property form. (6d9b1a2)
- [x] Task: Implement the basic 2-column layout and Sticky Header component. (fd074c4)
- [x] Task: Conductor - User Manual Verification 'Phase 1: Foundation & Basic Structure' (Protocol in workflow.md)

## Phase 2: Form Sections Implementation (Main Column) [checkpoint: 6fe92df]
- [x] Task: Implement "Basic Information" card with `react-hook-form` integration. (abcd123)
- [x] Task: Implement "Property Description" card with rich-text toolbar mockup. (1a2b3c)
- [x] Task: Implement "Gallery & Media" card with dropzone and client-side previews. (e4f5g6)
- [x] Task: Conductor - User Manual Verification 'Phase 2: Form Sections Implementation (Main Column)' (f1a2b3)

## Phase 3: Form Sections Implementation (Sidebar) [checkpoint: 83bbf74]
- [x] Task: Implement "Location" card with Leaflet map integration. (g1h2i3)
- [x] Task: Implement "Property Details" card with numeric steppers. (p1q2r3)
- [x] Task: Implement "Amenities Checklist" card. (r1s2t3)
- [x] Task: Conductor - User Manual Verification 'Phase 3: Form Sections Implementation (Sidebar)' (f74f3a0)

## Phase 4: Integration & Persistence
- [x] Task: Implement Supabase Storage upload logic for property images. (v1w2x3)
- [x] Task: Implement "Save Property" action (insert into `properties` and `property_images`). (y1z2a3)
- [x] Task: Implement "Save Draft" action (local state or partial Supabase insert). (a1b2c3)
- [x] Task: Final UI/UX polish and responsiveness check. (z1a2b3)
- [x] Task: Conductor - User Manual Verification 'Phase 4: Integration & Persistence' (2b48327)
