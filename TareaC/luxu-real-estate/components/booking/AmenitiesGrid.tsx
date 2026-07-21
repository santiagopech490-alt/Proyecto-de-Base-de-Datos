import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface AmenitiesGridProps {
  amenities: string[];
}

export function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((amenity, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300 group">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-emerald-200 group-hover:bg-white transition-all duration-300 shadow-sm">
              <Check className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
