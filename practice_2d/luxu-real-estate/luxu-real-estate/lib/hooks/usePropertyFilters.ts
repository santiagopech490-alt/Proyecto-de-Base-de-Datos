import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export interface PropertyFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  beds?: number;
  baths?: number;
  amenities?: string[];
}

export function usePropertyFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = useMemo(() => {
    const params: PropertyFilters = {};
    
    const location = searchParams.get('location');
    if (location) params.location = location;

    const minPrice = searchParams.get('minPrice');
    if (minPrice) params.minPrice = Number(minPrice);

    const maxPrice = searchParams.get('maxPrice');
    if (maxPrice) params.maxPrice = Number(maxPrice);

    const type = searchParams.get('type');
    if (type) params.type = type;

    const beds = searchParams.get('beds');
    if (beds) params.beds = Number(beds);

    const baths = searchParams.get('baths');
    if (baths) params.baths = Number(baths);

    const amenities = searchParams.get('amenities');
    if (amenities) {
      params.amenities = amenities.split(',');
    }
    
    return params;
  }, [searchParams]);

  const setFilter = useCallback((key: keyof PropertyFilters, value: string | number | string[] | undefined | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
      params.delete(key);
    } else if (Array.isArray(value)) {
      params.set(key, value.join(','));
    } else {
      params.set(key, value.toString());
    }
    
    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    
    router.push(url, { scroll: false });
  }, [searchParams, router, pathname]);

  const clearFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [router, pathname]);

  return {
    filters,
    setFilter,
    clearFilters,
  };
}
