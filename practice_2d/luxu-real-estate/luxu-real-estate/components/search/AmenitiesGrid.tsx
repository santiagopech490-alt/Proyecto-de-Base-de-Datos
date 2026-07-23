'use client';

import * as React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { 
  Waves, 
  Dumbbell, 
  Car, 
  Wind, 
  Wifi, 
  TreePine, 
  ShieldCheck, 
  Layout 
} from 'lucide-react';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function AmenitiesGrid() {
  const { t } = useLanguage();
  const { filters, setFilter } = usePropertyFilters();
  const selectedAmenities = filters.amenities || [];

  const AMENITIES = [
    { id: 'Swimming Pool', label: t("filtersModal.swimmingPool"), icon: Waves },
    { id: 'Gym', label: t("filtersModal.gym"), icon: Dumbbell },
    { id: 'Parking', label: t("filtersModal.parking"), icon: Car },
    { id: 'Air Conditioning', label: t("filtersModal.airConditioning"), icon: Wind },
    { id: 'High-speed Wifi', label: t("filtersModal.wifi"), icon: Wifi },
    { id: 'Patio / Terrace', label: t("filtersModal.terrace"), icon: Layout },
    { id: 'Garden', label: t("filtersModal.garden"), icon: TreePine },
    { id: 'Security', label: t("filtersModal.security"), icon: ShieldCheck },
  ];

  const handleValueChange = (values: string[]) => {
    setFilter('amenities', values);
  };

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {t("filtersModal.amenitiesTitle")}
      </Label>
      
      <ToggleGroup 
        type="multiple" 
        value={selectedAmenities}
        onValueChange={handleValueChange}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
      >
        {AMENITIES.map((amenity) => (
          <ToggleGroupItem
            key={amenity.id}
            value={amenity.id}
            className="flex h-14 items-center justify-start gap-3 rounded-xl border border-muted bg-white px-4 py-2 transition-all hover:bg-muted/30 data-[state=on]:border-[#006655] data-[state=on]:bg-emerald-50/50 cursor-pointer"
          >
            <amenity.icon className="h-5 w-5 text-muted-foreground group-data-[state=on]:text-[#006655]" />
            <span className="text-xs font-medium text-foreground">{amenity.label}</span>
            {selectedAmenities.includes(amenity.id) && (
              <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#006655]" />
            )}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
