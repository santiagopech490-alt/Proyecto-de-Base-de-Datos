"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Code,
} from "lucide-react";
import { usePropertyForm } from "@/lib/hooks/usePropertyForm";

interface DescriptionCardProps {
  form: ReturnType<typeof usePropertyForm>;
}

export function DescriptionCard({ form }: DescriptionCardProps) {
  const { register, formState: { errors } } = form;

  const toolbarButtons = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Underline, label: "Underline" },
    { icon: List, label: "Bulleted List" },
    { icon: ListOrdered, label: "Numbered List" },
    { icon: Link, label: "Link" },
    { icon: Code, label: "Code" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Description</CardTitle>
        <CardDescription>Provide a detailed description of the property.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Mock Rich Text Toolbar */}
        <div className="flex flex-wrap gap-2 p-2 border rounded-md bg-background">
          {toolbarButtons.map((button) => (
            <Button
              key={button.label}
              variant="ghost"
              size="icon-sm"
              className="text-muted-foreground hover:text-primary"
              aria-label={button.label}
            >
              <button.icon className="w-4 h-4" />
            </Button>
          ))}
        </div>

        {/* Description Textarea */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Describe the property, its features, and amenities..."
            className="mt-1 min-h-[150px]"
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
