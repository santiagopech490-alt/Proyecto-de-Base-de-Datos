# Specification: Advanced Search Filters Modal

## Overview
High-fidelity, interactive search filters modal designed for the Luxu Real Estate platform. The goal is to provide a premium \"Concierge\" experience for property discovery, featuring advanced range sliders, real-time property counts, and deep integration with URL state.

## Functional Requirements
- **Responsive Container:**
    - Desktop: Fixed-width (max-w-md) centered shadcn/ui Dialog.
    - Mobile: Full-width slide-up shadcn/ui Sheet.
- **State Management & Persistence:**
    - All filter states must be synchronized with URL SearchParams for shareable search results.
- **Filter Components:**
    - **Location Search:** Text input with icon for keyword/location filtering.
    - **Price Range Slider:** Dual-thumb shadcn/ui Slider in Emerald. Synchronized with numeric inputs for Min/Max values.
    - **Property Type:** shadcn/ui Select dropdown (House, Apartment, Villa, etc.).
    - **Numeric Steppers:** Plus/minus controls for Bedrooms and Bathrooms count.
    - **Amenities Grid:** shadcn/ui Toggle Group (multiple) with custom styled item chips for [Pool, Gym, Garden, Parking, Wi-Fi, AC, Balcony, Security].
- **Dynamic Action Bar:**
    - **Real-time Counter:** \"Show [N] Homes\" button that updates dynamically using a debounced Supabase aggregate query as filters change.
    - **Reset/Clear:** \"Reset\" (header) and \"Clear all filters\" (footer) actions to reset all values and URL state.

## Non-Functional Requirements
- **Frameworks & UI:** Next.js 16 (App Router), Tailwind CSS 4, shadcn/ui components (Dialog, Sheet, Input, Slider, Select, Button, Toggle, Toggle Group, Label, Separator).
- **Theme:** "Concierge" style (White surface, Soft Mint backgrounds, Emerald #006655 accents).
- **Typography:** Geist Sans.
- **Performance:** Debounce Supabase queries to minimize API calls while maintaining a \"live\" feel.

## Acceptance Criteria
- [ ] Filters correctly update the URL query parameters.
- [ ] Range slider movements are instantly reflected in numeric inputs and vice versa.
- [ ] The property counter ([N]) updates accurately based on selected filters.
- [ ] Modal correctly transforms into a bottom sheet on mobile screens.
- [ ] All \"Reset\" actions successfully clear filters and return parameters to defaults.

## Out of Scope
- Full map-based search integration (only text location search).
- Search history/saved searches (these belong to a separate track).
- Multi-step or wizard-style filtering.
