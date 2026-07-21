import { supabase } from './supabase';
import { Database } from '../types/supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Property = Database['public']['Tables']['properties']['Row'];

/**
 * Service for handling user dashboard data.
 */
export const userDashboardService = {
  /**
   * Fetches a user's profile with all additional fields.
   */
  async getUserProfile(userId: string): Promise<Profile> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId);

    if (error) {
      throw new Error(`Error fetching user profile: ${error.message}`);
    }

    if (!data || data.length === 0) {
      throw new Error('No profile found for user');
    }

    return data[0];
  },

  /**
   * Fetches properties favorited by the user.
   */
  async getFavorites(userId: string): Promise<Property[]> {
    // First, get the favorite property references from user_favorites table
    const { data: favorites, error: favError } = await supabase
      .from('user_favorites')
      .select('property_id')
      .eq('user_id', userId);

    if (favError) {
      throw new Error(`Error fetching favorites: ${favError.message}`);
    }

    if (!favorites || favorites.length === 0) {
      return [];
    }

    const rawRefs = favorites.map(f => f.property_id);
    
    // Identify valid UUIDs vs Slugs
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const validUuidIds = rawRefs.filter(id => uuidRegex.test(id));
    const validSlugs = rawRefs.filter(id => !validUuidIds.includes(id));

    let properties: Property[] = [];

    // Fetch by ID (UUIDs)
    if (validUuidIds.length > 0) {
      const { data } = await supabase.from('properties').select('*').in('id', validUuidIds);
      if (data) properties = [...properties, ...data];
    }
    
    // Fetch by Slug (Strings)
    if (validSlugs.length > 0) {
      const { data } = await supabase.from('properties').select('*').in('slug', validSlugs);
      if (data) properties = [...properties, ...data];
    }

    return properties;
  },

  /**
   * Fetches upcoming appointments/visits for the user.
   */
  async getAppointments(userId: string): Promise<any[]> {
    // Assuming a 'bookings' table exists based on previous tracks
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        properties (*)
      `)
      .eq('user_id', userId)
      .gte('booking_date_time', new Date().toISOString())
      .order('booking_date_time', { ascending: true });

    if (error) {
      // If table doesn't exist yet, return empty array instead of failing
      if (error.code === '42P01') return [];
      throw new Error(`Error fetching appointments: ${error.message}`);
    }

    return data || [];
  },

  /**
   * Fetches the user's recent activity feed.
   * For now, this is a mock or derived from other tables as activity_logs is out of scope.
   */
  async getActivityFeed(userId: string): Promise<any[]> {
    // This could combine favorites, bookings, and profile updates.
    // For now, we'll return an empty array as it's not fully defined in schema yet.
    return [];
  }
};
