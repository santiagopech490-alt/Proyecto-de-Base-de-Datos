import { getAllProperties } from '@/lib/services/property-service';
import { PropertyCard } from '@/components/property-card';
import { PropertiesHeader } from '@/components/properties/PropertiesHeader';
import { createClient } from '@/lib/supabase/server';
import { LoginRequired } from '@/components/LoginRequired';
import { cookies } from 'next/headers';

export default async function PropertiesListPage() {
  const cookieStore = await cookies();
  const hasAuthCookie = cookieStore.get('luxe_auth')?.value === 'true';
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user && !hasAuthCookie) return <LoginRequired title="Luxury Property Directory" />;

  const properties = await getAllProperties();

  return (
    <div className="min-h-screen bg-soft-fog">
      <div className="container mx-auto py-12 px-4">
        <PropertiesHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              id={property.id}
              slug={property.slug}
              title={property.title}
              location={property.location}
              price={`$${(property.price || 0).toLocaleString()}`}
              beds={property.beds}
              baths={property.baths}
              area={`${(property.sqft || 0).toLocaleString()} m²`}
              imageUrl={(property.images && property.images.length > 0) ? property.images[0] : 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'}
              status={(property.status || 'active').toUpperCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
