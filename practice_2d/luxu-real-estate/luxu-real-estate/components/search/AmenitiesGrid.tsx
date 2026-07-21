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

const AMENITIES = [
  { id: 'Swimming Pool', icon: Waves },
  { id: 'Gym', icon: Dumbbell },
  { id: 'Parking', icon: Car },
  { id: 'Air Conditioning', icon: Wind },
  { id: 'High-speed Wifi', icon: Wifi },
  { id: 'Patio / Terrace', icon: Layout },
  { id: 'Garden', icon: TreePine },
  { id: 'Security', icon: ShieldCheck },
];

export function AmenitiesGrid() {
  const { filters, setFilter } = usePropertyFilters();
  const selectedAmenities = filters.amenities || [];

  const handleValueChange = (values: string[]) => {
    setFilter('amenities', values);
  };

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Amenities & Features
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
            className="flex h-14 items-center justify-start gap-3 rounded-xl border border-muted bg-white px-4 py-2 transition-all hover:bg-muted/30 data-[state=on]:border-emerald-600 data-[state=on]:bg-emerald-50/50"
          >
            <amenity.icon className="h-5 w-5 text-muted-foreground group-data-[state=on]:text-emerald-700" />
            <span className="text-xs font-medium text-foreground">{amenity.id}</span>
            {selectedAmenities.includes(amenity.id) && (
              <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
            )}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
