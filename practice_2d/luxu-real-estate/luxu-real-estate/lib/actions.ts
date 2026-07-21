'use server';

import { supabase } from './supabase';
import { revalidatePath } from 'next/cache';
import { PropertyFilters } from './hooks/usePropertyFilters';

export async function getPropertyCount(filters: PropertyFilters) {
  let query = supabase
    .from('properties')
    .select('id', { count: 'exact', head: true });

  if (filters.location) {
    query = query.ilike('location', `%${filters.location}%`);
  }
  if (filters.minPrice) {
    query = query.gte('price', filters.minPrice);
  }
  if (filters.maxPrice) {
    query = query.lte('price', filters.maxPrice);
  }
  if (filters.type) {
    query = query.eq('type', filters.type);
  }
  if (filters.beds) {
    query = query.gte('beds', filters.beds);
  }
  if (filters.baths) {
    query = query.gte('baths', filters.baths);
  }
  if (filters.amenities && filters.amenities.length > 0) {
    query = query.contains('amenities', filters.amenities);
  }

  const { count, error } = await query;

  if (error) {
    console.error('Error fetching property count:', error);
    return 0;
  }

  return count || 0;
}

export async function updateUserRole(userId: string, role: string) {
  const { error } = await supabase
    .from('profiles')
    .update({ role })
    .eq('id', userId);

  if (error) throw error;
  revalidatePath('/admin/users');
}

export async function updateUserStatus(userId: string, status: string) {
  const { error } = await supabase
    .from('profiles')
    .update({ status })
    .eq('id', userId);

  if (error) throw error;
  revalidatePath('/admin/users');
}
