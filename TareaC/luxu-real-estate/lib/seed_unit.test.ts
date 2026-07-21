import { describe, it, expect, vi } from 'vitest';
import { supabase } from './supabase';
import { seedProperties } from './seed';

vi.mock('./supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      insert: vi.fn(() => ({
        select: vi.fn(() => Promise.resolve({ data: new Array(30).fill({}), error: null }))
      }))
    }))
  }
}));

describe('seedProperties', () => {
  it('should seed 30 properties with correct structure', async () => {
    const data = await seedProperties();
    expect(data.length).toBe(30);
    expect(supabase.from).toHaveBeenCalledWith('properties');
  });

  it('should throw error when insertion fails', async () => {
    const mockError = { message: 'DB Error' };
    vi.mocked(supabase.from).mockReturnValueOnce({
      insert: vi.fn(() => ({
        select: vi.fn(() => Promise.resolve({ data: null, error: mockError }))
      }))
    } as any);

    await expect(seedProperties()).rejects.toEqual(mockError);
  });
});
