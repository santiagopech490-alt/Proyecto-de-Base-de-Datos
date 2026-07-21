import { renderHook, act } from '@testing-library/react';
import { useFavorites } from './useFavorites';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock Supabase
vi.mock('../supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => Promise.resolve({ data: [], error: null })),
      })),
      insert: vi.fn(() => Promise.resolve({ error: null })),
      delete: vi.fn(() => ({
        eq: vi.fn(() => ({
          eq: vi.fn(() => Promise.resolve({ error: null })),
        })),
      })),
    })),
    auth: {
      getUser: vi.fn(() => Promise.resolve({ data: { user: null }, error: null })),
    },
  },
}));

describe('useFavorites hook', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should start with an empty list if nothing in localStorage', async () => {
    const { result } = renderHook(() => useFavorites());
    // Wait for the initial effect to complete
    await act(async () => {
        await Promise.resolve();
    });
    expect(result.current.favorites).toEqual([]);
  });

  it('should add a property to local favorites when not logged in', async () => {
    const { result } = renderHook(() => useFavorites());
    
    await act(async () => {
      await result.current.toggleFavorite('prop-123');
    });

    expect(result.current.favorites).toContain('prop-123');
    expect(JSON.parse(localStorage.getItem('user_favorites') || '[]')).toContain('prop-123');
  });

  it('should remove a property from local favorites when toggled again', async () => {
    localStorage.setItem('user_favorites', JSON.stringify(['prop-123']));
    const { result } = renderHook(() => useFavorites());

    // Wait for fetchFavorites
    await act(async () => {
        await Promise.resolve();
    });
    
    expect(result.current.favorites).toContain('prop-123');

    await act(async () => {
      await result.current.toggleFavorite('prop-123');
    });

    expect(result.current.favorites).not.toContain('prop-123');
    expect(JSON.parse(localStorage.getItem('user_favorites') || '[]')).not.toContain('prop-123');
  });
});
