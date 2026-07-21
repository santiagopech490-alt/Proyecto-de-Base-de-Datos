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
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setCheckingAuth(false);
    }
    checkAuth();
  }, [supabase]);

  if (checkingAuth) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!user) return <LoginRequired title="Add New Property" />;

  return (
    <div className="min-h-screen bg-soft-fog/30">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <AddPropertyForm userId={user.id} />
      </main>
    </div>
  );
}
