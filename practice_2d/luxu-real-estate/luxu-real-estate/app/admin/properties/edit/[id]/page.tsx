import { getPropertyBySlug } from '@/lib/services/property-service';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { LoginRequired } from '@/components/LoginRequired';

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return <LoginRequired title="Edit Property" />;

  const { id } = await params;

  // En el futuro, buscaríamos por ID real en Supabase.
  // Por ahora, simulamos la búsqueda.
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/admin/properties" className="text-sm text-slate-500 hover:text-emerald-800 underline">
          ← Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-[#19322F] mt-2">Edit Property: {id}</h1>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <p className="text-slate-600">Formulario de edición para la propiedad {id} (En desarrollo)</p>
      </div>
    </div>
  );
}
