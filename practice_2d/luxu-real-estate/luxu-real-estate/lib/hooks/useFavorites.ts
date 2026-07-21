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
        console.warn("Auth check aborted/stolen (ignoring):", err.message);
        return; // Exit silently
      }
      console.error("Unexpected auth error:", err);
    }

    if (user) {
      // Fetch from Supabase
      const { data, error } = await supabase
        .from('user_favorites')
        .select('property_id')
        .eq('user_id', user.id);

      if (error) {
        if ((error as any).name === 'AbortError' || (error as any).message?.includes('AbortError')) {
          console.warn("Supabase fetch aborted (ignoring):", error);
        } else {
          console.error("Supabase fetch error details:", JSON.stringify(error, null, 2));
        }
        return;
      }
      if (data) {
        const remoteIds = data.map((fav: any) => fav.property_id);
        setFavorites(remoteIds);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteIds));
      }
    } else {
      // Fetch from localStorage
      const local = localStorage.getItem(STORAGE_KEY);
      if (local) {
        setFavorites(JSON.parse(local));
      }
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const toggleFavorite = async (propertyId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    console.log("toggleFavorite action for:", propertyId, "User ID:", user?.id);
    let newFavorites: string[];

    if (favorites.includes(propertyId)) {
      console.log("Removing favorite from state and DB");
      newFavorites = favorites.filter(id => id !== propertyId);
      
      if (user) {
        const { error } = await supabase
          .from('user_favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('property_id', propertyId);
        if (error) console.error("Error deleting from DB:", error);
      }
    } else {
      console.log("Adding favorite to state and DB");
      newFavorites = [...favorites, propertyId];
      
      if (user) {
        const { error } = await supabase
          .from('user_favorites')
          .insert({ user_id: user.id, property_id: propertyId });
        if (error) console.error("Error inserting to DB:", error);
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

    await supabase
      .from('user_favorites')
      .insert(favsToInsert);

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
