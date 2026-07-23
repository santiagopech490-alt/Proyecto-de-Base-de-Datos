'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Bed, Bath, Square, ArrowRight, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  listing_status?: string;
  status?: string;
}

interface FavoriteCardProps {
  property: Property;
  isFavorite: boolean;
  onToggle: (slugOrId: string) => void;
}

export default function FavoriteCard({ property, isFavorite, onToggle }: FavoriteCardProps) {
  const { language } = useLanguage();

  const handleToggle = () => {
    onToggle(property.slug || property.id);
    toast(
      isFavorite 
        ? (language === 'es' ? 'Eliminada de tus favoritas' : 'Removed from favorites')
        : (language === 'es' ? 'Agregada a tus favoritas' : 'Added to favorites'),
      { position: 'bottom-right' }
    );
  };

  const statusText = property.listing_status || property.status || 'Active';
  const isForRent = statusText.toLowerCase().includes('rent') || property.price < 10000;

  return (
    <Card className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-slate-200">
        {property.images && property.images[0] ? (
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold">LuxeEstate</div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggle}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-[#006655] hover:bg-[#006655] hover:text-white transition-colors shadow-sm z-10 h-10 w-10 cursor-pointer"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current text-red-500 hover:text-white' : ''}`} />
        </Button>
        <div className="absolute bottom-3 left-3 bg-[#19322F]/90 backdrop-blur-md px-3 py-1 rounded-lg">
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            {isForRent ? (language === 'es' ? 'EN RENTA' : 'FOR RENT') : (language === 'es' ? 'EXCLUSIVO' : 'EXCLUSIVE')}
          </span>
        </div>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-xl font-bold text-[#19322F]" suppressHydrationWarning>
            ${(property.price || 0).toLocaleString('en-US')}{isForRent ? '/mes' : ''}
          </h3>
          <Badge className="bg-emerald-50 text-[#006655] border-none font-bold text-xs px-2.5 py-1 rounded-md shrink-0">
            {isForRent ? (language === 'es' ? 'RENTA' : 'RENT') : (language === 'es' ? 'ACTIVA' : 'ACTIVE')}
          </Badge>
        </div>
        <p className="font-semibold text-sm text-[#19322F] mb-1 line-clamp-1">{property.title}</p>
        <p className="text-[#5C706D] text-xs mb-4 line-clamp-1">{property.location || 'Beverly Hills, CA'}</p>
        
        <div className="mt-auto flex items-center justify-between text-[#5C706D] text-xs font-semibold pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-[#006655]" />
            <span>{property.beds || 0} {language === 'es' ? 'Hab' : 'Beds'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-[#006655]" />
            <span>{property.baths || 0} {language === 'es' ? 'Baños' : 'Baths'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-[#006655]" />
            <span suppressHydrationWarning>{(property.sqft || 0).toLocaleString('en-US')} m²</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link href={`/properties/${property.slug || property.id}/schedule`} className="w-full">
          <Button 
            className="w-full py-2.5 rounded-xl bg-[#006655] hover:bg-[#005544] text-white font-semibold text-sm transition-all shadow-md shadow-[#006655]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{language === 'es' ? 'Agendar Visita' : 'Book Visit'}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
