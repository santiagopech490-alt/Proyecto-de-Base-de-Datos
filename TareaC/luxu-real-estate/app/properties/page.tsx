import { getAllProperties } from '@/lib/services/property-service';
import { PropertyCard } from '@/components/property-card';
import { FiltersModal } from '@/components/search/FiltersModal';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Suspense } from 'react';

export default async function PropertiesListPage() {
  const properties = await getAllProperties();

  return (
    <div className="min-h-screen bg-soft-fog">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold text-[#19322F] tracking-tight">Available Properties</h1>
            <p className="text-muted-foreground">Discover premium real estate in the most exclusive locations.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Quick search..." 
                className="pl-10 bg-white border-emerald-50 focus-visible:ring-emerald-600 shadow-sm"
              />
            </div>
            <Suspense fallback={<div className="h-10 w-24 bg-muted animate-pulse rounded-md" />}>
              <FiltersModal />
            </Suspense>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              id={property.id}
              slug={property.slug}
              title={property.title}
              location={property.location}
              price={`$${property.price.toLocaleString()}`}
              beds={property.beds}
              baths={property.baths}
              area={`${property.sqft.toLocaleString()} sqft`}
              imageUrl={property.images[0] || 'https://placehold.co/800x600/19322F/white?text=LuxeEstate+Home'}
              status={property.status.toUpperCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
