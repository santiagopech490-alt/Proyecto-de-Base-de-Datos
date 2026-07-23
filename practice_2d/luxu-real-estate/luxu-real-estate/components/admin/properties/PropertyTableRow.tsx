"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/property";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface PropertyTableRowProps {
  property: Property;
  onDelete?: (id: string) => void;
}

export function PropertyTableRow({ property, onDelete }: PropertyTableRowProps) {
  const { t, language } = useLanguage();
  const supabase = createClient();
  const status = property.status?.toLowerCase() || 'active';
  
  const statusColors: Record<string, string> = {
    active: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
    pending: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    sold: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    'for sale': "bg-blue-100 text-blue-800 hover:bg-blue-200",
    'for rent': "bg-purple-100 text-purple-800 hover:bg-purple-200",
  };

  const statusLabels: Record<string, string> = {
    active: t("admin.activeBadge"),
    'for sale': t("admin.forSaleBadge"),
    'for rent': t("admin.forRentBadge"),
  };

  const statusColor = statusColors[status] || "bg-slate-100 text-slate-800";
  const displayStatus = statusLabels[status] || (status.charAt(0).toUpperCase() + status.slice(1));

  const handleDelete = async () => {
    const confirmText = language === 'es' 
      ? `¿Estás seguro de que deseas eliminar la propiedad "${property.title}"?`
      : `Are you sure you want to delete property "${property.title}"?`;

    if (!confirm(confirmText)) return;

    const propKey = property.id || property.slug;

    // 1. Remove from localStorage custom properties
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('luxe_custom_properties');
      if (saved) {
        try {
          const list: Property[] = JSON.parse(saved);
          const filtered = list.filter(p => p.id !== propKey && p.slug !== propKey);
          localStorage.setItem('luxe_custom_properties', JSON.stringify(filtered));
        } catch {}
      }

      // Add to deleted properties list so mock properties also stay deleted
      const deletedStr = localStorage.getItem('luxe_deleted_properties');
      const deletedList = deletedStr ? JSON.parse(deletedStr) : [];
      if (!deletedList.includes(propKey)) {
        deletedList.push(propKey);
        localStorage.setItem('luxe_deleted_properties', JSON.stringify(deletedList));
      }
    }

    // 2. Remove from Supabase DB
    try {
      await supabase
        .from('properties')
        .delete()
        .or(`id.eq.${propKey},slug.eq.${propKey}`);
    } catch {}

    toast.success(language === 'es' ? 'Propiedad eliminada correctamente' : 'Property deleted successfully');

    if (onDelete) {
      onDelete(propKey);
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
      <TableCell>${(property.price || 0).toLocaleString('en-US')}</TableCell>
      <TableCell>
        <Badge className={statusColor}>
          {displayStatus}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <Link 
          href={`/admin/properties/edit/${property.id || property.slug}`}
          className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-slate-100 mr-1"
          title="Editar Propiedad"
        >
          <Pencil className="w-4 h-4 text-slate-600" />
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer" 
          onClick={handleDelete}
          title="Eliminar Propiedad"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
