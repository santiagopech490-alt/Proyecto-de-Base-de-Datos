# Specification: Implement landing page based on home_discover_screen prototype

## Overview
This track involves implementing the core landing page for Luxu Real Estate, following the "home_discover_screen" design prototype. The page will serve as the primary entry point for users to discover premium properties.

## User Stories
- As a user, I want to see a visually stunning landing page that reflects a premium brand identity.
- As a user, I want to search for properties by city, neighborhood, or address.
- As a user, I want to filter properties by type (House, Apartment, Villa, Penthouse).
- As a user, I want to see featured collections and newly listed properties.

## Functional Requirements
- **Navigation Bar:** Logo (LuxeEstate), Links (Buy, Rent, Sell, Saved Homes), Search, Notifications, Profile.
- **Hero Section:** Catchphrase ("Find your sanctuary"), Search Input with "Search" button.
- **Category Filters:** Quick filters for property types (All, House, Apartment, Villa, Penthouse) and a "Filters" button.
- **Featured Collections:** Horizontal or grid layout for exclusive properties with high-quality images, titles, locations, prices, and specs (beds, baths, area).
- **New in Market:** Grid of property cards with status (FOR SALE/RENT), images, prices, titles, locations, and specs.
- **Load More:** Button to load additional listings.

## Technical Requirements
- **Next.js 16 App Router:** Use Server Components for property fetching.
- **Tailwind CSS 4:** Apply utility-first styling consistent with the prototype.
- **UI Components (shadcn/ui):**
    - `button`: Primary, secondary, and ghost variants for interactions.
    - `input`: Search functionality in the hero section.
    - `badge`: Status indicators on property cards (Exclusive, For Sale, etc.).
    - `card`: Container for property listings.
    - `avatar`: User profile display in the navigation bar.
    - `tabs`: Filtering logic for property categories and market status.
    - `separator`: Visual dividers in cards and navigation.
- **Type Safety:** Ensure all components and data structures are fully typed.
- **Test-Driven Development:** Write tests for core functionality and components.
- **Accessibility:** Ensure the page is navigable and readable for all users.
