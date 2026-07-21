# Technology Stack - Luxu Real Estate

## Core Technologies
- **Programming Language:** TypeScript
- **Frontend Framework:** Next.js 16 (App Router)
- **Component Library:** React 19
- **Styling:** Tailwind CSS 4

## Development Environment
- **Runtime:** Node.js
- **Package Manager:** npm (based on `package-lock.json`)
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Linting:** ESLint (v9)
- **Formatting:** Prettier (or as per Next.js default)

## Architecture
- **Rendering Strategy:** Next.js App Router (Server-First approach)
- **CSS Strategy:** Tailwind CSS 4 (Utility-First styling)
- **Data Interaction:** Server Actions (Next.js) for database operations (e.g., dynamic property counting).
- **State Management:** URL-based state synchronization for search filters and shareable UI states.
- **Authentication:** Supabase Auth (SSR) for secure social login management.
- **Form Validation:** Zod for schema-based validation.
