# Specification: LuxeEstate Login Screen

## Overview
Implement a high-fidelity, premium social login screen for LuxeEstate. The goal is to provide a clean, modern, and minimalist authentication experience that aligns with the brand's luxury identity. The screen will support social login via Google and GitHub using Supabase Auth.

## Functional Requirements
- **Route:** The screen must be accessible at `/auth/login`.
- **Authentication:** 
    - Integrate with **Supabase Auth** for social provider handling.
    - Provide "Continue with Google" button.
    - Provide "Continue with GitHub" button.
- **Interactions:**
    - Visual feedback (loading states) when a social login is initiated.
    - Error handling for failed authentication attempts.
- **Redirection:** Redirect authenticated users to the `/properties` page upon successful login.
- **Registration Link:** Include a "Sign up" link that directs users to a registration flow (to be implemented in a future track, mock for now).
- **Footer Links:** Functional text links for "Privacy Policy", "Terms of Service", and "Help Center".

## Non-Functional Requirements
- **UI Frameworks:** Next.js 16 (App Router), Tailwind CSS 4, shadcn/ui (Button, Card).
- **Aesthetics:**
    - **Background:** Subtle radial gradient from Mint (#F0F9F6) to Off-white (#F7FCFA).
    - **Card:** Floating white card with soft shadows and rounded corners (16px).
    - **Branding:** Emerald green (#0F5A4D) brand icon with house/hand symbol.
- **Typography:** Modern Sans-Serif (Geist or Inter).
- **Responsiveness:** Centered layout that works beautifully across mobile and desktop.

## Acceptance Criteria
- [ ] Accessible via `/auth/login`.
- [ ] Google and GitHub login buttons correctly trigger Supabase Auth flows.
- [ ] Authenticated users are successfully redirected to `/properties`.
- [ ] The UI matches the "Modern Minimalist" luxury aesthetic described in the prompt.
- [ ] No hardcoded secrets or sensitive credentials.

## Out of Scope
- Email/Password authentication.
- Password recovery/reset flows.
- Detailed "Sign up" multi-step registration (link only).
