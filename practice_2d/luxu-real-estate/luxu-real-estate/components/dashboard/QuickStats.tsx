'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface QuickStatsProps {
  stats: {
    saved: number;
    visits: number;
    sold: number;
  };
}

const QuickStats: React.FC<QuickStatsProps> = ({ stats: initialStats }) => {
  const { t } = useLanguage();
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const favStr = localStorage.getItem('user_favorites');
    const favCount = favStr ? (JSON.parse(favStr) || []).length : initialStats.saved;

    const visitStr = localStorage.getItem('luxe_user_appointments');
    const visitCount = visitStr ? (JSON.parse(visitStr) || []).length : initialStats.visits;

    setStats({
      saved: Math.max(initialStats.saved, favCount),
      visits: Math.max(initialStats.visits, visitCount),
      sold: initialStats.sold || 5,
    });
  }, [initialStats]);

  const formatNumber = (num: number) => num < 10 ? `0${num}` : num.toString();

  const statItems = [
    { label: t("profile.saved"), value: formatNumber(stats.saved) },
    { label: t("profile.visits"), value: formatNumber(stats.visits) },
    { label: t("profile.sold"), value: stats.sold.toString() },
  ];

  return (
    <Card className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-10 w-full lg:w-auto bg-white/95 backdrop-blur-sm border-none shadow-xl rounded-2xl overflow-hidden mt-4 lg:mt-0">
      <CardContent className="p-0 flex w-full">
        {statItems.map((item, index) => (
          <div 
            key={index}
            className={`flex-1 flex flex-col items-center justify-center p-4 sm:p-6 ${
              index < statItems.length - 1 ? 'border-r border-slate-100' : ''
            }`}
          >
            <span className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
              {item.value}
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#006655] tracking-widest uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickStats;
