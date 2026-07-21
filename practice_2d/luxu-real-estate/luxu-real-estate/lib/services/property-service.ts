import { Property } from '@/types/property';
import { supabase } from '@/lib/supabase';

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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM'
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s'
    ], 
    agentId: 'user123', 
    status: 'active' 
  },
  { 
    id: '3', 
    slug: 'modern-family-home', 
    title: 'Modern Family Home', 
    price: 850000, 
    location: '123 Pine St, Seattle', 
    beds: 3, 
    baths: 2, 
    sqft: 120, 
    garage: 1, 
    description: 'Beautiful modern family home in a great neighborhood.', 
    amenities: ['Garage', 'Garden'], 
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ9M7U6euA6_cXmYuXnej-N5IuawAW8ds-4G1mzfqmiBc13qXsPhf9_j_zTB8gfEunrBHo8xMsxYwCw_pl8fsxbxRkmyvLR1N9Tiye5ZJG7fwlLn9MwyBanXYhE0emGwp59es1FEyQTRQbmXLUKO74Yj34ZHqrqIkOtMKhP8CmRFvfoHT5LAe10105vUhKNkxIBvtt530nfLigSUTemOOcJMVNmsgactntRJUwOBU_TZzND7BYtDklr8uZcNYlQOK5U74-ufIf-E'], 
    agentId: 'user123', 
    status: 'FOR SALE' 
  },
  { 
    id: '4', 
    slug: 'urban-loft', 
    title: 'Urban Loft', 
    price: 3200, 
    location: '456 Elm Ave, Portland', 
    beds: 1, 
    baths: 1, 
    sqft: 85, 
    garage: 0, 
    description: 'Chic urban loft in the heart of the city.', 
    amenities: ['Gym', 'Elevator'], 
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuB4zNatD3vePhIZAi6OHHJKmamYSgeBNSKjEt32tvkkf4s6aBXCF8R4LNfDfPa9leA0t6N1OKOcP358WwZrnosbCBxSM7EaY2_P7qkx3MinRgmHQn7RvleNTwy8cLigMoR3iv0u83chBVbZYI6BcNMcqv80W-l1pIUgIWZcDIXEqtUatrsojSGfM0lTNDZpkBntBUkRY6NB4ZUymYNYvTHXKbO8NZ6N6uoyuuHqcaRWKzHCNXkOR3p-_EVFAHR8QwijIY_m1mefPZ4'], 
    agentId: 'user123', 
    status: 'FOR RENT' 
  },
  { 
    id: '5', 
    slug: 'highland-retreat', 
    title: 'Highland Retreat', 
    price: 620000, 
    location: '789 Mountain Rd, Bend', 
    beds: 2, 
    baths: 2, 
    sqft: 98, 
    garage: 1, 
    description: 'Quiet retreat in the mountains.', 
    amenities: ['View', 'Patio'], 
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuARQWC19e7mleUpjb8CWLztEv_svJeRFOaC2i-9r9GctFuX5Barzhfai9wNM1WW8bcGlqdFM32d3KPf7SItom5ijdHOz5rGGQPeT7PlWs8-y9LkfcsHLQqsLxalhxP94XJo76_mAMp7T2dVj3hPKHNzTDLLiS6ujSdSsyo3onxQthp4ZkVE8op92gyTLUUucaGaxO8vJvyhH3HuWB07EPqT1WsW0lr9Of5lUPonjG9eiqE1XiJXTqzXUZQt5JorfPwCO1MioZA_Zro'], 
    agentId: 'user123', 
    status: 'FOR SALE' 
  },
  { 
    id: '6', 
    slug: 'sea-view-penthouse', 
    title: 'Sea View Penthouse', 
    price: 4500, 
    location: '321 Ocean Dr, Miami', 
    beds: 3, 
    baths: 3, 
    sqft: 180, 
    garage: 2, 
    description: 'Stunning sea view penthouse.', 
    amenities: ['Pool', 'Terrace'], 
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBGq4Phm0uDzCnjHAsnWpYTBVpOds_M6iOsJuRQQA5eUZHkztGgtc7eh_OE6wBeyW1-iZh7yyhROnvvmqkAZ9tyAWFGXk0FG52zU4kZ_EDLA0U0cRszy7byNXTeWe0_hS53SYmtCTEV8Y1AM-WxiIC38UMa15QwFDjXtCGQOxoh35K0Ol_70vfsxm0VqDbaWkr8tcEbLTLy0NXH_GcpGK4lAXizgxYOIlFWGyau-4OIfPZRpjCBDbz_qu3VlN201UUJGiuM9ajVd-U'], 
    agentId: 'user123', 
    status: 'FOR RENT' 
  },
  { 
    id: '7', 
    slug: 'central-studio', 
    title: 'Central Studio', 
    price: 550000, 
    location: '555 Main St, Chicago', 
    beds: 1, 
    baths: 1, 
    sqft: 50, 
    garage: 0, 
    description: 'Cozy studio in the city center.', 
    amenities: ['WiFi', 'AC'], 
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuA1w-Hb1289NqZKon3VK8bpmMiCDYYiAMT5egzTINo9m9wSZRHv-k-1IGTVoL1NT8YeZXJHa87JPNDIPrtrbP7jChHq0ypXF90uByhC6VA9O788_B4FY8JVg4chbWN9bcrn9-9FvVvfZX8Aj60Iqg_C8CsCA9DEnJqi2rJvzmK5UP5z-9XRTRjBneAPCa8iGgGWBD9yYKsziN6vn0ePBDGo3inieQtmbr46W31p6UfQ649XRxTm7ygOY2J-jxW1r0qWs8i97KGpkTE'], 
    agentId: 'user123', 
    status: 'FOR SALE' 
  },
  { 
    id: '8', 
    slug: 'garden-villa', 
    title: 'Garden Villa', 
    price: 2800, 
    location: '999 Oak Ln, Austin', 
    beds: 2, 
    baths: 2, 
    sqft: 110, 
    garage: 1, 
    description: 'Lovely garden villa with private space.', 
    amenities: ['Garden', 'Parking'], 
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCfGXdY0g51ojSg0GMeTW9ndLY3mpKK3oMtWxo2nwd_dwi1pgn1Boi_ovaDGIFhUA7nwu3WdBch8ZuHxoHu3QfgM5ceAsp8pglRVyCROWNcy9zeDNP2wqLoevyKGcaEyFYHYpIx2KK46nLWthnHiHugmkKw48kJsL8IjMO1bL3T1Zwt8bvQDTTUHTgB3GqZ2RU2asRzF1jVg0rLw3LWXXTq0YF1CsbhlWpYOuCEpH5bB8zkBlbKXR4At_M46AL8rJqn5c6BrPD5PP8'], 
    agentId: 'user123', 
    status: 'FOR RENT' 
  },
];

