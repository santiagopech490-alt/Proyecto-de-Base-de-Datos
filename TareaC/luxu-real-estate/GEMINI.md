# GEMINI.md - Luxu Real Estate

This file provides context and instructions for AI agents working on the Luxu Real Estate project.

## Project Overview

Luxu Real Estate is a premium real estate platform designed to offer a high-end experience for property discovery, management, and user interaction.

### Core Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Fonts:** Geist (Sans & Mono), Inter (used in prototypes)
- **Icons:** Material Symbols / Lucide React

### Project Structure

- `app/`: Next.js App Router directory for pages and layouts.
- `prd/`: Contains product requirements and design prototypes.
  - `resources/`: HTML/Tailwind prototypes for key application screens (e.g., property details, search filters, dashboards).
- `.agents/skills/`: Custom agent skills for various development tasks (Next.js, Tailwind, etc.).

## Building and Running

The project uses standard npm scripts for development and deployment:

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Start:** `npm run start`
- **Lint:** `npm run lint`

## Development Conventions

### Next.js 16 & React 19

- **Breaking Changes:** This project uses an advanced version of Next.js that may differ from your training data. Consult `AGENTS.md` for warnings about breaking changes and refer to the project's documentation if available.
- **App Router:** Strictly follow App Router conventions.
- **Server Components:** Prefer Server Components for data fetching and only use `use client` where interactivity is required.

### Styling

- **Tailwind CSS 4:** Use the latest Tailwind CSS 4 patterns.
- **Prototypes:** Before implementing any new screen or feature, review the existing prototypes in `prd/resources/`. They define the "source of truth" for the intended visual design and layout.

### Code Quality

- **ESLint:** Maintain code quality by adhering to the rules defined in `eslint.config.mjs`.
- **TypeScript:** Ensure full type safety. Avoid using `any` and leverage advanced TypeScript types when appropriate.

## Key Screens (Prototypes)

The following screens are prototyped in `prd/resources/` and should be used as the basis for implementation:

- `home_discover_screen`: Landing and property discovery page.
- `property_details_screen`: Detailed view for individual properties.
- `search_filters_screen`: Advanced search and filtering interface.
- `property_management_dashboard`: Admin/Agent interface for managing listings.
- `user_profile_screen`: User account and profile management.
- `add_edit_property_form`: Interface for creating or modifying listings.
- `favorites_list_screen`: User's saved/favorited properties.
- `schedule_visit_screen`: Property visit scheduling interface.
- `social_login_and_registration`: Authentication and onboarding flows.
- `admin_user_directory_cards`: Management view for users/agents.
