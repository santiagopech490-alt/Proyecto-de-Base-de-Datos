import { renderHook, act } from '@testing-library/react';
import { useFavorites } from './useFavorites';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { supabase } from '../supabase';

// Mock Supabase
vi.mock('../supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => Promise.resolve({ data: [{ property_id: '1' }, { property_id: '2' }], error: null })),
      })),
      insert: vi.fn(() => Promise.resolve({ error: null })),
      delete: vi.fn(() => ({
        eq: vi.fn(() => ({
          eq: vi.fn(() => Promise.resolve({ error: null })),
        })),
      })),
    })),
    auth: {
      getUser: vi.fn(() => Promise.resolve({ data: { user: { id: 'user-123' } }, error: null })),
    },
  },
}));

describe('useFavorites hook synchronization', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should load favorites and simulate them in localStorage', async () => {
    const { result } = renderHook(() => useFavorites());
    
    // Esperar a que se ejecute fetchFavorites
    await act(async () => {
      await Promise.resolve();
    });
    
    // Verificamos que se hayan cargado las favoritas (IDs '1' y '2')
    expect(result.current.favorites).toContain('1');
    expect(result.current.favorites).toContain('2');
  });
});
