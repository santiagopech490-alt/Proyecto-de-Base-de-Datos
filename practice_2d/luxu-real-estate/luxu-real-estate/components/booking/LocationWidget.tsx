'use client';

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LocationWidget() {
  const { t } = useLanguage();

  return (
    <Card className="p-4 space-y-4 bg-white">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-emerald-800" />
        <h3 className="font-bold">{t("details.location")}</h3>
      </div>
      <div className="h-40 bg-slate-100 rounded-md flex items-center justify-center text-slate-500 italic">
        {t("details.mapPreview")}
      </div>
    </Card>
  );
}
