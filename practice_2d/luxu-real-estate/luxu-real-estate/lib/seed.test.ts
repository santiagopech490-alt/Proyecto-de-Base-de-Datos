import { describe, it, expect, beforeAll } from 'vitest';
import { supabase } from './supabase';
import { seedProperties } from './seed';

describe('Database Seeding', () => {
  it('should have 30 properties in the database', async () => {
    const { count, error } = await supabase
      .from('properties')
      .select('*', { count: 'exact', head: true });
    
    expect(error).toBeNull();
    expect(count).toBe(30);
  });
});
