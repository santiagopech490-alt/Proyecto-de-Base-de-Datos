import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createClient } from './client';
import { createBrowserClient } from '@supabase/ssr';

vi.mock('@supabase/ssr', () => ({
  createBrowserClient: vi.fn()
}));

describe('Supabase Client Factory', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key';
  });

  it('should create a browser client with correct config', () => {
    createClient();
    expect(createBrowserClient).toHaveBeenCalledWith(
      'https://example.supabase.co',
      'test-key'
    );
  });
});
