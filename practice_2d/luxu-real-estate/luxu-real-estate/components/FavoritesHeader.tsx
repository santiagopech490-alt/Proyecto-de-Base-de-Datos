'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { LayoutGrid, List } from 'lucide-react';

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
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 tracking-tight mb-2">
          Your Favorites
        </h1>
        <p className="text-emerald-900/70">
          You have {count} saved {count === 1 ? 'property' : 'properties'} waiting for you.
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="flex items-center space-x-2 bg-white px-4 py-2.5 rounded-lg text-sm font-medium text-emerald-900 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-emerald-600/30 w-[180px] h-10">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Sort by: Date Added</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex bg-white rounded-lg p-1 shadow-sm border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange('grid')}
            className={`p-1.5 rounded h-8 w-8 ${view === 'grid' ? 'text-emerald-700 bg-emerald-50' : 'text-emerald-900/40 hover:text-emerald-900/70'}`}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange('list')}
            className={`p-1.5 rounded h-8 w-8 ${view === 'list' ? 'text-emerald-700 bg-emerald-50' : 'text-emerald-900/40 hover:text-emerald-900/70'}`}
            aria-label="List view"
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
