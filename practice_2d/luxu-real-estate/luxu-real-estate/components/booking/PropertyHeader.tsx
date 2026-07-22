'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, Car } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface PropertyHeaderProps {
  title: string;
  price: number;
  location: string;
}

export function PropertyHeader({ title, price, location }: PropertyHeaderProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-sans">{title}</h1>
          <p className="text-slate-500 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {location}
          </p>
        </div>
        <div className="text-3xl md:text-4xl font-bold text-emerald-800 font-sans">
          ${price.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

interface KeyFeaturesProps {
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
}

export function KeyFeaturesRow({ beds, baths, sqft, garage }: KeyFeaturesProps) {
  const { t } = useLanguage();

  const features = [
    { icon: Bed, val: beds || 0, label: t("details.bedrooms") },
    { icon: Bath, val: baths || 0, label: t("details.bathrooms") },
    { icon: Square, val: (sqft || 0).toLocaleString(), label: t("details.sqft") },
    { icon: Car, val: garage || 0, label: t("details.garage") },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
            <f.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-700 transition-colors duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900">{f.val}</span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {f.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
