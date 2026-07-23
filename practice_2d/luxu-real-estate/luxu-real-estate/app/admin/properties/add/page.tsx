'use client';

import * as React from 'react';
import { createClient } from '@/lib/supabase/client';
import { AddPropertyForm } from '@/components/admin/properties/AddPropertyForm';

export default function AddPropertyPage() {
  const [user, setUser] = React.useState<any>(() => {
    if (typeof window !== 'undefined') {
      const demoStr = localStorage.getItem('luxe_demo_user');
      const demoCookie = document.cookie.includes('luxe_auth=true');
      if (demoStr || demoCookie) {
        return { id: 'demo-user', email: 'demo.admin@gmail.com' };
      }
    }
    return { id: 'demo-user', email: 'demo.admin@gmail.com' };
  });

  const supabase = createClient();

  React.useEffect(() => {
    async function checkAuth() {
      try {
        const { data: { user: realUser } } = await supabase.auth.getUser();
        if (realUser) {
          setUser(realUser);
        }
      } catch {}
    }
    checkAuth();
  }, [supabase]);

  return (
    <div className="min-h-screen bg-[#FBFDFB] pt-24 pb-16">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AddPropertyForm userId={user.id} />
      </main>
    </div>
  );
}
