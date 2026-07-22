import { supabase } from './supabase';
import { Database } from '../types/supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

export async function fetchUserProfiles(): Promise<Profile[]> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*');
    
    if (error) {
      console.error("Error al obtener usuarios:", error);
      return [];
    }
    
    console.log("Usuarios obtenidos desde Supabase:", data);
    return data || [];
  } catch (err) {
    console.warn("Supabase unreachable, defaulting to empty profiles list:", err);
    return [];
  }
}
