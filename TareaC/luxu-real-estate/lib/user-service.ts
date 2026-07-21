import { supabase } from './supabase';
import { Database } from '../types/supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

export async function fetchUserProfiles(): Promise<Profile[]> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*');
  
  if (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
  
  console.log("Usuarios obtenidos desde Supabase:", data);
  return data || [];
}
