'use client';

import * as React from 'react';
import { createClient } from '@/lib/supabase/client';
import { LoginRequired } from '@/components/LoginRequired';
import { AddPropertyForm } from '@/components/admin/properties/AddPropertyForm';

export default function AddPropertyPage() {
  const [user, setUser] = React.useState<any>(null);
  const [checkingAuth, setCheckingAuth] = React.useState(true);
  const supabase = createClient();

  React.useEffect(() => {
    async function checkAuth() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          setCheckingAuth(false);
          return;
        }
      } catch {}

      const demoStr = typeof window !== 'undefined' ? localStorage.getItem('luxe_demo_user') : null;
      const demoCookie = typeof document !== 'undefined' && document.cookie.includes('luxe_auth=true');

      if (demoStr || demoCookie) {
        setUser({ id: 'demo-user', email: 'demo.admin@gmail.com' });
      } else {
        setUser(null);
      }
      setCheckingAuth(false);
    }
    checkAuth();
  }, [supabase]);

  if (checkingAuth) return <div className="min-h-screen flex items-center justify-center text-slate-400">Cargando formulario...</div>;
  if (!user) return <LoginRequired title="Publicar Nueva Propiedad" />;

  return (
    <div className="min-h-screen bg-[#FBFDFB] pt-24 pb-16">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AddPropertyForm userId={user.id} />
      </main>
    </div>
  );
}
