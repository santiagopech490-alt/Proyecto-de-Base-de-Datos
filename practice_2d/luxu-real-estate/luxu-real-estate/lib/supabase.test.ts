import { describe, it, expect } from 'vitest';
import { supabase } from './supabase';

describe('Supabase Client', () => {
  it('should be initialized correctly', () => {
    expect(supabase).toBeDefined();
    expect(supabase.auth).toBeDefined();
    expect(supabase.from).toBeDefined();
  });
});
