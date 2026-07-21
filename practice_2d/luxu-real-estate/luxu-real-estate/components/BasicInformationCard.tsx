"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePropertyForm } from "@/lib/hooks/usePropertyForm";

interface BasicInformationCardProps {
  form: ReturnType<typeof usePropertyForm>;
}

export function BasicInformationCard({ form }: BasicInformationCardProps) {
  const { register, formState: { errors } } = form;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>Enter the basic details of the property.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title")}
            placeholder="e.g., Stunning Modern Villa"
            className="mt-1"
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            {...register("price", { valueAsNumber: true })}
            placeholder="e.g., 1,500,000"
            className="mt-1"
            aria-invalid={errors.price ? "true" : "false"}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <Label htmlFor="type">Property Type</Label>
          <Input
            id="type"
            {...register("type")}
            placeholder="e.g., House, Apartment, Villa"
            className="mt-1"
            aria-invalid={errors.type ? "true" : "false"}
          />
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>}
        </div>

        <div>
          <Label htmlFor="status">Listing Status</Label>
          <Input
            id="status"
            {...register("status")}
            placeholder="e.g., For Sale, For Rent, Sold"
            className="mt-1"
            aria-invalid={errors.status ? "true" : "false"}
          />
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
