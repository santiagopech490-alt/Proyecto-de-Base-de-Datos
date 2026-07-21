import { Property } from '@/types/property';

// Mock data for local development
const mockProperties: Property[] = [
  { 
    id: '1', 
    slug: 'modern-villa-beverly-hills', 
    title: 'Modern Villa in Beverly Hills', 
    price: 4500000, 
    location: '1284 Sunset Blvd, Beverly Hills, CA', 
    beds: 4, 
    baths: 3, 
    sqft: 3200, 
    garage: 2, 
    description: 'Experience modern luxury in this architecturally stunning home located in the heart of Beverly Hills.', 
    amenities: ['Swimming Pool', 'Smart Home System', 'Central Heating & Cooling', 'Electric Vehicle Charging', 'Private Gym', 'Wine Cellar'], 
    images: [
      'https://placehold.co/800x400/006655/white?text=Property+Hero',
      'https://placehold.co/800x400/e2e8f0/slate?text=Interior',
      'https://placehold.co/800x400/e2e8f0/slate?text=Bedroom'
    ], 
    agentId: 'user123', 
    status: 'active' 
  },
  { 
    id: '2', 
    slug: 'coastal-retreat-malibu', 
    title: 'Sunset Apartments', 
    price: 850000, 
    location: 'Miami, FL', 
    beds: 2, 
    baths: 2, 
    sqft: 1100, 
    garage: 1, 
    description: 'Modern apartment', 
    amenities: ['Ocean View', 'Balcony', 'Private Gym'], 
    images: [
      'https://placehold.co/800x400/006655/white?text=Sunset+Hero',
      'https://placehold.co/800x400/e2e8f0/slate?text=Sunset+Living',
      'https://placehold.co/800x400/e2e8f0/slate?text=Sunset+Kitchen'
    ], 
    agentId: 'user123', 
    status: 'active' 
  },
  { 
    id: '3', 
    slug: 'prop-3', 
    title: 'Pending House', 
    price: 920000, 
    location: 'Portland, OR', 
    beds: 3, 
    baths: 2, 
    sqft: 1800, 
    garage: 1, 
    description: 'Pending sale', 
    amenities: [], 
    images: [
      'https://placehold.co/800x400/006655/white?text=Pending+Hero',
      'https://placehold.co/800x400/e2e8f0/slate?text=Pending+Room',
      'https://placehold.co/800x400/e2e8f0/slate?text=Pending+Yard'
    ], 
    agentId: 'user123', 
    status: 'pending' 
  },
];

export async function getPropertiesByOwner(ownerId: string): Promise<Property[]> {
  return mockProperties.filter(p => p.agentId === ownerId);
}

export async function getAllProperties(): Promise<Property[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockProperties;
}

export function calculateKPIs(properties: Property[]) {
  return {
    total: properties.length,
    active: properties.filter(p => p.status === 'active').length,
    pending: properties.filter(p => p.status === 'pending').length,
  };
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockProperties.find(p => p.slug === slug);
}
