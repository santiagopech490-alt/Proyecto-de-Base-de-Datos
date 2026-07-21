'use client';

import { useState } from 'react';
import { useFavorites } from '@/lib/hooks/useFavorites';
import FavoritesHeader from '@/components/FavoritesHeader';
import FavoriteCard from '@/components/FavoriteCard';
import EmptyFavoriteCard from '@/components/EmptyFavoriteCard';

export default function FavoritesPage() {
  // const { favorites, toggleFavorite, loading } = useFavorites();
  const loading = false;
  const favorites = ['1', '2']; // Mock data
  const toggleFavorite = (id: string) => console.log('Toggle:', id);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('date');

  return (
    <main className="min-h-screen bg-clearday pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FavoritesHeader
          count={favorites.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
          view={view}
          onViewChange={setView}
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-96 bg-white rounded-xl animate-pulse" />
            ))}
          </div>
        ) : favorites.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <EmptyFavoriteCard />
          </div>
        ) : (
          <div className={view === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            : "flex flex-col gap-4"
          }>
            {favorites.map((propertyId) => (
              <FavoriteCard
                key={propertyId}
                property={{
                  id: propertyId,
                  title: 'Luxury Property',
                  price: 1250000,
                  address: 'Placeholder Address',
                  bedrooms: 3,
                  bathrooms: 2,
                  sqft: 2100,
                  images: ['https://placehold.co/600x400'],
                  listing_status: 'For Sale'
                }}
                isFavorite={true}
                onToggle={toggleFavorite}
              />
            ))}
            <EmptyFavoriteCard />
          </div>
        )}
      </div>
    </main>
  );
}
