import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchFavoriteProperties } from './favorites-service';
import { supabase } from '@/lib/supabase';

vi.mock('@/lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      in: vi.fn().mockResolvedValue({
        data: [
          { id: '1', title: 'Luxury Villa', price: 1250000 },
          { id: '2', title: 'Modern Loft', price: 850000 }
        ],
        error: null
      }),
    })),
  },
}));

describe('favorites-service', () => {
  it('should fetch properties by ID array', async () => {
    const props = await fetchFavoriteProperties(['1', '2']);
    expect(props).toHaveLength(2);
    expect(props[0].title).toBe('Luxury Villa');
    expect(supabase.from).toHaveBeenCalledWith('properties');
  });
});
