'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ScheduleButton({ slug }: { slug: string }) {
  const { t } = useLanguage();

  return (
    <Link 
      href={`/properties/${slug}/schedule`} 
      className="inline-block px-6 py-3 bg-[#006655] hover:bg-[#005544] text-white font-semibold rounded-xl shadow-md transition duration-150 ease-in-out cursor-pointer"
    >
      {t("details.scheduleViewing")}
    </Link>
  );
}
