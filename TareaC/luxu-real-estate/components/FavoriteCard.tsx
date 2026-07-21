'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
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
    onToggle(property.id);
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
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-mosque hover:bg-mosque hover:text-white transition-colors shadow-sm z-10 h-10 w-10"
        >
          <span className="material-icons text-xl block transition-transform active:scale-90">
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
        </Button>
        <div className="absolute bottom-3 left-3 bg-nordic/90 backdrop-blur-md px-3 py-1 rounded-md">
          <span className="text-xs font-semibold text-white uppercase tracking-wider">New Listing</span>
        </div>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-nordic" suppressHydrationWarning>
            ${property.price.toLocaleString('en-US')}
          </h3>
          <Badge className="bg-hintgreen text-mosque hover:bg-hintgreen/80 border-none font-medium text-xs px-2 py-1">
            {property.listing_status}
          </Badge>
        </div>
        <p className="text-nordic/70 text-sm mb-4 line-clamp-1">{property.address}</p>
        
        <div className="flex items-center justify-between text-nordic/60 text-xs font-medium mb-6">
          <div className="flex items-center gap-1">
            <span className="material-icons text-mosque text-base">bed</span>
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons text-mosque text-base">bathtub</span>
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons text-mosque text-base">square_foot</span>
            <span suppressHydrationWarning>{property.sqft.toLocaleString('en-US')} sqft</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button 
          variant="outline" 
          className="w-full py-2.5 rounded-lg border-mosque text-mosque font-medium text-sm hover:bg-mosque hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <span>Book Visit</span>
          <span className="material-icons text-base">arrow_forward</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
