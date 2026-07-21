'use client';

import { useState, useEffect } from 'react';
import { useFavorites } from '@/lib/hooks/useFavorites';
import { fetchFavoriteProperties } from '@/lib/favorites-service';
import FavoritesHeader from '@/components/FavoritesHeader';
import FavoriteCard from '@/components/FavoriteCard';
import EmptyFavoriteCard from '@/components/EmptyFavoriteCard';
import { LoginRequired } from '@/components/LoginRequired';
import { createClient } from '@/lib/supabase/client';

export default function FavoritesPage() {
  const [user, setUser] = useState<any>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { favorites, toggleFavorite, loading } = useFavorites();
  const [properties, setProperties] = useState<any[]>([]);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('date');
  const supabase = createClient();

  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setCheckingAuth(false);
    }
    checkUser();
  }, [supabase]);

  useEffect(() => {
    async function loadProperties() {
      if (favorites.length > 0) {
        try {
          const data = await fetchFavoriteProperties(favorites);
          setProperties(data);
        } catch (error) {
          console.error("Error loading favorite properties:", error);
        }
      } else {
        setProperties([]);
      }
    }
    loadProperties();
  }, [favorites]);

  if (checkingAuth) return <div className="min-h-screen pt-28 px-4 text-center">Loading...</div>;
  if (!user) return <LoginRequired title="Your Favorites Collection" />;

  return (
    <main className="min-h-screen bg-clearday pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FavoritesHeader
          count={properties.length}
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
        ) : properties.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <EmptyFavoriteCard />
          </div>
        ) : (
          <div className={view === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            : "flex flex-col gap-4"
          }>
            {properties.map((property) => (
              <FavoriteCard
                key={property.id}
                property={{
                  id: property.id,
                  title: property.title,
                  price: property.price,
                  address: property.location,
                  bedrooms: property.beds,
                  bathrooms: property.baths,
                  sqft: property.sqft,
                  images: property.images,
                  listing_status: property.status
                }}
                isFavorite={true}
                onToggle={() => toggleFavorite(property.slug)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
