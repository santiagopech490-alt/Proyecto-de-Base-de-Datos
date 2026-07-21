# Implementation Plan: User Profile & Dashboard

## Phase 1: Foundation & Service Layer [checkpoint: 6498ba7]
- [x] Task: Install necessary shadcn/ui components (`tabs`, `avatar`, `card`, `button`, `switch`, `input`, `aspect-ratio`, `skeleton`, `separator`, `label`, `badge`, `form`). e3e71f4
- [x] Task: Extend profiles table and types to support "Location", "Member Since", and notification toggles. 33812a8
- [x] Task: Create storage-service.ts for profile image uploads to Supabase Storage. 05ce5cd
- [x] Task: Write Failing Tests for user-dashboard-service.ts (fetching favorites, appointments, and activity). 8ad0a3e
- [x] Task: Implement user-dashboard-service.ts with lazy-loading support for each dashboard section. 5004121
- [x] Task: Conductor - User Manual Verification 'Foundation & Service Layer' (Protocol in workflow.md) 6498ba7

## Phase 2: Core Layout & Hero Section [checkpoint: 430c197]
- [x] Task: Write Failing Tests for UserHero and QuickStats components. 9cb2a06
- [x] Task: Implement components/dashboard/UserHero.tsx with immersive gradient and identity block. a2d7074
- [x] Task: Implement components/dashboard/QuickStats.tsx with floating card segments. a2d7074
- [x] Task: Implement components/dashboard/DashboardTabs.tsx using shadcn/ui Tabs. 1b2b694
- [x] Task: Conductor - User Manual Verification 'Core Layout & Hero Section' (Protocol in workflow.md) 430c197

## Phase 3: Dashboard Content (Saved & Visits) [checkpoint: 8391ecb]
- [x] Task: Write Failing Tests for SavedPropertiesGrid and UpcomingVisitsList. 999f0c9
- [x] Task: Implement components/dashboard/SavedPropertiesGrid.tsx with lazy-loading and simplified property cards. a04327e
- [x] Task: Implement components/dashboard/UpcomingVisitsList.tsx with horizontal rows and action buttons. a04327e
- [x] Task: Implement components/dashboard/ActivityFeed.tsx to display recent user actions. b09ce3f
- [x] Task: Conductor - User Manual Verification 'Dashboard Content' (Protocol in workflow.md) 8391ecb

## Phase 4: Account Management & Settings [checkpoint: a613693]
- [x] Task: Write Failing Tests for ProfileSettingsForm and AvatarUpload. 474179e
- [x] Task: Implement components/dashboard/AvatarUpload.tsx with optimistic UI and Supabase Storage integration. 883b690
- [x] Task: Implement components/dashboard/ProfileSettingsForm.tsx for personal info and notification toggles. e19360a
- [x] Task: Conductor - User Manual Verification 'Account Management & Settings' (Protocol in workflow.md) a613693

## Phase 5: Refinement & Final Verification
- [x] Task: Implement Skeleton loading states for all lazy-loaded sections. f8bfce8
- [x] Task: Optimize responsive behavior (hero stats stacking, visit rows to cards). 2cc8105
- [ ] Task: Final code cleanup, coverage check (>80%), and documentation.
- [ ] Task: Conductor - User Manual Verification 'Refinement & Final Verification' (Protocol in workflow.md)
