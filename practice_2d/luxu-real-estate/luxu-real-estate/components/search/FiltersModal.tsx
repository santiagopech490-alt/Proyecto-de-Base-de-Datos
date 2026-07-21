'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { SlidersHorizontal, MapPin, X } from 'lucide-react';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { PriceRangeSlider } from './PriceRangeSlider';
import { NumericStepper } from './NumericStepper';
import { AmenitiesGrid } from './AmenitiesGrid';
import { PropertyTypeSelect } from './PropertyTypeSelect';
import { ShowHomesButton } from './ShowHomesButton';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';

export function FiltersModal() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [open, setOpen] = React.useState(false);
  const { filters, setFilter, clearFilters } = usePropertyFilters();

  const FiltersContent = () => (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Location
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="City, Zip or Neighborhood" 
            className="pl-10 h-12 bg-muted/30 border-none focus-visible:ring-emerald-600"
            value={filters.location || ''}
            onChange={(e) => setFilter('location', e.target.value)}
          />
        </div>
      </div>

      <Separator className="bg-emerald-50" />
      
      <PriceRangeSlider />

      <Separator className="bg-emerald-50" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
        <PropertyTypeSelect />
        <div className="space-y-2">
          <NumericStepper label="Bedrooms" filterKey="beds" />
          <NumericStepper label="Bathrooms" filterKey="baths" />
        </div>
      </div>

      <Separator className="bg-emerald-50" />

      <AmenitiesGrid />
    </div>
  );

  const TriggerButton = (
    <div className="inline-flex h-8 items-center justify-center rounded-lg border border-emerald-100 bg-background px-4 text-sm font-medium transition-all hover:bg-emerald-50 text-emerald-800 gap-2 cursor-pointer border-input shadow-sm hover:text-emerald-900">
      <SlidersHorizontal className="h-4 w-4" />
      Filters
    </div>
  );

  const ActionButtons = (
    <div className="flex flex-col gap-4 mt-6">
      <ShowHomesButton />
      <Button 
        variant="ghost" 
        className="text-muted-foreground hover:text-emerald-700 hover:bg-transparent"
        onClick={clearFilters}
      >
        Clear all filters
      </Button>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          {TriggerButton}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none shadow-2xl">
          <DialogHeader className="p-6 border-b bg-white">
            <DialogTitle className="text-xl font-bold text-emerald-950">Filters</DialogTitle>
          </DialogHeader>
          <div className="p-6 max-h-[70vh] overflow-y-auto bg-white">
            <FiltersContent />
          </div>
          <div className="p-6 border-t bg-emerald-50/10">
            {ActionButtons}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        {TriggerButton}
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] rounded-t-[2.5rem] p-0 border-none shadow-2xl overflow-hidden">
        <SheetHeader className="p-6 border-b flex flex-row items-center justify-between">
          <SheetTitle className="text-xl font-bold text-emerald-950">Filters</SheetTitle>
          <button 
            onClick={clearFilters}
            className="text-sm font-semibold text-emerald-600 underline"
          >
            Reset
          </button>
        </SheetHeader>
        <div className="p-6 h-full overflow-y-auto pb-32">
          <FiltersContent />
          {ActionButtons}
        </div>
      </SheetContent>
    </Sheet>
  );
}
