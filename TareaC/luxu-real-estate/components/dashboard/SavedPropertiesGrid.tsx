import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Property {
  id: string;
  title: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
}

interface SavedPropertiesGridProps {
  properties: Property[];
  isLoading?: boolean;
}

const SavedPropertiesGrid: React.FC<SavedPropertiesGridProps> = ({ properties, isLoading }) => {
  if (isLoading) {
    return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
      {[1, 2, 3].map(i => <div key={i} className="h-64 bg-slate-200 rounded-2xl" />)}
    </div>;
  }

  if (properties.length === 0) {
    return <div className="text-center py-12 text-slate-500">No saved properties yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="rounded-2xl overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-48 w-full bg-slate-200">
            {property.images[0] && <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />}
            <Badge className="absolute top-3 right-3 bg-white/90 text-emerald-800 hover:bg-white">
              ${property.price.toLocaleString()}
            </Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-1">{property.title}</h3>
            <p className="text-slate-500 text-sm mb-3">{property.city}</p>
            <div className="flex gap-4 text-xs text-slate-600 font-medium">
              <span>{property.bedrooms} Beds</span>
              <span>{property.bathrooms} Baths</span>
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SavedPropertiesGrid;
