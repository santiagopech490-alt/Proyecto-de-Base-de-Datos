'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Building2, Layers } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FiltersModal } from '@/components/search/FiltersModal';
import { PropertyCard } from '@/components/property-card';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';
import { Property } from '@/types/property';

interface PropertiesCatalogProps {
  initialProperties: Property[];
}

export function PropertiesCatalog({ initialProperties }: PropertiesCatalogProps) {
  const { t, language } = useLanguage();
  const { filters, setFilter, clearFilters } = usePropertyFilters();
  const [searchQuery, setSearchQuery] = useState(filters.location || '');
  const [allProperties, setAllProperties] = useState<Property[]>(initialProperties);

  // Merge custom properties created in Admin Panel from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('luxe_custom_properties');
      if (saved) {
        try {
          const customProps: Property[] = JSON.parse(saved);
          const initialIds = new Set(initialProperties.map(p => p.id));
          const uniqueCustoms = customProps.filter(cp => !initialIds.has(cp.id));
          setAllProperties([...uniqueCustoms, ...initialProperties]);
          return;
        } catch {}
      }
    }
    setAllProperties(initialProperties);
  }, [initialProperties]);

  // Sync search query if changed in URL
  useEffect(() => {
    setSearchQuery(filters.location || '');
  }, [filters.location]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setFilter('location', searchQuery.trim());
  };

  // Dynamic category counts across the entire NoSQL dataset
  const counts = useMemo(() => {
    return {
      all: allProperties.length,
      houses: allProperties.filter(p => (p.title || '').toLowerCase().includes('casa')).length,
      apartments: allProperties.filter(p => (p.title || '').toLowerCase().includes('departamento')).length,
      villas: allProperties.filter(p => (p.title || '').toLowerCase().includes('villa')).length,
      penthouses: allProperties.filter(p => (p.title || '').toLowerCase().includes('penthouse')).length,
      rent: allProperties.filter(p => (p.status || '').toLowerCase().includes('rent') || p.price < 10000).length,
      sale: allProperties.filter(p => (p.status || '').toLowerCase().includes('sale') || (p.status || '').toLowerCase().includes('active') || p.price >= 10000).length,
    };
  }, [allProperties]);

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // 1. Text Search filter (title, location, description, address)
      const query = (filters.location || searchQuery).toLowerCase().trim();
      if (query) {
        const matchesTitle = (property.title || '').toLowerCase().includes(query);
        const matchesLocation = (property.location || '').toLowerCase().includes(query);
        const matchesDesc = (property.description || '').toLowerCase().includes(query);
        const matchesAddress = (property.address || '').toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesDesc && !matchesAddress) {
          return false;
        }
      }

      // 2. Price filter
      if (filters.minPrice && property.price < filters.minPrice) return false;
      if (filters.maxPrice && property.price > filters.maxPrice) return false;

      // 3. Property Type / Rent / Sale filter
      if (filters.type && filters.type !== 'all') {
        const propStatus = (property.status || '').toLowerCase();
        const propTitle = (property.title || '').toLowerCase();
        const requestedType = filters.type.toLowerCase();

        if (requestedType === 'rent' || requestedType === 'renta') {
          const isForRent = propStatus.includes('rent') || propTitle.includes('loft') || propTitle.includes('rent') || propTitle.includes('penthouse') || property.price < 10000;
          if (!isForRent) return false;
        } else if (requestedType === 'sale' || requestedType === 'venta') {
          const isForSale = propStatus.includes('sale') || propStatus.includes('active') || property.price >= 10000;
          if (!isForSale) return false;
        } else if (['house', 'casa', 'apartment', 'departamento', 'villa', 'condo', 'penthouse'].includes(requestedType)) {
          if (!propTitle.includes(requestedType) && !propStatus.includes(requestedType)) return false;
        }
      }

      // 4. Beds & Baths filter
      if (filters.beds && (property.beds || 0) < filters.beds) return false;
      if (filters.baths && (property.baths || 0) < filters.baths) return false;

      // 5. Amenities filter
      if (filters.amenities && filters.amenities.length > 0) {
        const propAmenities = (property.amenities || []).map(a => a.toLowerCase());
        const hasAllSelected = filters.amenities.every(req => 
          propAmenities.some(pa => pa.includes(req.toLowerCase()))
        );
        if (!hasAllSelected) return false;
      }

      return true;
    });
  }, [allProperties, filters, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-[#19322F] tracking-tight">
              {filters.type === 'rent' ? 'Propiedades en Renta' : t("properties.availableProperties")}
            </h1>
            <Badge className="bg-emerald-100 text-[#006655] font-bold text-xs px-3 py-1 rounded-full border-none shadow-xs">
              {filteredProperties.length} {language === 'es' ? 'disponibles' : 'available'}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            {filters.type === 'rent' 
              ? `Explora ${counts.rent} departamentos y residencias exclusivas en alquiler.` 
              : `Mostrando ${filteredProperties.length} de un total de ${counts.all} inmuebles registrados.`}
          </p>
        </div>
        
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={t("properties.quickSearch")} 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setFilter('location', e.target.value);
              }}
              className="pl-10 bg-white border-emerald-50 focus-visible:ring-emerald-600 shadow-sm"
            />
          </div>
          <FiltersModal />
        </form>
      </div>

      {/* Quick Category Counter Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
        <button
          onClick={() => { setFilter('type', 'all'); setSearchQuery(''); }}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            (!filters.type || filters.type === 'all') && !searchQuery
              ? 'bg-[#19322F] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <span>{language === 'es' ? 'Todas' : 'All'}</span>
          <span className="opacity-80">({counts.all})</span>
        </button>

        <button
          onClick={() => setFilter('type', 'casa')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            filters.type === 'casa'
              ? 'bg-[#006655] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <span>{language === 'es' ? 'Casas' : 'Houses'}</span>
          <span className="opacity-80">({counts.houses})</span>
        </button>

        <button
          onClick={() => setFilter('type', 'departamento')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            filters.type === 'departamento'
              ? 'bg-[#006655] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <span>{language === 'es' ? 'Departamentos' : 'Apartments'}</span>
          <span className="opacity-80">({counts.apartments})</span>
        </button>

        <button
          onClick={() => setFilter('type', 'villa')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            filters.type === 'villa'
              ? 'bg-[#006655] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <span>Villas</span>
          <span className="opacity-80">({counts.villas})</span>
        </button>

        <button
          onClick={() => setFilter('type', 'penthouse')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            filters.type === 'penthouse'
              ? 'bg-[#006655] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <span>Penthouses</span>
          <span className="opacity-80">({counts.penthouses})</span>
        </button>

        <button
          onClick={() => setFilter('type', 'rent')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            filters.type === 'rent'
              ? 'bg-[#006655] text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <span>{language === 'es' ? 'En Renta' : 'For Rent'}</span>
          <span className="opacity-80">({counts.rent})</span>
        </button>
      </div>

      {/* Grid or Empty State */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const validSlug = property.slug || property.id || `prop-${property.title.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <PropertyCard 
                key={property.id || validSlug} 
                id={property.id || validSlug}
                slug={validSlug}
                title={property.title}
                location={property.location || property.address || 'Beverly Hills, CA'}
                price={`$${(property.price || 0).toLocaleString('en-US')}${filters.type === 'rent' || (property.status || '').toLowerCase().includes('rent') ? '/mes' : ''}`}
                beds={property.beds || property.bedrooms || 0}
                baths={property.baths || property.bathrooms || 0}
                area={`${(property.sqft || 0).toLocaleString('en-US')} m²`}
                imageUrl={(property.images && property.images.length > 0) ? property.images[0] : 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'}
                status={filters.type === 'rent' ? 'FOR RENT' : (property.status || 'active').toUpperCase()}
              />
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-slate-100 max-w-2xl mx-auto my-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#006655] flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[#19322F] mb-2">No se encontraron propiedades</h3>
          <p className="text-[#5C706D] mb-6">
            No encontramos inmuebles que coincidan con &quot;{searchQuery || filters.location || 'tus filtros'}&quot;. Prueba buscando con otro término como &quot;Beverly Hills&quot;, &quot;Penthouse&quot; o &quot;Villa&quot;.
          </p>
          <Button 
            onClick={() => {
              setSearchQuery('');
              clearFilters();
            }}
            className="bg-[#006655] hover:bg-[#005544] text-white px-6 py-2.5 rounded-xl cursor-pointer font-bold"
          >
            Ver todas las propiedades ({counts.all})
          </Button>
        </div>
      )}
    </div>
  );
}
