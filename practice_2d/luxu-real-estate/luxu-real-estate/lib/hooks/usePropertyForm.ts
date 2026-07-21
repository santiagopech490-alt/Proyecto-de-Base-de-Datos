import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { propertyFormSchema, PropertyFormValues } from "@/lib/property-form-schema";

export function usePropertyForm() {
  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      title: "",
      price: 0,
      status: "draft", // Default status from schema
      type: "", // Default type from schema
      description: "",
      address: "",
      latitude: undefined,
      longitude: undefined,
      area: undefined,
      built_year: undefined,
      bedrooms: undefined,
      bathrooms: undefined,
      parking: undefined,
      amenities: [],
      images: [],
    },
  });

  return form;
}
