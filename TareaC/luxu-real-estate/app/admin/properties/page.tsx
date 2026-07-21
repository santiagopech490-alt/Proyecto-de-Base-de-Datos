import { getPropertiesByOwner, calculateKPIs } from '@/lib/services/property-service';
import { PropertyKPIs } from '@/components/admin/properties/PropertyKPIs';
import { PropertyTable } from '@/components/admin/properties/PropertyTable';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default async function AdminPropertiesPage() {
  const ownerId = 'user123';
  const properties = await getPropertiesByOwner(ownerId);
  const kpis = calculateKPIs(properties);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#19322F]">My Properties</h1>
        <Button className="bg-[#006655] hover:bg-[#005544]">
          <Plus className="w-4 h-4 mr-2" />
          <Link href="/admin/properties/add">Add New Property</Link>
        </Button>
      </div>
      
      <PropertyKPIs total={kpis.total} active={kpis.active} pending={kpis.pending} />
      
      <PropertyTable properties={properties} />

      <div className="mt-8 flex justify-center gap-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">1</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  );
}
