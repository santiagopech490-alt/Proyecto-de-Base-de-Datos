'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, CheckCircle, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface PropertyKPIsProps {
  total: number;
  active: number;
  pending: number;
}

export function PropertyKPIs({ total, active, pending }: PropertyKPIsProps) {
  const { t } = useLanguage();

  const kpis = [
    { title: t("admin.totalListings"), value: total, icon: Building },
    { title: t("admin.activeProperties"), value: active, icon: CheckCircle },
    { title: t("admin.pendingSale"), value: pending, icon: Clock },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {kpis.map((kpi) => (
        <Card key={kpi.title} className="bg-white border-none shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">{kpi.title}</CardTitle>
            <kpi.icon className="w-4 h-4 text-emerald-800" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">{kpi.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
