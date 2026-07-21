'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { usePropertyFilters, PropertyFilters } from '@/lib/hooks/usePropertyFilters';

interface NumericStepperProps {
  label: string;
  filterKey: keyof PropertyFilters;
}

export function NumericStepper({ label, filterKey }: NumericStepperProps) {
  const { filters, setFilter } = usePropertyFilters();
  const value = filters[filterKey] as number | undefined;

  const handleDecrement = () => {
    const currentValue = value || 0;
    if (currentValue <= 1) {
      setFilter(filterKey, undefined);
    } else {
      setFilter(filterKey, currentValue - 1);
    }
  };

  const handleIncrement = () => {
    const currentValue = value || 0;
    setFilter(filterKey, currentValue + 1);
  };

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-muted"
          onClick={handleDecrement}
          aria-label="decrement"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="min-w-[2rem] text-center text-sm font-semibold">
          {value ? `${value}+` : 'Any'}
        </span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-muted"
          onClick={handleIncrement}
          aria-label="increment"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
