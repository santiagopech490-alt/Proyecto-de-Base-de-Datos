import React from 'react';
import { EditPropertyForm } from '@/components/admin/properties/EditPropertyForm';

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#FBFDFB] pt-24 pb-16">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <EditPropertyForm propertyId={id} />
      </main>
    </div>
  );
}
