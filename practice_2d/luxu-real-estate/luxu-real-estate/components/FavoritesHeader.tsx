'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#19322F] tracking-tight mb-2">
          {language === 'es' ? 'Tus Propiedades Favoritas' : 'Your Favorites'}
        </h1>
        <p className="text-[#5C706D]">
          {language === 'es' 
            ? `Tienes ${count} ${count === 1 ? 'propiedad guardada' : 'propiedades guardadas'} esperándote.`
            : `You have ${count} saved ${count === 1 ? 'property' : 'properties'} waiting for you.`}
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="flex items-center space-x-2 bg-white px-4 py-2.5 rounded-xl text-sm font-semibold text-[#19322F] shadow-sm hover:shadow-md transition-all border border-slate-200 w-[220px] h-11 cursor-pointer">
            <SelectValue placeholder={language === 'es' ? 'Ordenar por' : 'Sort by'} />
          </SelectTrigger>
          <SelectContent className="bg-white rounded-xl shadow-xl border border-slate-100 p-1">
            <SelectItem value="date" className="cursor-pointer font-medium">
              {language === 'es' ? 'Ordenar por: Agregadas recientemente' : 'Sort by: Date Added'}
            </SelectItem>
            <SelectItem value="price-asc" className="cursor-pointer font-medium">
              {language === 'es' ? 'Precio: Menor a Mayor' : 'Price: Low to High'}
            </SelectItem>
            <SelectItem value="price-desc" className="cursor-pointer font-medium">
              {language === 'es' ? 'Precio: Mayor a Menor' : 'Price: High to Low'}
            </SelectItem>
          </SelectContent>
        </Select>

        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange('grid')}
            className={`p-1.5 rounded-lg h-9 w-9 cursor-pointer ${view === 'grid' ? 'text-[#006655] bg-emerald-50' : 'text-slate-400 hover:text-slate-700'}`}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange('list')}
            className={`p-1.5 rounded-lg h-9 w-9 cursor-pointer ${view === 'list' ? 'text-[#006655] bg-emerald-50' : 'text-slate-400 hover:text-slate-700'}`}
            aria-label="List view"
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
