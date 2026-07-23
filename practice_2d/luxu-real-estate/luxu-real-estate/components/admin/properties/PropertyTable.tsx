'use client';

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Property } from "@/types/property";
import { PropertyTableRow } from "./PropertyTableRow";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface PropertyTableProps {
  properties: Property[];
}

export function PropertyTable({ properties }: PropertyTableProps) {
  const { t } = useLanguage();
  const [list, setList] = useState<Property[]>(properties);

  useEffect(() => {
    let deletedKeys: string[] = [];
    if (typeof window !== 'undefined') {
      const deletedStr = localStorage.getItem('luxe_deleted_properties');
      if (deletedStr) {
        try { deletedKeys = JSON.parse(deletedStr); } catch {}
      }
    }

    const saved = typeof window !== 'undefined' ? localStorage.getItem('luxe_custom_properties') : null;
    let customProps: Property[] = [];
    if (saved) {
      try {
        customProps = JSON.parse(saved);
      } catch {}
    }

    const propIds = new Set(properties.map(p => p.id));
    const uniqueCustoms = customProps.filter(cp => !propIds.has(cp.id));
    const combined = [...uniqueCustoms, ...properties];

    const filtered = combined.filter(p => !deletedKeys.includes(p.id) && !deletedKeys.includes(p.slug));
    setList(filtered);
  }, [properties]);

  const handleDeleteItem = (targetKey: string) => {
    setList(prev => prev.filter(item => item.id !== targetKey && item.slug !== targetKey));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>{t("admin.propertyDetails")}</TableHead>
            <TableHead>{t("admin.price")}</TableHead>
            <TableHead>{t("admin.status")}</TableHead>
            <TableHead className="text-right">{t("admin.actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((property, idx) => (
            <PropertyTableRow 
              key={property.id || property.slug || idx} 
              property={property} 
              onDelete={handleDeleteItem}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
