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
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          setCheckingAuth(false);
          return;
        }
      } catch {}

      // Check local demo session
      const demoStr = typeof window !== 'undefined' ? localStorage.getItem('luxe_demo_user') : null;
      const demoAuthCookie = typeof document !== 'undefined' && document.cookie.includes('luxe_auth=true');

      if (demoStr || demoAuthCookie) {
        setUser({ id: 'demo-user', email: 'demo.admin@gmail.com' });
      } else {
        setUser(null);
      }
      setCheckingAuth(false);
    }
    checkUser();
  }, [supabase]);

  useEffect(() => {
    async function loadProperties() {
      if (favorites.length > 0) {
        try {
          const data = await fetchFavoriteProperties(favorites);
          setProperties(data || []);
        } catch (error) {
          console.error("Error loading favorite properties:", error);
        }
      } else {
        setProperties([]);
      }
    }
    loadProperties();
  }, [favorites]);

  // Sort properties
  const sortedProperties = [...properties].sort((a, b) => {
    if (sortBy === 'price-asc') return (a.price || 0) - (b.price || 0);
    if (sortBy === 'price-desc') return (b.price || 0) - (a.price || 0);
    return 0;
  });

  if (checkingAuth) return <div className="min-h-screen pt-28 px-4 text-center text-slate-400">Cargando favoritos...</div>;
  if (!user && favorites.length === 0) return <LoginRequired title="Tus Propiedades Favoritas" />;

  return (
    <main className="min-h-screen bg-[#FBFDFB] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FavoritesHeader
          count={sortedProperties.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
          view={view}
          onViewChange={setView}
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-96 bg-slate-200/60 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : sortedProperties.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <EmptyFavoriteCard />
          </div>
        ) : (
          <div className={view === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            : "flex flex-col gap-4"
          }>
            {sortedProperties.map((property) => (
              <FavoriteCard
                key={property.id}
                property={{
                  id: property.id,
                  slug: property.slug || property.id,
                  title: property.title,
                  price: property.price,
                  location: property.location || property.address || 'Beverly Hills, CA',
                  beds: property.beds || property.bedrooms || 0,
                  baths: property.baths || property.bathrooms || 0,
                  sqft: property.sqft || 0,
                  images: (property.images && property.images.length > 0) ? property.images : ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop'],
                  listing_status: property.status || property.listing_status || 'active'
                }}
                isFavorite={true}
                onToggle={() => toggleFavorite(property.slug || property.id)}
              />
            ))}
            <EmptyFavoriteCard />
          </div>
        )}
      </div>
    </main>
  );
}
