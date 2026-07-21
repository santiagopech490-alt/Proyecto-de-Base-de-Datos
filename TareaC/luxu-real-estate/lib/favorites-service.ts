import { supabase } from '@/lib/supabase';

export async function fetchFavoriteProperties(ids: string[]) {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .in('id', ids);

  if (error) throw error;
  return data || [];
}
