'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

const STORAGE_KEY = 'user_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchFavorites = useCallback(async () => {
    let user = null;
    try {
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch (err: any) {
      if (err.name === 'AbortError' || err.message?.includes('Lock') || err.message?.includes('stole')) {
        return; // Exit silently
      }
    }

    if (user) {
      try {
        const { data, error } = await supabase
          .from('user_favorites')
          .select('property_id')
          .eq('user_id', user.id);

        if (!error && data) {
          const remoteIds = data.map((fav: any) => fav.property_id);
          const local = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
          const merged = Array.from(new Set([...remoteIds, ...local]));
          setFavorites(merged);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Supabase favorites fetch notice:", err);
      }
    }
    
    // Fetch from localStorage fallback
    const local = localStorage.getItem(STORAGE_KEY);
    if (local) {
      try {
        setFavorites(JSON.parse(local));
      } catch {}
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const toggleFavorite = async (propertyId: string) => {
    let user = null;
    try {
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch {}

    let newFavorites: string[];

    if (favorites.includes(propertyId)) {
      newFavorites = favorites.filter(id => id !== propertyId);
      
      if (user) {
        try {
          await supabase
            .from('user_favorites')
            .delete()
            .eq('user_id', user.id)
            .eq('property_id', propertyId);
        } catch (dbErr) {
          console.warn("Notice removing favorite from DB:", dbErr);
        }
      }
    } else {
      newFavorites = [...favorites, propertyId];
      
      if (user) {
        try {
          const { error } = await supabase
            .from('user_favorites')
            .insert({ user_id: user.id, property_id: propertyId });
          
          if (error) {
            console.warn("Notice inserting favorite to DB:", error.message || error);
          }
        } catch (dbErr) {
          console.warn("Notice inserting favorite to DB:", dbErr);
        }
      }
    }

    setFavorites(newFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  };

  const syncFavorites = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const local = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (local.length === 0) return;

    const favsToInsert = local.map((id: string) => ({
      user_id: user.id,
      property_id: id
    }));

    try {
      await supabase
        .from('user_favorites')
        .insert(favsToInsert);
    } catch {}

    fetchFavorites();
  };

  return {
    favorites,
    loading,
    toggleFavorite,
    syncFavorites,
    refresh: fetchFavorites
  };
}
