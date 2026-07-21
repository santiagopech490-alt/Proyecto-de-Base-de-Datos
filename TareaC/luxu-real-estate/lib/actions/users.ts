'use server';

import { supabase } from '../supabase';
import { UserFormValues } from './user-form-schema';

export async function createUser(data: UserFormValues) {
  const { data: userData, error } = await supabase.auth.signUp({
    email: data.email,
    password: 'temporaryPassword123!', // En un sistema real esto se enviaría por email
    options: {
      data: {
        full_name: data.full_name,
        role: data.role,
      },
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  // Opcionalmente, puedes actualizar el perfil en la tabla profiles si no se hizo automáticamente
  return { success: true, user: userData.user };
}
