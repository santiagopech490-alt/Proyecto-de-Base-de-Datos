export interface Property {
  id: string;
  slug: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
  description: string;
  amenities: string[];
  images: string[];
  agentId: string;
  status: 'active' | 'pending' | 'sold';
}

export type PropertyStatus = Property['status'];
