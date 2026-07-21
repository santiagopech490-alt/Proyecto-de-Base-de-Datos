'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useFavorites } from './useFavorites';

const FavoritesContext = createContext<ReturnType<typeof useFavorites> | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const favoritesHook = useFavorites();
  return <FavoritesContext.Provider value={favoritesHook}>{children}</FavoritesContext.Provider>;
}

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavoritesContext must be used within a FavoritesProvider');
  return context;
};
