'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Bed, Bath, Square, ArrowRight, Heart } from 'lucide-react';

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
  listing_status: string;
}

interface FavoriteCardProps {
  property: Property;
  isFavorite: boolean;
  onToggle: (id: string) => void;
}

export default function FavoriteCard({ property, isFavorite, onToggle }: FavoriteCardProps) {
  const handleToggle = () => {
    onToggle(property.slug);
    toast(isFavorite ? 'Removed from favorites' : 'Added to favorites', {
      position: 'bottom-right',
    });
  };

  return (
    <Card className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/10 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggle}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-emerald-800 hover:bg-emerald-800 hover:text-white transition-colors shadow-sm z-10 h-10 w-10"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>
        <div className="absolute bottom-3 left-3 bg-emerald-900/90 backdrop-blur-md px-3 py-1 rounded-md">
          <span className="text-xs font-semibold text-white uppercase tracking-wider">New Listing</span>
        </div>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-emerald-950" suppressHydrationWarning>
            ${property.price.toLocaleString('en-US')}
          </h3>
          <Badge className="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border-none font-medium text-xs px-2 py-1">
            {property.listing_status}
          </Badge>
        </div>
        <p className="text-emerald-900/70 text-sm mb-4 line-clamp-1">{property.location}</p>
        
        <div className="flex items-center justify-between text-emerald-900/60 text-xs font-medium mb-6">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-emerald-700" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-emerald-700" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-emerald-700" />
            <span suppressHydrationWarning>{property.sqft.toLocaleString('en-US')} sqft</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link href={`/properties/${property.slug}/schedule`} className="w-full">
          <Button 
            variant="outline" 
            className="w-full py-2.5 rounded-lg border-emerald-800 text-emerald-800 font-medium text-sm hover:bg-emerald-800 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <span>Book Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
