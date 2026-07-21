'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface FavoritesHeaderProps {
  count: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  view: 'grid' | 'list';
  onViewChange: (value: 'grid' | 'list') => void;
}

export default function FavoritesHeader({
  count,
  sortBy,
  onSortChange,
  view,
  onViewChange,
}: FavoritesHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-nordic tracking-tight mb-2">
          Your Favorites
        </h1>
        <p className="text-nordic/70">
          You have {count} saved {count === 1 ? 'property' : 'properties'} waiting for you.
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="flex items-center space-x-2 bg-white px-4 py-2.5 rounded-lg text-sm font-medium text-nordic shadow-sm hover:shadow-md transition-all border border-transparent hover:border-mosque/30 w-[180px] h-10">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Sort by: Date Added</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex bg-white rounded-lg p-1 shadow-sm">
          <ToggleGroup
            type="single"
            value={view}
            onValueChange={(val) => val && onViewChange(val as 'grid' | 'list')}
            className="gap-0"
          >
            <ToggleGroupItem
              value="grid"
              aria-label="Grid view"
              className="p-1.5 rounded data-[state=on]:text-mosque data-[state=on]:bg-hintgreen data-[state=off]:text-nordic/40 data-[state=off]:hover:text-nordic/70 h-8 w-8"
            >
              <span className="material-icons text-xl">grid_view</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="list"
              aria-label="List view"
              className="p-1.5 rounded data-[state=on]:text-mosque data-[state=on]:bg-hintgreen data-[state=off]:text-nordic/40 data-[state=off]:hover:text-nordic/70 h-8 w-8"
            >
              <span className="material-icons text-xl">view_list</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}
