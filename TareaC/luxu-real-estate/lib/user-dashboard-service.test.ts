import { describe, it, expect, vi, beforeEach } from 'vitest';
import { userDashboardService } from './user-dashboard-service';
import { supabase } from './supabase';

// Mock the supabase client
vi.mock('./supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn(),
          gte: vi.fn(() => ({
            order: vi.fn(),
          })),
        })),
        in: vi.fn(),
      })),
    })),
  },
}));

describe('User Dashboard Service', () => {
  const userId = 'test-user-id';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch user profile with additional fields', async () => {
    const mockProfile = { id: userId, full_name: 'Test User', location: 'New York', member_since: '2021-01-01' };
    const singleMock = vi.fn().mockResolvedValue({ data: mockProfile, error: null });
    const eqMock = vi.fn().mockReturnValue({ single: singleMock });
    const selectMock = vi.fn().mockReturnValue({ eq: eqMock });
    
    (supabase.from as any).mockReturnValue({ select: selectMock });

    const profile = await userDashboardService.getUserProfile(userId);
    
    expect(profile).toBeDefined();
    expect(profile.location).toBe('New York');
    expect(profile.member_since).toBe('2021-01-01');
  });

  it('should fetch favorited properties', async () => {
    const mockFavorites = [{ property_id: 'prop-1' }];
    const mockProperties = [{ id: 'prop-1', title: 'Modern Loft' }];
    
    const inMock = vi.fn().mockResolvedValue({ data: mockProperties, error: null });
    const eqMock = vi.fn().mockResolvedValue({ data: mockFavorites, error: null });
    const selectMock = vi.fn()
      .mockReturnValueOnce({ eq: eqMock })
      .mockReturnValueOnce({ in: inMock });
    
    (supabase.from as any).mockReturnValue({ select: selectMock });

    const favorites = await userDashboardService.getFavorites(userId);
    
    expect(Array.isArray(favorites)).toBe(true);
    expect(favorites[0].title).toBe('Modern Loft');
  });

  it('should fetch upcoming appointments', async () => {
    const mockAppointments = [{ id: 'booking-1', visit_date: '2026-01-01', properties: { title: 'Modern Loft' } }];
    const orderMock = vi.fn().mockResolvedValue({ data: mockAppointments, error: null });
    const gteMock = vi.fn().mockReturnValue({ order: orderMock });
    const eqMock = vi.fn().mockReturnValue({ gte: gteMock });
    const selectMock = vi.fn().mockReturnValue({ eq: eqMock });
    
    (supabase.from as any).mockReturnValue({ select: selectMock });

    const appointments = await userDashboardService.getAppointments(userId);
    
    expect(Array.isArray(appointments)).toBe(true);
    expect(appointments[0].visit_date).toBe('2026-01-01');
  });

  it('should fetch user activity feed', async () => {
    const activity = await userDashboardService.getActivityFeed(userId);
    expect(Array.isArray(activity)).toBe(true);
  });
});
