import { describe, it, expect } from 'vitest';
import { supabase } from './supabase';

describe('Profiles Table Integrity', () => {
  it('should have the new columns for user profile dashboard', async () => {
    // We select a single row to check if columns exist without failing the query
    const { data, error } = await supabase
      .from('profiles')
      .select('location, member_since, email_notifications, push_notifications, sms_notifications')
      .limit(1);
    
    // If the columns don't exist, Supabase will return an error
    if (error) {
      console.error('Column check failed:', error.message);
    }
    
    expect(error).toBeNull();
    expect(data).toBeDefined();
  });
});
