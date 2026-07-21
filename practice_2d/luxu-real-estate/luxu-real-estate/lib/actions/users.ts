'use server';

import { supabase } from '../supabase';
import { UserFormValues } from '../user-form-schema'; // Ajustado la ruta de importación

export async function createUser(data: UserFormValues) {
  // Generamos un ID único para el perfil
  const { data: profileData, error } = await supabase
    .from('profiles')
    .insert([
      {
        full_name: data.full_name,
        email: data.email,
        role: data.role,
        status: 'Active',
      }
    ]);

  if (error) {
    console.error('Error inserting user:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
