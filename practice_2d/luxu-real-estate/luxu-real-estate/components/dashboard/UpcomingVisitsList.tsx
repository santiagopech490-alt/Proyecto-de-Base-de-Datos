'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Visit {
  id: string;
  booking_date_time: string;
  properties: {
    title: string;
    images: string[];
  };
  agent_name: string;
}

interface UpcomingVisitsListProps {
  visits: Visit[];
  isLoading?: boolean;
}

const UpcomingVisitsList: React.FC<UpcomingVisitsListProps> = ({ visits, isLoading }) => {
  const { t } = useLanguage();

  if (isLoading) {
    return <div className="space-y-4 animate-pulse">
      {[1, 2].map(i => <div key={i} className="h-24 bg-slate-200 rounded-2xl" />)}
    </div>;
  }

  if (!visits || visits.length === 0) {
    return <div className="text-center py-12 text-slate-500 font-medium">{t("profile.noVisitsYet")}</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  };

  return (
    <div className="space-y-4">
      {visits.map((visit) => (
        <Card key={visit.id} className="rounded-2xl border-none shadow-sm p-4">
          <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-0">
            <div className="w-full sm:w-20 h-32 sm:h-20 rounded-xl bg-slate-200 overflow-hidden shrink-0">
              {visit.properties?.images?.[0] && <img src={visit.properties.images[0]} alt={visit.properties.title} className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1">
              <div className="text-emerald-700 font-bold text-xs mb-1">
                {formatDate(visit.booking_date_time).toUpperCase()}
              </div>
              <h3 className="font-bold text-lg">{visit.properties?.title}</h3>
              <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-[10px]">AG</AvatarFallback>
                </Avatar>
                <span>Agente: {visit.agent_name}</span>
              </div>
            </div>
            <div className="flex w-full sm:w-auto gap-2 mt-2 sm:mt-0">
              <Button variant="outline" className="rounded-full flex-1 sm:flex-none">Reagendar</Button>
              <Button className="rounded-full bg-[#006655] hover:bg-[#005544] flex-1 sm:flex-none">Indicaciones</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UpcomingVisitsList;
