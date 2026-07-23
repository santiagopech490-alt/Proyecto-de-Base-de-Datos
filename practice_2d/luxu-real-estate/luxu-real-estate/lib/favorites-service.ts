import { getAllProperties, getPropertyBySlug } from './services/property-service';

export async function fetchFavoriteProperties(slugs: string[]) {
  if (!slugs || slugs.length === 0) return [];

  try {
    const allProps = await getAllProperties();
    
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

    const mergedAll = [...customProps, ...allProps];

    // Filter by matching either slug OR id
    const result = mergedAll.filter(prop => 
      slugs.includes(prop.slug) || 
      slugs.includes(prop.id)
    );

    // If any slug in favorites didn't match directly in mergedAll, create fallback property cards for them!
    const matchedKeys = new Set(result.flatMap(r => [r.slug, r.id]));
    const missingSlugs = slugs.filter(s => s && !matchedKeys.has(s));

    for (const missingSlug of missingSlugs) {
      try {
        const fallbackProp = await getPropertyBySlug(missingSlug);
        if (fallbackProp) {
          result.push(fallbackProp);
        }
      } catch {}
    }

    return result;
  } catch (err) {
    console.warn("Error in fetchFavoriteProperties:", err);
    return [];
  }
}
