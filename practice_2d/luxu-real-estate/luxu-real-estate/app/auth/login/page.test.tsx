import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './page';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as authService from '@/lib/services/auth';

// Mock useRouter
const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock the auth service
vi.mock('@/lib/services/auth', () => ({
  signInWithGoogle: vi.fn(),
  signInWithGithub: vi.fn(),
}));

// Mock Supabase client
vi.mock('@/lib/supabase/client', () => ({
  createClient: vi.fn(() => ({
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: null } }),
    },
  })),
}));

describe('Login Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the login card with branding after auth check', async () => {
    render(<LoginPage />);
    await waitFor(() => {
      expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
    });
    const brandingElements = screen.getAllByText(/LuxeEstate/i);
    expect(brandingElements.length).toBeGreaterThanOrEqual(1);
  });

  it('should render social login buttons', async () => {
    render(<LoginPage />);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Continue with Google/i })).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: /Continue with GitHub/i })).toBeInTheDocument();
  });

  it('should call signInWithGoogle when Google button is clicked', async () => {
    render(<LoginPage />);
    await waitFor(() => {
      const googleButton = screen.getByRole('button', { name: /Continue with Google/i });
      fireEvent.click(googleButton);
    });
    expect(authService.signInWithGoogle).toHaveBeenCalled();
  });

  it('should call signInWithGithub when GitHub button is clicked', async () => {
    render(<LoginPage />);
    await waitFor(() => {
      const githubButton = screen.getByRole('button', { name: /Continue with GitHub/i });
      fireEvent.click(githubButton);
    });
    expect(authService.signInWithGithub).toHaveBeenCalled();
  });

  it('should render registration link', async () => {
    render(<LoginPage />);
    await waitFor(() => {
      expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
    });
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
  });

  it('should render footer links', async () => {
    render(<LoginPage />);
    await waitFor(() => {
      expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
    });
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Help Center/i })).toBeInTheDocument();
  });
});
