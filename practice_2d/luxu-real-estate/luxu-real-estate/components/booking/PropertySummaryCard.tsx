'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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

interface PropertySummaryCardProps {
  property: Property;
  agentName: string;
}

export function PropertySummaryCard({ property, agentName }: PropertySummaryCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="rounded-xl overflow-hidden shadow-sm border-border/10 bg-white">
      <div className="relative aspect-square">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-nordic mb-2">{property.title}</h2>
        <p className="text-lg font-semibold text-mosque mb-2">${property.price.toLocaleString()}</p>
        <p className="text-nordic/70 mb-4">{property.address}</p>
        
        <div className="flex gap-4 mb-6">
          <Badge variant="secondary">{property.listing_status || t("details.forSale")}</Badge>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-nordic/60">
          <div>
            <p className="font-bold text-nordic">{property.bedrooms} {t("schedulePage.beds")}</p>
          </div>
          <div>
            <p className="font-bold text-nordic">{property.bathrooms} {t("schedulePage.baths")}</p>
          </div>
          <div>
            <p className="font-bold text-nordic">{property.sqft.toLocaleString()} {t("schedulePage.sqft")}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>{agentName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs text-nordic/60">{t("schedulePage.hostedBy")}</p>
              <p className="font-bold text-nordic">{agentName}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <span className="material-icons">chat_bubble_outline</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
