'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FiltersModal } from '@/components/search/FiltersModal';

export function PropertiesHeader() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-[#19322F] tracking-tight">{t("properties.availableProperties")}</h1>
        <p className="text-muted-foreground">{t("properties.availableSubtitle")}</p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder={t("properties.quickSearch")} 
            className="pl-10 bg-white border-emerald-50 focus-visible:ring-emerald-600 shadow-sm"
          />
        </div>
        <FiltersModal />
      </div>
    </div>
  );
}
