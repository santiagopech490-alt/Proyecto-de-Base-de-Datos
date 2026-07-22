import { getPropertiesByOwner, calculateKPIs } from '@/lib/services/property-service';
import { PropertyKPIs } from '@/components/admin/properties/PropertyKPIs';
import { PropertyTable } from '@/components/admin/properties/PropertyTable';
import { AdminPropertiesHeader } from '@/components/admin/properties/AdminPropertiesHeader';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server';
import { LoginRequired } from '@/components/LoginRequired';

export default async function AdminPropertiesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return <LoginRequired title="Property Management Dashboard" />;

  const properties = await getPropertiesByOwner(user.id);
  const kpis = calculateKPIs(properties);

  return (
    <div className="container mx-auto py-12 px-4">
      <AdminPropertiesHeader />
      <PropertyKPIs total={kpis.total} active={kpis.active} pending={kpis.pending} />
      <PropertyTable properties={properties} />
    </div>
  );
}
