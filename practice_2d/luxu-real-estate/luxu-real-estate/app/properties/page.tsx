import { getAllProperties } from '@/lib/services/property-service';
import { PropertiesCatalog } from '@/components/properties/PropertiesCatalog';
import { createClient } from '@/lib/supabase/server';
import { LoginRequired } from '@/components/LoginRequired';
import { cookies } from 'next/headers';

export default async function PropertiesListPage() {
  let user: any = null;
  let hasAuthCookie = false;

  try {
    const cookieStore = await cookies();
    hasAuthCookie = cookieStore.get('luxe_auth')?.value === 'true';
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user || null;
  } catch (err) {
    console.warn("Auth check in PropertiesListPage:", err);
  }

  if (!user && !hasAuthCookie) return <LoginRequired title="Luxury Property Directory" />;

  const properties = await getAllProperties();

  return (
    <div className="min-h-screen bg-soft-fog">
      <div className="container mx-auto py-12 px-4">
        <PropertiesCatalog initialProperties={properties} />
      </div>
    </div>
  );
}
