# Specification: Setup Supabase Data & Seeding (`setup-supabase-data`)

**Overview**
Establish the foundational data layer for the LuxeEstate platform by configuring Supabase, defining the `properties` table, and seeding it with 30 high-fidelity premium property records derived from project prototypes.

**Functional Requirements**
1.  **Environment & Tooling Setup:**
    -   Configure Next.js to connect to Supabase using the "App Framework" method, leveraging existing credentials in `.env.local`.
    -   Link the Supabase MCP to the workspace using `.env.local` to enable automated migrations.
2.  **Database Schema (Flat Table):**
    -   Create a `properties` table in the `public` schema.
    -   **Columns:**
        - `id`: UUID (Primary Key, default `gen_random_uuid()`).
        - `title`: Text (Not Null).
        - `slug`: Text (Unique, Not Null) - Manual descriptive values for SEO-friendly URLs.
        - `description`: Text.
        - `price`: Numeric (Not Null).
        - `price_period`: Text (Default: 'total' for sales, 'monthly' for rent).
        - `images`: Text Array (Not Null) - Must contain at least 5 URLs per property.
        - `address`: Text (Not Null).
        - `city`: Text (Not Null).
        - `neighborhood`: Text.
        - `latitude`: Numeric.
        - `longitude`: Numeric.
        - `amenities`: Text Array - Priority: Luxury Facilities (Pool, Spa, Gym, etc.).
        - `bedrooms`: Integer.
        - `bathrooms`: Numeric.
        - `garage`: Integer.
        - `sqft`: Numeric.
        - `property_type`: Text (e.g., Villa, Penthouse, Mansion).
        - `listing_status`: Text (Default: 'For Sale').
        - `created_at`: Timestamptz (Default `now()`).
3.  **Seed Data Generation:**
    -   Create a migration or seed script to insert 30 properties.
    -   Data must match the "Premium Real Estate" aesthetic of prototypes in `prd/resources/`.
    -   Ensure each property has a unique, manually defined slug.
    -   Each property MUST have at least 5 image URLs.

**Non-Functional Requirements**
-   **Type Safety:** Generate TypeScript types from the database schema using `supabase gen types`.
-   **TDD:** Follow the Red-Green-Refactor workflow defined in `workflow.md`.
-   **Performance:** Unique index on `slug` column.

**Acceptance Criteria**
-   Supabase successfully linked via MCP.
-   `properties` table exists with the specified schema.
-   30 high-fidelity property records are seeded.
-   All properties have 5+ images and valid geolocation data.
-   TypeScript types are generated and accurate.
