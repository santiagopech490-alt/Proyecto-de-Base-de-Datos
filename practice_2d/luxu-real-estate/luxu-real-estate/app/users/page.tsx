'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function UsersRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/users');
  }, [router]);

  return null; // No se renderiza nada, solo se redirige
}