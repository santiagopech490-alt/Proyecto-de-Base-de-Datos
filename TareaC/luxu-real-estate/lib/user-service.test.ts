import { describe, it, expect } from 'vitest';
import { fetchUserProfiles } from './user-service';

describe('fetchUserProfiles', () => {
  it('should fetch user profiles from Supabase', async () => {
    const profiles = await fetchUserProfiles();
    expect(profiles).toBeDefined();
    expect(Array.isArray(profiles)).toBe(true);
  });
});
