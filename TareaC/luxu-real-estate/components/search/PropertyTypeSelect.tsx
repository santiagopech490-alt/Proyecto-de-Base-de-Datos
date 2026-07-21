'use client';

import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';

const PROPERTY_TYPES = [
  { value: 'all', label: 'Any Type' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'condo', label: 'Condo' },
];

export function PropertyTypeSelect() {
  const { filters, setFilter } = usePropertyFilters();
  const value = filters.type || 'all';

  const handleValueChange = (newValue: string) => {
    setFilter('type', newValue === 'all' ? undefined : newValue);
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Property Type
      </Label>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-12 bg-muted/30 border-none focus:ring-emerald-600">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          {PROPERTY_TYPES.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
