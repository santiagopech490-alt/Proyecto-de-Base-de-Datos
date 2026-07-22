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
    const saved = localStorage.getItem('luxe_custom_properties');
    if (saved) {
      try {
        const customProps: Property[] = JSON.parse(saved);
        setList([...customProps, ...properties]);
      } catch {}
    } else {
      setList(properties);
    }
  }, [properties]);

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
            <PropertyTableRow key={property.id || idx} property={property} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
