import { describe, it, expect } from 'vitest';
import { supabase } from './supabase';

describe('Data Integrity Validation', () => {
  it('should have at least 30 properties', async () => {
    const { count, error } = await supabase
      .from('properties')
      .select('*', { count: 'exact', head: true });
    
    expect(error).toBeNull();
    expect(count).toBeGreaterThanOrEqual(30);
  });

  it('every property should have at least 5 images', async () => {
    const { data, error } = await supabase
      .from('properties')
      .select('id, title, images');
    
    expect(error).toBeNull();
    expect(data).not.toBeNull();
    
    data?.forEach(property => {
      expect(property.images.length).toBeGreaterThanOrEqual(5);
    });
  });

  it('every property should have essential fields', async () => {
    const { data, error } = await supabase
      .from('properties')
      .select('slug, title, price, city, address');
    
    expect(error).toBeNull();
    expect(data).not.toBeNull();
    
    data?.forEach(property => {
      expect(property.slug).toBeTruthy();
      expect(property.title).toBeTruthy();
      expect(property.price).toBeGreaterThan(0);
      expect(property.city).toBeTruthy();
      expect(property.address).toBeTruthy();
    });
  });
});
