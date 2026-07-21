import { describe, it, expect } from 'vitest';
import { supabase } from './supabase';

describe('User Favorites Table', () => {
  it('should have a user_favorites table', async () => {
    const { error } = await supabase
      .from('user_favorites')
      .select('*')
      .limit(1);
    
    // If it exists, error might be null or RLS related, but NOT "not found"
    if (error) {
      expect(error.message).not.toContain('relation "public.user_favorites" does not exist');
      expect(error.message).not.toContain('Could not find the table');
    }
  });

  it('should enforce RLS on user_favorites', async () => {
     // Insertion without auth should fail with RLS error
     const { error } = await supabase
       .from('user_favorites')
       .insert({ user_id: '00000000-0000-0000-0000-000000000000', property_id: '00000000-0000-0000-0000-000000000000' });
     
     expect(error).not.toBeNull();
     expect(error?.message).toContain('new row violates row-level security policy');
  });
});
