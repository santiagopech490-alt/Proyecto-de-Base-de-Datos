'use client';

import * as React from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function PriceRangeSlider() {
  const { t } = useLanguage();
  const { filters, setFilter } = usePropertyFilters();
  
  const minPrice = filters.minPrice || 0;
  const maxPrice = filters.maxPrice || 10000000;
  
  const [localValues, setLocalValues] = React.useState([minPrice, maxPrice]);

  React.useEffect(() => {
    setLocalValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleSliderChange = (values: number[]) => {
    setLocalValues(values);
  };

  const handleSliderCommit = (values: number[]) => {
    setFilter('minPrice', values[0]);
    setFilter('maxPrice', values[1]);
  };

  const handleInputChange = (index: number, value: string) => {
    const numValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const newValues = [...localValues];
    newValues[index] = numValue;
    setLocalValues(newValues);
  };

  const handleInputBlur = (index: number) => {
    const key = index === 0 ? 'minPrice' : 'maxPrice';
    setFilter(key, localValues[index]);
  };

  const formatPrice = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {t("filtersModal.priceRange")}
        </Label>
        <span className="text-sm font-semibold text-[#006655]">
          {formatPrice(localValues[0])} – {formatPrice(localValues[1])}
        </span>
      </div>

      <Slider
        defaultValue={[0, 10000000]}
        max={10000000}
        step={50000}
        value={localValues}
        onValueChange={handleSliderChange}
        onValueCommit={handleSliderCommit}
        className="[&_[role=slider]]:border-[#006655] [&_[role=slider]]:bg-white [&_.bg-primary]:bg-[#006655]"
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="minPrice" className="text-xs font-medium text-muted-foreground uppercase">
            {t("filtersModal.minPrice")}
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="minPrice"
              type="text"
              value={localValues[0]}
              onChange={(e) => handleInputChange(0, e.target.value)}
              onBlur={() => handleInputBlur(0)}
              className="pl-7 bg-muted/30 border-none focus-visible:ring-emerald-600"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="maxPrice" className="text-xs font-medium text-muted-foreground uppercase">
            {t("filtersModal.maxPrice")}
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="maxPrice"
              type="text"
              value={localValues[1]}
              onChange={(e) => handleInputChange(1, e.target.value)}
              onBlur={() => handleInputBlur(1)}
              className="pl-7 bg-muted/30 border-none focus-visible:ring-emerald-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
