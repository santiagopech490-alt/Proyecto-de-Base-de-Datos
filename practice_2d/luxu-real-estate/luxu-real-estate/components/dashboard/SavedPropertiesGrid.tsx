'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getAllProperties } from '@/lib/services/property-service';
import Link from 'next/link';

interface Property {
  id: string;
  slug?: string;
  title: string;
  city?: string;
  location?: string;
  price: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  baths?: number;
  sqft: number;
  images: string[];
}

interface SavedPropertiesGridProps {
  properties: Property[];
  isLoading?: boolean;
}

const SavedPropertiesGrid: React.FC<SavedPropertiesGridProps> = ({ properties: initialProps, isLoading }) => {
  const { t } = useLanguage();
  const [propsList, setPropsList] = useState<Property[]>(initialProps || []);

  useEffect(() => {
    async function loadSavedProperties() {
      if (typeof window === 'undefined') return;
      const favStr = localStorage.getItem('user_favorites');
      if (favStr) {
        try {
          const favSlugs: string[] = JSON.parse(favStr);
          if (favSlugs.length > 0) {
            const allProps = await getAllProperties();
            const matched = allProps.filter(p => favSlugs.includes(p.slug) || favSlugs.includes(p.id));
            if (matched.length > 0) {
              setPropsList(matched);
              return;
            }
          }
        } catch {}
      }
      setPropsList(initialProps || []);
    }
    loadSavedProperties();
  }, [initialProps]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
        {[1, 2, 3].map(i => <div key={i} className="h-64 bg-slate-200 rounded-2xl" />)}
      </div>
    );
  }

  if (!propsList || propsList.length === 0) {
    return <div className="text-center py-12 text-slate-500 font-medium">{t("profile.noSavedYet")}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {propsList.map((property) => (
        <Link key={property.id} href={`/properties/${property.slug || property.id}`} className="block group">
          <Card className="rounded-2xl overflow-hidden border-none shadow-sm hover:shadow-md transition-all bg-white cursor-pointer h-full flex flex-col">
            <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
              {property.images && property.images[0] && (
                <img 
                  src={property.images[0]} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              )}
              <Badge className="absolute top-3 right-3 bg-white/90 text-emerald-800 hover:bg-white font-bold backdrop-blur-sm">
                ${(property.price || 0).toLocaleString('en-US')}
              </Badge>
            </div>
            <CardContent className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-1 text-[#19322F] group-hover:text-[#006655] transition-colors truncate">
                {property.title}
              </h3>
              <p className="text-slate-500 text-xs mb-3">{property.city || property.location || 'Beverly Hills'}</p>
              <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                <span>{property.bedrooms || property.beds || 0} {t("properties.beds")}</span>
                <span>{property.bathrooms || property.baths || 0} {t("properties.baths")}</span>
                <span>{(property.sqft || 0).toLocaleString('en-US')} m²</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default SavedPropertiesGrid;
