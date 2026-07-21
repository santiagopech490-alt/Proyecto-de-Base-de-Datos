"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { usePropertyFilters } from "@/lib/hooks/usePropertyFilters";
import { FiltersModal } from "./search/FiltersModal";

const categories = [
  { id: "all", label: "All" },
  { id: "house", label: "House" },
  { id: "apartment", label: "Apartment" },
  { id: "villa", label: "Villa" },
  { id: "penthouse", label: "Penthouse" },
];

export function HeroSection() {
  const { filters, setFilter } = usePropertyFilters();
  const [localSearch, setLocalSearch] = useState(filters.location || "");

  const handleSearch = () => {
    setFilter('location', localSearch);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Catchphrase */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#19322F] leading-tight">
            Find your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">sanctuary</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#006655]/20 -rotate-1 z-0"></span>
            </span>
            .
          </h1>

          {/* Search Bar */}
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-[#5C706D] group-focus-within:text-[#006655] transition-colors" />
            </div>
            <Input
              className="block w-full pl-12 pr-4 py-7 rounded-xl border-none bg-white text-[#19322F] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] placeholder-[#5C706D]/60 focus-visible:ring-2 focus-visible:ring-[#006655] transition-all text-lg"
              placeholder="Search by city, neighborhood, or address..."
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button 
              onClick={handleSearch}
              className="absolute inset-y-2 right-2 px-6 h-auto bg-[#006655] hover:bg-[#006655]/90 text-white font-medium rounded-lg transition-colors shadow-lg shadow-[#006655]/20"
            >
              Search
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 px-4 -mx-4 no-scrollbar">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filters.type === cat.id ? "default" : "outline"}
                onClick={() => setFilter('type', cat.id === 'all' ? '' : cat.id)}
                className={`rounded-full px-6 py-2 h-auto text-sm font-medium transition-all ${
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
