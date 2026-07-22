'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function AdminPropertiesHeader() {
  const { t } = useLanguage();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-[#19322F]">{t("admin.myProperties")}</h1>
      <Button className="bg-[#006655] hover:bg-[#005544] cursor-pointer" asChild>
        <Link href="/admin/properties/add">
          <Plus className="w-4 h-4 mr-2" />
          {t("admin.addNewProperty")}
        </Link>
      </Button>
    </div>
  );
}
