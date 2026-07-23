export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  location: string;
  address?: string;
  beds: number;
  baths: number;
  sqft: number;
  garage?: number;
  description?: string;
  amenities?: string[];
  images: string[];
  agentId?: string;
  status?: string;
  bedrooms?: number;
  bathrooms?: number;
}
