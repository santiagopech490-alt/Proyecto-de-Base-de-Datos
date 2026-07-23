import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { Property } from '@/types/property';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ujnaghovqcejwmwusakr.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_6ZT_fKACRFHA-ny5MUc3PA_jAD54ZZQ';

const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey);

export const userDashboardService = {
  /**
   * Fetches user profile data from the `profiles` table.
   */
  async getProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }

      return data;
    } catch (err) {
      console.error('Failed to get profile:', err);
      return null;
    }
  },

  /**
   * Fetches saved properties for a specific user via `user_favorites` join.
   */
  async getFavorites(userId: string): Promise<Property[]> {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(userId)) return [];

    try {
      const { data: favorites, error: favError } = await supabase
        .from('user_favorites')
        .select('property_id')
        .eq('user_id', userId);

      if (favError || !favorites || favorites.length === 0) {
        return [];
      }

      const rawRefs = favorites.map(f => f.property_id);
      
      const validUuidIds = rawRefs.filter(id => uuidRegex.test(id));
      const validSlugs = rawRefs.filter(id => !validUuidIds.includes(id));

      let properties: Property[] = [];

      if (validUuidIds.length > 0) {
        const { data } = await supabase.from('properties').select('*').in('id', validUuidIds);
        if (data) properties = [...properties, ...data];
      }
      
      if (validSlugs.length > 0) {
        const { data } = await supabase.from('properties').select('*').in('slug', validSlugs);
        if (data) properties = [...properties, ...data];
      }

      return properties;
    } catch {
      return [];
    }
  },

  /**
   * Fetches upcoming appointments/visits for the user.
   */
  async getAppointments(userId: string): Promise<any[]> {
    let localAppointments: any[] = [];
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('luxe_user_appointments');
      if (saved) {
        try {
          localAppointments = JSON.parse(saved);
        } catch {}
      }
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(userId)) return localAppointments;

    try {
      const { data, error } = await supabase
        .from('appointments')
        .select(`
          *,
          properties (*)
        `)
        .eq('user_id', userId)
        .order('booking_date_time', { ascending: true });

      if (error || !data) {
        return localAppointments;
      }

      return [...localAppointments, ...data];
    } catch {
      return localAppointments;
    }
  },

  /**
   * Fetches the user's recent activity feed.
   */
  async getActivityFeed(userId: string): Promise<any[]> {
    return [];
  }
};
