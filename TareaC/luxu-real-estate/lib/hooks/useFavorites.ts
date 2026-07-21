'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

const STORAGE_KEY = 'user_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchFavorites = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    // ...

    if (user) {
      // Fetch from Supabase
      const { data, error } = await supabase
        .from('user_favorites')
        .select('property_id')
        .eq('user_id', user.id);

      if (!error && data) {
        console.log("Fetched favorites from Supabase:", data);
        const remoteIds = data.map((fav: any) => fav.property_id);
        console.log("Setting favorites state to:", remoteIds);
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
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, []); // Removed fetchFavorites from dependencies to break the loop

  const toggleFavorite = async (propertyId: string) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    console.log("toggleFavorite triggered for:", propertyId, "User:", user, "Error:", userError);
    let newFavorites: string[];

    if (favorites.includes(propertyId)) {
      console.log("Removing favorite...");
      newFavorites = favorites.filter(id => id !== propertyId);
      
      if (user) {
        const { error } = await supabase
          .from('user_favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('property_id', propertyId);
        console.log("Delete result:", error);
      }
    } else {
      console.log("Adding favorite...");
      newFavorites = [...favorites, propertyId];
      
      if (user) {
        const { error } = await supabase
          .from('user_favorites')
          .insert({ user_id: user.id, property_id: propertyId });
        
        if (error && error.code === '23505') {
          console.warn("Favorite already exists in DB, syncing state...");
          fetchFavorites();
        } else {
          console.log("Insert result:", error);
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

    // Sync all local favorites to Supabase
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