export async function getAllProperties(): Promise<Property[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching properties:', error);
    return mockProperties;
  }

  if (!data || data.length === 0) {
    return mockProperties;
  }

  return data.map(p => ({
    ...p,
    location: p.address || p.location,
    beds: p.bedrooms || p.beds,
    baths: p.bathrooms || p.baths,
  })) as Property[];
}

export async function getPropertiesByOwner(ownerId: string): Promise<Property[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('user_id', ownerId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching owner properties:', error);
    return [];
  }

  if (!data || data.length === 0) {
    return mockProperties.filter(p => p.agentId === 'user123');
  }

  return data.map(p => ({
    ...p,
    location: p.address || p.location,
    beds: p.bedrooms || p.beds,
    baths: p.bathrooms || p.baths,
  })) as Property[];
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.warn(`Supabase fetch failed for slug: ${slug}, falling back to mock data.`);
    return mockProperties.find(p => p.slug === slug);
  }

  return {
    ...data,
    location: data.address || data.location,
    beds: data.bedrooms || data.beds,
    baths: data.bathrooms || data.baths,
  } as Property;
}

export async function createProperty(property: Partial<Property>, userId: string) {
  const slug = property.title?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') + '-' + Math.random().toString(36).substring(2, 7);

  const { data, error } = await supabase
    .from('properties')
    .insert([{
      ...property,
      user_id: userId,
      slug,
      status: 'active',
      images: property.images || [],
      amenities: property.amenities || [],
      address: property.location,
      bedrooms: property.beds,
      bathrooms: property.baths,
      sqft: property.sqft,
      garage: property.garage,
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export function calculateKPIs(properties: Property[]) {
  return {
    total: properties.length,
    active: properties.filter(p => p.status?.toLowerCase() === 'active').length,
    pending: properties.filter(p => p.status?.toLowerCase() === 'pending').length,
  };
}

