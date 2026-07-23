import { getPropertyBySlug } from '@/lib/services/property-service';
import { PropertyGallery } from '@/components/booking/PropertyGallery';
import { PropertyHeader, KeyFeaturesRow } from '@/components/booking/PropertyHeader';
import { AboutHome } from '@/components/booking/AboutHome';
import { AmenitiesGrid } from '@/components/booking/AmenitiesGrid';
import { AgentSidebar } from '@/components/booking/AgentSidebar';
import { LocationWidget } from '@/components/booking/LocationWidget';
import { MortgageCalculatorWidget } from '@/components/booking/MortgageCalculatorWidget';
import { ScheduleButton } from '@/components/booking/ScheduleButton';
import { createClient } from '@/lib/supabase/server';
import { LoginRequired } from '@/components/LoginRequired';
import { cookies } from 'next/headers';

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let user: any = null;
  let hasAuthCookie = false;

  try {
    const cookieStore = await cookies();
    hasAuthCookie = cookieStore.get('luxe_auth')?.value === 'true';
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user || null;
  } catch (err) {
    console.warn("Auth check in PropertyPage:", err);
  }

  if (!user && !hasAuthCookie) {
    return <LoginRequired title="Exclusive Property Access" />;
  }

  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  return (
    <div className="min-h-screen bg-soft-fog">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-1 space-y-8">
            {(property.images || []).length > 0 && <PropertyGallery images={property.images} />}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <PropertyHeader 
                title={property.title} 
                price={property.price} 
                location={property.location} 
              />
              <div className="mt-6">
                <ScheduleButton slug={slug} />
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <KeyFeaturesRow 
                beds={property.beds} 
                baths={property.baths} 
                sqft={property.sqft} 
                garage={property.garage} 
              />
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <AboutHome description={property.description} />
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <AmenitiesGrid amenities={property.amenities} />
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <AgentSidebar slug={slug} />
              <LocationWidget />
              <MortgageCalculatorWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
