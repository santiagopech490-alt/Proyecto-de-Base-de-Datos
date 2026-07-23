'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPropertyRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/admin/properties/add');
  }, [router]);

  return <div className="min-h-screen pt-28 px-4 text-center text-slate-400">Redirigiendo a formulario...</div>;
}
