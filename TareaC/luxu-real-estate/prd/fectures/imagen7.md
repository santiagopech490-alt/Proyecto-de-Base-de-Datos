# Propuesta de Prompt Optimizado: Agendar Visita (Schedule a Viewing)

High-fidelity "Schedule a Viewing" appointment booking interface with a dual-pane layout, interactive calendar, and time-slot selection using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Clean, intuitive, high-end "Concierge" style.
- **Background:** Soft Mint (#F0F5F5) for the page background.
- **Surface:** Pure White (#FFFFFF) for the main scheduling card.
- **Primary Accent:** Emerald (#006655) for the "Confirm Visit" button and active selection states.
- **Secondary Accent:** Sage Grey (#718096) for icons and placeholder text.
- **Typography:** Geist Sans (Sans-serif) for professional clarity.
- **Cards:** Large rounded corners (20px), elegant soft shadow (shadow-xl).
- **Interactive:** Active date/time slots use Emerald background with white text; disabled slots are muted-gray with `opacity-50`.

**Page Structure:**
1.  **Navigation Header:**
    *   **Back Button:** "Back to property details" ghost button with a left-pointing chevron icon.
    *   **Title:** Centered or left-aligned "Schedule a Viewing" (Text-2xl, Font-bold).

2.  **Scheduling Container (2-Column Grid):**
    *   **Main Card:** A centered, large card with a 45/55 split ratio.
    *   **Left Column (Property Context):**
        *   **Media:** High-quality property image with `aspect-square` and `rounded-lg`. Floating "For Sale" badge.
        *   **Info Block:** Price (Text-xl, Bold), Address (Muted-sm), and a 3-item icon row for [Beds, Baths, sqft].
        *   **Agent Card:** Small internal card with `shadcn/ui` Avatar, "Listing Agent" label, name, and a "Chat" icon-button.
    *   **Right Column (Booking Interface):**
        *   **Calendar Widget:** `shadcn/ui` Calendar component centered. Custom styling for the "selected" day (Emerald circle).
        *   **Time Slots:** "Select Time" label followed by a grid of `ToggleGroup` buttons (e.g., 09:00 AM, 11:30 AM, 02:00 PM).
        *   **Message Area:** "Additional Notes" label with a `shadcn/ui` Textarea (placeholder: "Tell the agent about your specific interests...").
        *   **Action Bar:** Row with "Cancel" (Ghost button) and a prominent "Confirm Visit" (Solid Emerald button with a right-arrow icon).

3.  **Post-Booking Logic:**
    *   **Success State Placeholder:** A subtle "Booking Confirmed" success message or modal design suggestion.

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` (Calendar, Card, Button, Avatar, Textarea, ToggleGroup, Badge).
- Ensure the layout is responsive: On mobile (< 768px), stack the Property Context above the Booking Interface.
- Implement the "Back" action using Next.js `router.back()` or a simple link.
- Prepare the form to submit to a `bookings` table in Supabase (UserID, PropertyID, DateTime, Notes).

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
