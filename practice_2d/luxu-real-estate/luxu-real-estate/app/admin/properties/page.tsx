import { getPropertiesByOwner, calculateKPIs } from '@/lib/services/property-service';
import { PropertyKPIs } from '@/components/admin/properties/PropertyKPIs';
import { PropertyTable } from '@/components/admin/properties/PropertyTable';
import { AdminPropertiesHeader } from '@/components/admin/properties/AdminPropertiesHeader';
import { createClient } from '@/lib/supabase/server';
import { LoginRequired } from '@/components/LoginRequired';
import { cookies } from 'next/headers';

export default async function AdminPropertiesPage() {
  let user: any = null;
  let hasAuthCookie = false;

  try {
    const cookieStore = await cookies();
    hasAuthCookie = cookieStore.get('luxe_auth')?.value === 'true';
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user || null;
  } catch (err) {
    console.warn("Auth check in AdminPropertiesPage:", err);
  }

  if (!user && !hasAuthCookie) {
    return <LoginRequired title="Property Management Dashboard" />;
  }

  const userId = user?.id || '00000000-0000-0000-0000-000000000001';
  const properties = await getPropertiesByOwner(userId);
  const kpis = calculateKPIs(properties);

  return (
    <div className="container mx-auto py-12 px-4">
      <AdminPropertiesHeader />
      <PropertyKPIs total={kpis.total} active={kpis.active} pending={kpis.pending} />
      <PropertyTable properties={properties} />
    </div>
  );
}
