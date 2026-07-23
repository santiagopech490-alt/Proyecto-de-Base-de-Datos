'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

const STORAGE_KEY = 'user_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      } catch {}
    }
    return [];
  });
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchFavorites = useCallback(async () => {
    const currentLocal: string[] = typeof window !== 'undefined' 
      ? JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') 
      : [];

    let user = null;
    try {
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch {}

    if (user) {
      try {
        const { data, error } = await supabase
          .from('user_favorites')
          .select('property_id')
          .eq('user_id', user.id);

        if (!error && data) {
          const remoteIds = data.map((fav: any) => fav.property_id);
          const merged = Array.from(new Set([...currentLocal, ...remoteIds]));
          setFavorites(merged);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Supabase favorites fetch notice:", err);
      }
    }
    
    setFavorites(currentLocal);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchFavorites();

    const handleStorageOrCustom = () => {
      if (typeof window !== 'undefined') {
        try {
          const updated = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
          setFavorites(updated);
        } catch {}
      }
    };

    window.addEventListener('storage', handleStorageOrCustom);
    window.addEventListener('luxe_favorites_updated', handleStorageOrCustom);
    return () => {
      window.removeEventListener('storage', handleStorageOrCustom);
      window.removeEventListener('luxe_favorites_updated', handleStorageOrCustom);
    };
  }, [fetchFavorites]);

  const toggleFavorite = async (propertyId: string) => {
    if (!propertyId) return;

    // Ground truth: ALWAYS read latest localStorage array first!
    const currentLocal: string[] = typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      : favorites;

    let newFavorites: string[];
    if (currentLocal.includes(propertyId)) {
      newFavorites = currentLocal.filter(id => id !== propertyId);
    } else {
      newFavorites = Array.from(new Set([...currentLocal, propertyId]));
    }

    setFavorites(newFavorites);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
      window.dispatchEvent(new Event('luxe_favorites_updated'));
    }

    let user = null;
    try {
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch {}

    if (user) {
      try {
        if (currentLocal.includes(propertyId)) {
          await supabase
            .from('user_favorites')
            .delete()
            .eq('user_id', user.id)
            .eq('property_id', propertyId);
        } else {
          await supabase
            .from('user_favorites')
            .insert({ user_id: user.id, property_id: propertyId });
        }
      } catch (dbErr) {
        console.warn("Notice updating favorite in DB:", dbErr);
      }
    }
  };

  return {
    favorites,
    loading,
    toggleFavorite,
    refresh: fetchFavorites
  };
}
