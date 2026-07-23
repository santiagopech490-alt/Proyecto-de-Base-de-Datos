import { supabase } from '@/lib/supabase';
import { getAllProperties } from './services/property-service';

export async function fetchFavoriteProperties(slugs: string[]) {
  if (!slugs || slugs.length === 0) return [];

  try {
    const allMockProperties = await getAllProperties();
    
    // Read custom local properties created in admin panel
    let customProps: any[] = [];
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('luxe_custom_properties');
      if (saved) {
        try {
          customProps = JSON.parse(saved);
        } catch {}
      }
    }

    const mergedAll = [...customProps, ...allMockProperties];
    
    // Try Supabase first
    const { data } = await supabase
      .from('properties')
      .select('*')
      .in('slug', slugs);

    if (data && data.length > 0) {
      const dbSlugs = new Set(data.map(d => d.slug || d.id));
      const remainingLocal = mergedAll.filter(p => (slugs.includes(p.slug) || slugs.includes(p.id)) && !dbSlugs.has(p.slug) && !dbSlugs.has(p.id));
      return [...data, ...remainingLocal];
    }

    return mergedAll.filter(prop => slugs.includes(prop.slug) || slugs.includes(prop.id));
  } catch (err) {
    console.warn("Supabase unreachable, using local/mock properties:", err);
    const allMockProperties = await getAllProperties();
    return allMockProperties.filter(prop => slugs.includes(prop.slug) || slugs.includes(prop.id));
  }
}
