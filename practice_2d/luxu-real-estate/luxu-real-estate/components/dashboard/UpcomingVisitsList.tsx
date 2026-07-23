'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Visit {
  id: string;
  booking_date_time: string;
  notes?: string;
  properties?: {
    title: string;
    images: string[];
    location?: string;
  };
  agent_name: string;
}

interface UpcomingVisitsListProps {
  visits: Visit[];
  isLoading?: boolean;
}

const UpcomingVisitsList: React.FC<UpcomingVisitsListProps> = ({ visits: initialVisits, isLoading }) => {
  const { t } = useLanguage();
  const [visitsList, setVisitsList] = useState<Visit[]>(initialVisits || []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('luxe_user_appointments');
    if (saved) {
      try {
        const localVisits = JSON.parse(saved);
        if (localVisits && localVisits.length > 0) {
          const formatted: Visit[] = localVisits.map((v: any) => ({
            id: v.id || Math.random().toString(),
            booking_date_time: v.booking_date_time || new Date().toISOString(),
            notes: v.notes,
            properties: {
              title: v.notes ? `Visita: ${v.notes.slice(0, 30)}...` : 'Visita Privada Guiada',
              images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'],
              location: 'Beverly Hills, CA'
            },
            agent_name: 'Sarah Jenkins'
          }));
          setVisitsList([...formatted, ...(initialVisits || [])]);
          return;
        }
      } catch {}
    }
    setVisitsList(initialVisits || []);
  }, [initialVisits]);

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[1, 2].map(i => <div key={i} className="h-24 bg-slate-200 rounded-2xl" />)}
      </div>
    );
  }

  if (!visitsList || visitsList.length === 0) {
    return <div className="text-center py-12 text-slate-500 font-medium">{t("profile.noVisitsYet")}</div>;
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="space-y-4">
      {visitsList.map((visit) => (
        <Card key={visit.id} className="rounded-2xl border-none shadow-sm p-4 bg-white">
          <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-0">
            <div className="w-full sm:w-24 h-32 sm:h-24 rounded-xl bg-slate-200 overflow-hidden shrink-0">
              {visit.properties?.images?.[0] && (
                <img src={visit.properties.images[0]} alt={visit.properties.title} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-[#006655] font-bold text-xs mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(visit.booking_date_time).toUpperCase()}
              </div>
              <h3 className="font-bold text-lg text-[#19322F]">{visit.properties?.title || 'Visita a la Residencia'}</h3>
              <div className="flex items-center gap-2 text-sm text-[#5C706D] mt-1">
                <Avatar className="w-6 h-6 border border-emerald-100">
                  <AvatarFallback className="text-[10px] bg-emerald-50 text-[#006655] font-bold">SJ</AvatarFallback>
                </Avatar>
                <span>Agente: {visit.agent_name || 'Sarah Jenkins'}</span>
              </div>
            </div>
            <div className="flex w-full sm:w-auto gap-2 mt-2 sm:mt-0">
              <Button variant="outline" className="rounded-xl flex-1 sm:flex-none text-xs cursor-pointer">Reagendar</Button>
              <Button className="rounded-xl bg-[#006655] hover:bg-[#005544] text-white flex-1 sm:flex-none text-xs cursor-pointer">Indicaciones</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UpcomingVisitsList;
