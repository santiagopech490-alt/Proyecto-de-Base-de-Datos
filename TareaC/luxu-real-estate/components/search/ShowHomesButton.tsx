'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';
import { getPropertyCount } from '@/lib/actions';

export function ShowHomesButton() {
  const { filters } = usePropertyFilters();
  const [count, setCount] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchCount = async () => {
      setIsLoading(true);
      try {
        const newCount = await getPropertyCount(filters);
        setCount(newCount);
      } catch (error) {
        console.error('Failed to fetch count:', error);
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce to avoid too many requests
    const timer = setTimeout(() => {
      fetchCount();
    }, 400);

    return () => clearTimeout(timer);
  }, [filters]);

  return (
    <Button 
      className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Updating...</span>
        </>
      ) : (
        <>
          <span>Show {count !== null ? count : '...'} Homes</span>
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </Button>
  );
}
