"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface AboutHomeProps {
  description: string;
}

export function AboutHome({ description }: AboutHomeProps) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 400;

  const shouldTruncate = description.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? description : description.slice(0, maxLength);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{t("details.aboutProperty")}</h2>
      </div>
      
      <div className="relative">
        <p className={`text-slate-600 leading-relaxed text-lg transition-all duration-500 ${!isExpanded && shouldTruncate ? "max-h-[200px] overflow-hidden" : "max-h-[2000px]"}`}>
          {displayText}
          {!isExpanded && shouldTruncate && (
            <span className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </p>
      </div>

      {shouldTruncate && (
        <Button 
          variant="ghost" 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="group flex items-center gap-2 px-0 h-auto font-bold text-emerald-800 hover:text-emerald-900 hover:bg-transparent transition-all duration-300 cursor-pointer"
        >
          {isExpanded ? (
            <>Ver Menos <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
          ) : (
            <>Leer Más <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
          )}
        </Button>
      )}
    </div>
  );
}
