'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';
import { getPropertyCount } from '@/lib/actions';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ShowHomesButton() {
  const { t } = useLanguage();
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

    const timer = setTimeout(() => {
      fetchCount();
    }, 400);

    return () => clearTimeout(timer);
  }, [filters]);

  return (
    <Button 
      className="w-full h-12 bg-[#006655] hover:bg-[#005544] text-white font-semibold rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>{t("filtersModal.updating")}</span>
        </>
      ) : (
        <>
          <span>{t("filtersModal.showHomes")} {count !== null ? count : '...'} {t("filtersModal.homesLabel")}</span>
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </Button>
  );
}
