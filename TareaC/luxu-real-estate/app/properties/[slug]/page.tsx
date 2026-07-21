import { getPropertyBySlug } from '@/lib/services/property-service';
import { notFound } from 'next/navigation';
import { PropertyGallery } from '@/components/booking/PropertyGallery';
import { PropertyHeader, KeyFeaturesRow } from '@/components/booking/PropertyHeader';
import { AboutHome } from '@/components/booking/AboutHome';
import { AmenitiesGrid } from '@/components/booking/AmenitiesGrid';
import { AgentSidebar } from '@/components/booking/AgentSidebar';
import { LocationWidget } from '@/components/booking/LocationWidget';
import { MortgageCalculatorWidget } from '@/components/booking/MortgageCalculatorWidget';
import Link from 'next/link'; // Import Link for navigation

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-soft-fog">
      <div className="container mx-auto py-8 px-4">
        {/* Updated grid layout for 1-column mobile and 2-column desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-1 space-y-8"> {/* Changed from md:col-span-2 to lg:col-span-1 */}
            {property.images.length > 0 && <PropertyGallery images={property.images} />}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <PropertyHeader 
                title={property.title} 
                price={property.price} 
                location={property.location} 
              />
              {/* Add the "Schedule Viewing" button here */}
              <div className="mt-6">
                <Link 
                  href={`/properties/${slug}/schedule`} 
                  className="inline-block px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                  Schedule Viewing
                </Link>
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
          <div className="lg:col-span-1"> {/* Changed from md:col-span-1 to lg:col-span-1 */}
            <div className="sticky top-24 space-y-6">
              <AgentSidebar />
              <LocationWidget />
              <MortgageCalculatorWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
