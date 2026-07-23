"use client";

import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useFavorites } from "@/lib/hooks/useFavorites";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface PropertyCardProps {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  imageUrl: string;
  status?: string;
  isExclusive?: boolean;
  isNew?: boolean;
  variant?: "standard" | "featured";
}

export function PropertyCard({
  id,
  slug,
  title,
  location,
  price,
  beds,
  baths,
  area,
  imageUrl,
  status,
  isExclusive,
  isNew,
  variant = "standard",
}: PropertyCardProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const targetKey = slug || id;
  const isFavorite = favorites.includes(slug) || favorites.includes(id);
  const supabase = createClient();
  const { t, language } = useLanguage();

  const getTranslatedStatus = (st?: string) => {
    if (!st) return "";
    const s = st.toUpperCase();
    if (s.includes("SALE") || s.includes("VENTA")) return t("properties.forSaleBadge");
    if (s.includes("RENT") || s.includes("RENTA")) return t("properties.forRentBadge");
    if (s.includes("ACTIVE") || s.includes("ACTIVA")) return t("properties.activeBadge");
    return st;
  };

  const handleToggleFavorite = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toggleFavorite(targetKey);

    const willBeFavorite = !isFavorite;
    toast(
      willBeFavorite 
        ? (language === 'es' ? '❤️ Agregada a tus favoritas' : '❤️ Added to favorites')
        : (language === 'es' ? 'Eliminada de favoritas' : 'Removed from favorites'),
      { position: 'bottom-right' }
    );
  };

  if (variant === "featured") {
    return (
      <Link href={`/properties/${targetKey}`} className="block h-full">
        <Card className="group relative rounded-2xl overflow-hidden border-none shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] bg-white cursor-pointer h-full flex flex-col">
          <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-200">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {isExclusive && (
              <Badge className="absolute top-4 left-4 bg-white/90 text-[#19322F] hover:bg-white/90 backdrop-blur-sm border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {language === 'es' ? 'EXCLUSIVO' : 'EXCLUSIVE'}
              </Badge>
            )}
            {isNew && (
              <Badge className="absolute top-4 left-4 bg-white/90 text-[#19322F] hover:bg-white/90 backdrop-blur-sm border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {language === 'es' ? 'NUEVO' : 'NEW'}
              </Badge>
            )}
            <Button
              size="icon"
              variant="ghost"
              onClick={handleToggleFavorite}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer z-10 ${
                isFavorite ? "text-red-500 bg-white shadow-md" : "text-[#19322F] hover:bg-[#006655] hover:text-white"
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            </Button>
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          </div>
          <CardContent className="p-6 relative flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2 gap-2">
              <div>
                <h3 className="text-xl font-bold text-[#19322F] group-hover:text-[#006655] transition-colors">
                  {title}
                </h3>
                <p className="text-[#5C706D] text-sm flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" /> {location}
                </p>
              </div>
              <span suppressHydrationWarning className="text-xl font-bold text-[#006655] shrink-0">{price}</span>
            </div>
            <div className="flex items-center gap-6 mt-auto pt-6 border-t border-[#19322F]/5 text-[#5C706D] text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Bed className="w-4.5 h-4.5 text-[#006655]" /> {beds} {t("properties.beds")}
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4.5 h-4.5 text-[#006655]" /> {baths} {t("properties.baths")}
              </div>
              <div className="flex items-center gap-2">
                <SquareFootage className="w-4.5 h-4.5 text-[#006655]" /> {area}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/properties/${targetKey}`} className="block h-full">
      <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <Button
            size="icon"
            variant="ghost"
            onClick={handleToggleFavorite}
            className={`absolute top-3 right-3 p-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm transition-all cursor-pointer z-10 ${
              isFavorite ? "text-red-500 bg-white shadow-md" : "text-[#19322F] hover:bg-[#006655] hover:text-white"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
          {status && (
            <Badge className={`absolute bottom-3 left-3 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-lg border-none hover:opacity-90 ${
              status.includes("SALE") ? "bg-[#19322F]/90" : "bg-[#006655]/90"
            }`}>
              {getTranslatedStatus(status)}
            </Badge>
          )}
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-baseline mb-2">
            <h3 suppressHydrationWarning className="font-bold text-lg text-[#19322F]">{price}</h3>
          </div>
          <h4 className="text-[#19322F] font-bold truncate mb-1">{title}</h4>
          <p className="text-[#5C706D] text-xs mb-4">{location}</p>
          <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 text-[#5C706D] text-xs font-semibold">
            <div className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-[#006655]" /> {beds} {t("properties.beds")}
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-[#006655]" /> {baths} {t("properties.baths")}
            </div>
            <div className="flex items-center gap-1">
              <SquareFootage className="w-3.5 h-3.5 text-[#006655]" /> {area}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function SquareFootage({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}
