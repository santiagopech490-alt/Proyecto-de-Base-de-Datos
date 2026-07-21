import { describe, it, expect, vi } from 'vitest';
import { createBooking, getAvailability } from './booking-service';
import { supabase } from '../supabase';

vi.mock('../supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      insert: vi.fn(() => ({
        select: vi.fn(() => ({
          single: vi.fn().mockResolvedValue({
            data: { id: 'new-id', status: 'pending' },
            error: null,
          }),
        })),
      })),
    })),
  },
}));

describe('booking-service', () => {
  it('createBooking should return created booking', async () => {
    const newBooking = {
      user_id: 'user-1',
      property_id: 'prop-1',
      booking_date_time: '2026-04-12T10:00:00Z',
      status: 'pending' as const,
    };
    const result = await createBooking(newBooking);
    expect(result.id).toBe('new-id');
  });

  it('getAvailability should return slots', async () => {
    const result = await getAvailability('prop-1', '2026-04-12');
    expect(result.slots.length).toBeGreaterThan(0);
  });
});
