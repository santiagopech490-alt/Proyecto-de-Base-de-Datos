"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePropertyFilters } from "@/lib/hooks/usePropertyFilters";
import { FiltersModal } from "./search/FiltersModal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function HeroSection() {
  const { filters, setFilter } = usePropertyFilters();
  const [localSearch, setLocalSearch] = useState(filters.location || "");
  const { t, language } = useLanguage();
  const router = useRouter();

  const handleSearch = (overrideType?: string) => {
    const params = new URLSearchParams();
    const query = localSearch.trim();
    const typeToUse = overrideType !== undefined ? overrideType : filters.type;

    if (query) params.set('location', query);
    if (typeToUse && typeToUse !== 'all') params.set('type', typeToUse);

    setFilter('location', query);
    if (overrideType !== undefined) setFilter('type', typeToUse || '');

    router.push(`/properties?${params.toString()}`);
  };

  const handleCategorySelect = (catId: string) => {
    const targetType = catId === 'all' ? '' : catId;
    setFilter('type', targetType);
    handleSearch(targetType);
  };

  const categories = [
    { id: "all", label: t("hero.allTypes") },
    { id: "house", label: language === 'es' ? 'Casas' : 'House' },
    { id: "apartment", label: language === 'es' ? 'Departamentos' : 'Apartment' },
    { id: "villa", label: language === 'es' ? 'Villas' : 'Villa' },
    { id: "penthouse", label: language === 'es' ? 'Penthouses' : 'Penthouse' },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Catchphrase */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#19322F] leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-[#5C706D] text-lg max-w-xl mx-auto">
            {t("hero.subtitle")}
          </p>

          {/* Search Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }} 
            className="relative group max-w-2xl mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-[#5C706D] group-focus-within:text-[#006655] transition-colors" />
            </div>
            <Input
              className="block w-full pl-12 pr-28 py-7 rounded-xl border-none bg-white text-[#19322F] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] placeholder-[#5C706D]/60 focus-visible:ring-2 focus-visible:ring-[#006655] transition-all text-lg"
              placeholder={t("hero.searchPlaceholder")}
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute inset-y-2 right-2 px-6 h-auto bg-[#006655] hover:bg-[#005544] text-white font-medium rounded-lg transition-colors shadow-lg shadow-[#006655]/20 cursor-pointer"
            >
              {t("hero.searchBtn")}
            </Button>
          </form>

          {/* Quick Filters */}
          <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 px-4 -mx-4 no-scrollbar">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filters.type === cat.id ? "default" : "outline"}
                onClick={() => handleCategorySelect(cat.id)}
                className={`rounded-full px-6 py-2.5 h-auto text-sm font-medium transition-all cursor-pointer ${
                  (filters.type === cat.id || (cat.id === 'all' && !filters.type))
                    ? "bg-[#19322F] text-white shadow-lg shadow-[#19322F]/10 hover:bg-[#19322F]/90"
                    : "bg-white border-gray-100 text-[#5C706D] hover:text-[#19322F] hover:border-[#006655]/50 hover:bg-[#006655]/5"
                }`}
              >
                {cat.label}
              </Button>
            ))}
            <div className="w-px h-6 bg-[#19322F]/10 mx-2 hidden sm:block"></div>
            <FiltersModal />
          </div>
        </div>
      </div>
    </section>
  );
}
