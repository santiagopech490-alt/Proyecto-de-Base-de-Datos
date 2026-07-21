"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming shadcn/ui checkbox is available
import { usePropertyForm } from "@/lib/hooks/usePropertyForm";

interface AmenitiesCardProps {
  form: ReturnType<typeof usePropertyForm>;
}

export function AmenitiesCard({ form }: AmenitiesCardProps) {
  const { setValue, watch } = form;

  const existingAmenities = watch("amenities");

  const amenitiesList = [
    "Swimming Pool",
    "Gym",
    "Parking",
    "Balcony",
    "Garden",
    "Terrace",
    "Central Air Conditioning",
    "High-Speed Internet",
  ];

  const handleCheckboxChange = (amenity: string, isChecked: boolean) => {
    const currentAmenities = watch("amenities");
    if (isChecked) {
      setValue("amenities", [...currentAmenities, amenity]);
    } else {
      setValue("amenities", currentAmenities.filter(a => a !== amenity));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Amenities</CardTitle>
        <CardDescription>Select the amenities available at the property.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {amenitiesList.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={`amenity-${amenity.toLowerCase().replace(/\s+/g, '-')}`}
                checked={existingAmenities.includes(amenity)}
                onCheckedChange={(checked) => handleCheckboxChange(amenity, checked as boolean)}
              />
              <Label htmlFor={`amenity-${amenity.toLowerCase().replace(/\s+/g, '-')}`}>
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
