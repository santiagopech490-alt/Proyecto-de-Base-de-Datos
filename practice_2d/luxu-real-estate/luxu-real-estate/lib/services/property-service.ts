import { Property } from '@/types/property';
import { supabase } from '@/lib/supabase';
import { getRealNoSQLProperties } from '@/lib/nosql-dataset-reader';

// Mock data for local development/demo
const mockProperties: Property[] = [
  { 
    id: '1', 
    slug: 'modern-villa-beverly-hills', 
    title: 'The Glass Pavilion', 
    price: 5250000, 
    location: 'Beverly Hills, California', 
    beds: 5, 
    baths: 4.5, 
    sqft: 4200, 
    garage: 3, 
    description: 'Experience modern luxury in this architecturally stunning home located in the heart of Beverly Hills.', 
    amenities: ['Swimming Pool', 'Smart Home System', 'Central Heating & Cooling', 'Electric Vehicle Charging', 'Private Gym', 'Wine Cellar'], 
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop'
    ], 
    agentId: 'user123', 
    status: 'active' 
  },
  { 
    id: '2', 
    slug: 'coastal-retreat-malibu', 
    title: 'Azure Heights Penthouse', 
    price: 3800000, 
    location: 'Downtown, Vancouver', 
    beds: 3, 
    baths: 3, 
    sqft: 2100, 
    garage: 2, 
    description: 'Luxurious penthouse with stunning views.', 
    amenities: ['Ocean View', 'Balcony', 'Private Gym'], 
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop'
    ], 
    agentId: 'user123', 
    status: 'active' 
  }
];

export async function getAllProperties(): Promise<Property[]> {
  let dbProps: Property[] = [];
  try {
    const { data } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (data && data.length > 0) {
      dbProps = data.map(p => ({
        ...p,
        slug: p.slug || p.id || `property-${p.id}`,
        location: p.address || p.location || 'Beverly Hills, CA',
        beds: p.bedrooms || p.beds || 0,
        baths: p.bathrooms || p.baths || 0,
      })) as Property[];
    }
  } catch (err) {
    console.warn('Supabase unreachable, using fallback properties:', err);
  }

  const realNoSqlProps = getRealNoSQLProperties();
  const allMerged = [...dbProps, ...mockProperties, ...realNoSqlProps];

  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  const uniqueProps: Property[] = [];

  for (const p of allMerged) {
    const effectiveSlug = p.slug || p.id;
    if (!seenIds.has(p.id) && !seenSlugs.has(effectiveSlug)) {
      seenIds.add(p.id);
      seenSlugs.add(effectiveSlug);
      uniqueProps.push(p);
    }
  }

  let deletedKeys: string[] = [];
  if (typeof window !== 'undefined') {
    const deletedStr = localStorage.getItem('luxe_deleted_properties');
    if (deletedStr) {
      try { deletedKeys = JSON.parse(deletedStr); } catch {}
    }
  }

  const finalProps = uniqueProps.filter(p => !deletedKeys.includes(p.id) && !deletedKeys.includes(p.slug));
  return finalProps;
}

export async function getPropertiesByOwner(ownerId: string): Promise<Property[]> {
  return getAllProperties();
}

export async function getPropertyBySlug(slug: string): Promise<Property> {
  const all = await getAllProperties();
  const found = all.find(p => p.slug === slug || p.id === slug || slug.includes(p.slug) || p.slug.includes(slug));
  if (found) return found;

  const titleFormatted = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    id: slug,
    slug: slug,
    title: titleFormatted.length > 2 ? titleFormatted : 'Residencia de Lujo Exclusiva',
    price: 4500000,
    location: 'Beverly Hills, CA',
    beds: 4,
    baths: 4,
    sqft: 3500,
    garage: 2,
    description: 'Experiencia de vida lujosa con acabados de alta gama y vistas impresionantes.',
    amenities: ['Alberca', 'Casa Inteligente', 'Gimnasio Privado', 'Cava de Vinos'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop'
    ],
    agentId: 'user123',
    status: 'active'
  };
}

export function calculateKPIs(properties: Property[]) {
  return {
    total: properties.length,
    active: properties.filter(p => (p.status || '').toLowerCase() === 'active').length,
    pending: properties.filter(p => (p.status || '').toLowerCase() === 'pending').length,
  };
}
