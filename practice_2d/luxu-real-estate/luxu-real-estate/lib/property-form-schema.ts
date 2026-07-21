import * as z from 'zod';

export const propertyFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  price: z.number().positive({
    message: "Price must be a positive number.",
  }),
  status: z.string().min(1, { // Renamed from listing_status
    message: "Status is required.",
  }),
  type: z.string().min(1, { // Renamed from property_type
    message: "Property type is required.",
  }),
  description: z.string().optional(),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  area: z.number().positive().optional(), // Renamed from sqft
  built_year: z.number().int().min(1800).max(new Date().getFullYear()).optional(),
  bedrooms: z.number().int().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  parking: z.number().int().min(0).optional(), // Renamed from garage
  amenities: z.array(z.string()).default([]),
  images: z.array(z.string()).default([]), // Assuming image URLs or identifiers
});

export type PropertyFormValues = z.infer<typeof propertyFormSchema>;

