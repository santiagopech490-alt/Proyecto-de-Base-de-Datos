import { supabase } from '@/lib/supabase';
import { getAllProperties } from './services/property-service';

export async function fetchFavoriteProperties(slugs: string[]) {
  console.log("INTENTANDO BUSCAR SLUGS:", slugs);
  
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .in('slug', slugs);

  if (error) {
    console.error("ERROR EN FETCH:", error);
    throw error;
  }
  
  // If no data found in DB, fallback to mock data
  if (!data || data.length === 0) {
    console.log("No data found in Supabase, falling back to mock properties");
    const allMockProperties = await getAllProperties();
    return allMockProperties.filter(prop => slugs.includes(prop.slug));
  }
  
  console.log("DATOS RECUPERADOS:", data);
  return data || [];
}
