# Implementation Plan: Advanced Search Filters Modal

## Phase 1: State & Hook Infrastructure [checkpoint: 0e93bfb]
- [x] Task: Install necessary shadcn/ui components (`dialog`, `sheet`, `input`, `slider`, `select`, `button`, `toggle`, `toggle-group`, `label`, `separator`). [c3773d3]
- [x] Task: Create usePropertyFilters hook in lib/hooks/usePropertyFilters.ts to sync state with URL SearchParams. [133ddb5]
- [x] Task: Write Failing Tests for usePropertyFilters (handling types, defaults, and URL serialization). [b1ca2d0]
- [x] Task: Implement usePropertyFilters with support for [location, minPrice, maxPrice, type, beds, baths, amenities]. [b1ca2d0]
- [x] Task: Conductor - User Manual Verification 'State & Hook Infrastructure' (Protocol in workflow.md)

## Phase 2: Core UI Filter Components [checkpoint: 974e72a]
- [x] Task: Write Failing Tests for PriceRangeSlider component (dual-thumb sync with inputs). [23bc1d3]
- [x] Task: Implement components/search/PriceRangeSlider.tsx using shadcn/ui Slider. [30a8359]
- [x] Task: Write Failing Tests for NumericStepper component. [aacdcc8]
- [x] Task: Implement components/search/NumericStepper.tsx for Bedrooms/Bathrooms. [1bf3114]
- [x] Task: Implement components/search/AmenitiesGrid.tsx using shadcn/ui Toggle chips. [679ce28]
- [x] Task: Conductor - User Manual Verification 'Core UI Filter Components' (Protocol in workflow.md)

## Phase 3: Real-time Data & Action Bar [checkpoint: d6697d8]
- [x] Task: Implement a debounced server action or API route to fetch property count based on current filters. [b1ca2d0]
- [x] Task: Write Failing Tests for the property count aggregate query. [b1ca2d0]
- [x] Task: Implement the \"Show [N] Homes\" dynamic button with loading states. [b1ca2d0]
- [x] Task: Conductor - User Manual Verification 'Real-time Data & Action Bar' (Protocol in workflow.md)

## Phase 4: Modal Integration & Responsive Layout [checkpoint: 1268d19]
- [x] Task: Implement components/search/FiltersModal.tsx as a responsive container (Sheet on mobile, Dialog on desktop). [1268d19]
- [x] Task: Integrate all filter components and the reset logic. [1268d19]
- [x] Task: Verify URL synchronization and \"Clear all\" functionality. [1268d19]
- [x] Task: Conductor - User Manual Verification 'Modal Integration & Responsive Layout' (Protocol in workflow.md)

## Phase: Review Fixes
- [x] Task: Apply review suggestions [3f09484]
