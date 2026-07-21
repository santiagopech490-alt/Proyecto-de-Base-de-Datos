# Propuesta de Prompt Optimizado: Formulario "Add New Property"

High-fidelity property creation form with a modern dashboard aesthetic, built using shadcn/ui and Tailwind CSS 4.

**DESIGN SYSTEM (REQUIRED):**
- **Platform:** Web, Desktop-first.
- **Theme:** Light, minimal, sophisticated.
- **Background:** Soft Fog (#F8FAFB) for page background.
- **Surface:** Pure White (#FFFFFF) for elevated cards.
- **Primary Accent:** Emerald Green (#006655) for the primary "Save Property" action.
- **Secondary Accent:** Cool Gray (#E2E8F0) for borders and "Save Draft" button.
- **Text Primary:** Charcoal (#111827) for headings and body text.
- **Text Secondary:** Muted Slate (#64748B) for labels and helper text.
- **Typography:** Geist Sans (Sans-serif) for all UI elements.
- **Cards:** Gently rounded corners (12px) with a subtle shadow (shadow-sm).
- **Inputs:** Clean borders (#E2E8F0), focus state with Emerald (#006655) ring.

**Page Structure:**
1.  **Sticky Header:** Page title "Add New Property" on the left; Action group on the right containing "Save Draft" (ghost/bordered button) and "Save Property" (solid Emerald button).
2.  **Layout Grid:** 2-column layout with a 7:3 width distribution.
3.  **Main Column (Left):**
    *   **Basic Information Card:** Grid of inputs for "Property Title", "Price", and Select dropdowns for "Status" and "Type".
    *   **Property Description Card:** Textarea with a simulated rich-text toolbar (Bold, Italic, List, Link).
    *   **Gallery & Media Card:** A dashed-border dropzone for image uploads followed by a responsive grid showing image previews with "Remove" buttons and an "Add More" placeholder.
4.  **Sidebar Column (Right):**
    *   **Location Card:** Address input field and a stylized high-fidelity map component placeholder with a marker.
    *   **Property Details Card:** Numeric inputs for "Area (sqft)" and "Built Year". Custom numeric stepper components (plus/minus buttons) for "Bedrooms", "Bathrooms", and "Parking Spaces".
    *   **Amenities Checklist Card:** Multi-column grid of checkboxes for features (e.g., Swimming Pool, Gym, Wi-Fi).

**IMPLEMENTATION GUIDELINES:**
- Use `shadcn/ui` components (Card, Button, Input, Select, Checkbox, Textarea).
- Maintain generous whitespace and consistent padding (p-6) within cards.
- Ensure the layout is responsive, collapsing to a single column on mobile.
- Prepare component structure for future integration with Supabase (use clean state management or form libraries like `react-hook-form`).

---
💡 **Tip:** For consistent designs across multiple screens, create a DESIGN.md 
file using the `design-md` skill. This ensures all generated pages share the 
same visual language.
