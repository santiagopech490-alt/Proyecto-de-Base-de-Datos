# Track Specification: Fix Favorites Toggle Sync

## Problem
The favorites heart button on the Home page is not reflecting changes in the Favorites section.

## Requirements
- Heart button on Home page must update Supabase (Hybrid strategy).
- Heart button on Home page must update global state via `FavoritesContext`.
- Favorites section should refresh immediately upon toggle.
