'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function EmptyFavoriteCard() {
  const { language } = useLanguage();

  return (
    <div className="group bg-emerald-50/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border-2 border-dashed border-[#006655]/30 hover:border-[#006655] flex flex-col h-full items-center justify-center min-h-[380px] text-center p-6 bg-white">
      <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-[#006655] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Plus className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-[#19322F] mb-2">
        {language === 'es' ? 'Explora Más Inmuebles' : 'Discover More'}
      </h3>
      <p className="text-[#5C706D] text-sm mb-6 max-w-[220px]">
        {language === 'es' 
          ? 'Encuentra residencias de lujo que coincidan con tu estilo de vida.' 
          : 'Find more properties that match your lifestyle.'}
      </p>
      <Link href="/properties">
        <Button className="px-6 py-2.5 rounded-xl bg-[#006655] hover:bg-[#005544] text-white font-semibold text-sm shadow-md shadow-[#006655]/20 hover:shadow-lg transition-all border-none cursor-pointer">
          {language === 'es' ? 'Ver Catálogo' : 'Browse Listings'}
        </Button>
      </Link>
    </div>
  );
}
