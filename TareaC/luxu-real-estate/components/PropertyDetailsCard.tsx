"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePropertyForm } from "@/lib/hooks/usePropertyForm";

interface PropertyDetailsCardProps {
  form: ReturnType<typeof usePropertyForm>;
}

export function PropertyDetailsCard({ form }: PropertyDetailsCardProps) {
  const { register, watch, formState: { errors } } = form;

  // Watch values to potentially control stepper increments/decrements if needed
  const area = watch("area");
  const built_year = watch("built_year");
  const bedrooms = watch("bedrooms");
  const bathrooms = watch("bathrooms");
  const parking = watch("parking");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Details</CardTitle>
        <CardDescription>Provide specific details about the property.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Area */}
        <div>
          <Label htmlFor="area">Area (m²)</Label>
          <Input
            id="area"
            type="number"
            {...register("area", { valueAsNumber: true })}
            placeholder="e.g., 150"
            className="mt-1"
            aria-invalid={errors.area ? "true" : "false"}
          />
          {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>}
        </div>

        {/* Built Year */}
        <div>
          <Label htmlFor="built_year">Built Year</Label>
          <Input
            id="built_year"
            type="number"
            {...register("built_year", { valueAsNumber: true })}
            placeholder="e.g., 2010"
            className="mt-1"
            aria-invalid={errors.built_year ? "true" : "false"}
          />
          {errors.built_year && <p className="text-red-500 text-sm mt-1">{errors.built_year.message}</p>}
        </div>

        {/* Bedrooms */}
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon-sm"
              className="h-7 w-7"
              onClick={(e) => {
                e.preventDefault();
                if (bedrooms !== undefined && bedrooms > 0) {
                  setValue("bedrooms", bedrooms - 1);
                }
              }}
              disabled={bedrooms === undefined || bedrooms === 0}
            >
              -
            </Button>
            <Input
              id="bedrooms"
              type="number"
              {...register("bedrooms", { valueAsNumber: true, min: 0 })}
              className="h-7 w-16 text-center p-0"
              aria-invalid={errors.bedrooms ? "true" : "false"}
              disabled // Temporarily disabled as we control via buttons, but register is needed for schema
            />
             {errors.bedrooms && <p className="text-red-500 text-sm mt-1">{errors.bedrooms.message}</p>}
            <Button
              variant="outline"
              size="icon-sm"
              className="h-7 w-7"
              onClick={(e) => {
                e.preventDefault();
                setValue("bedrooms", (bedrooms || 0) + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>

        {/* Bathrooms */}
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon-sm"
              className="h-7 w-7"
              onClick={(e) => {
                e.preventDefault();
                if (bathrooms !== undefined && bathrooms > 0) {
                  setValue("bathrooms", bathrooms - 1);
                }
              }}
              disabled={bathrooms === undefined || bathrooms === 0}
            >
              -
            </Button>
            <Input
              id="bathrooms"
              type="number"
              {...register("bathrooms", { valueAsNumber: true, min: 0 })}
              className="h-7 w-16 text-center p-0"
              aria-invalid={errors.bathrooms ? "true" : "false"}
              disabled // Temporarily disabled as we control via buttons
            />
            {errors.bathrooms && <p className="text-red-500 text-sm mt-1">{errors.bathrooms.message}</p>}
            <Button
              variant="outline"
              size="icon-sm"
              className="h-7 w-7"
              onClick={(e) => {
                e.preventDefault();
                setValue("bathrooms", (bathrooms || 0) + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>

        {/* Parking */}
        <div className="flex items-center justify-between gap-4">
          <Label htmlFor="parking">Parking</Label>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon-sm"
              className="h-7 w-7"
              onClick={(e) => {
                e.preventDefault();
                if (parking !== undefined && parking > 0) {
                  setValue("parking", parking - 1);
                }
              }}
              disabled={parking === undefined || parking === 0}
            >
              -
            </Button>
            <Input
              id="parking"
              type="number"
              {...register("parking", { valueAsNumber: true, min: 0 })}
              className="h-7 w-16 text-center p-0"
              aria-invalid={errors.parking ? "true" : "false"}
              disabled // Temporarily disabled as we control via buttons
            />
            {errors.parking && <p className="text-red-500 text-sm mt-1">{errors.parking.message}</p>}
            <Button
              variant="outline"
              size="icon-sm"
              className="h-7 w-7"
              onClick={(e) => {
                e.preventDefault();
                setValue("parking", (parking || 0) + 1);
              }}
            >
              +
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
