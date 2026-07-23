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
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function PropertyTypeSelect() {
  const { t } = useLanguage();
  const { filters, setFilter } = usePropertyFilters();
  const value = filters.type || 'all';

  const PROPERTY_TYPES = [
    { value: 'all', label: t("filtersModal.anyType") },
    { value: 'house', label: t("filtersModal.house") },
    { value: 'apartment', label: t("filtersModal.apartment") },
    { value: 'villa', label: t("filtersModal.villa") },
    { value: 'townhouse', label: t("filtersModal.townhouse") },
    { value: 'condo', label: t("filtersModal.condo") },
  ];

  const handleValueChange = (newValue: string) => {
    setFilter('type', newValue === 'all' ? undefined : newValue);
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {t("filtersModal.propertyType")}
      </Label>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-12 bg-muted/30 border-none focus:ring-emerald-600 cursor-pointer">
          <SelectValue placeholder={t("filtersModal.anyType")} />
        </SelectTrigger>
        <SelectContent>
          {PROPERTY_TYPES.map((type) => (
            <SelectItem key={type.value} value={type.value} className="cursor-pointer">
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
