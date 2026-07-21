import { describe, it, expect, vi, beforeEach } from 'vitest';
import { signInWithGoogle, signInWithGithub } from './auth';
import { createClient } from '../supabase/client';

const mockSupabase = {
  auth: {
    signInWithOAuth: vi.fn().mockResolvedValue({ data: {}, error: null })
  }
};

vi.mock('../supabase/client', () => ({
  createClient: vi.fn(() => mockSupabase)
}));

describe('Auth Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should trigger Google OAuth flow', async () => {
    await signInWithGoogle();
    expect(mockSupabase.auth.signInWithOAuth).toHaveBeenCalledWith({
      provider: 'google',
      options: {
        redirectTo: expect.stringContaining('/auth/callback')
      }
    });
  });

  it('should trigger GitHub OAuth flow', async () => {
    await signInWithGithub();
    expect(mockSupabase.auth.signInWithOAuth).toHaveBeenCalledWith({
      provider: 'github',
      options: {
        redirectTo: expect.stringContaining('/auth/callback')
      }
    });
  });
});
