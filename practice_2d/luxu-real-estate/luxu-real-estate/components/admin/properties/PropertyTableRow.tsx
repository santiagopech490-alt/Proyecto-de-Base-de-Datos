"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/property";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

interface PropertyTableRowProps {
  property: Property;
}

export function PropertyTableRow({ property }: PropertyTableRowProps) {
  const status = property.status?.toLowerCase() || 'active';
  
  const statusColors: Record<string, string> = {
    active: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
    pending: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    sold: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    'for sale': "bg-blue-100 text-blue-800 hover:bg-blue-200",
    'for rent': "bg-purple-100 text-purple-800 hover:bg-purple-200",
  };

  const statusColor = statusColors[status] || "bg-slate-100 text-slate-800";

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this property?")) {
      console.log("Deleting property:", property.id);
    }
  };

  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded bg-slate-200 overflow-hidden relative">
            {property.images?.[0] && (
              <img src={property.images[0]} alt="" className="object-cover w-full h-full" />
            )}
          </div>
          <div>
            <p className="font-bold">{property.title}</p>
            <p className="text-xs text-slate-500">{property.location}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>${property.price.toLocaleString('en-US')}</TableCell>
      <TableCell>
        <Badge className={statusColor}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <Link 
          href={`/admin/properties/edit/${property.id}`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-slate-100"
        >
          <Pencil className="w-4 h-4" />
        </Link>
        <Button variant="ghost" size="icon" className="text-red-500" onClick={handleDelete}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
