import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
// @ts-ignore - We expect this to fail because the file doesn't exist yet
import UserHero from './UserHero';

describe('UserHero Component', () => {
  const mockUser = {
    full_name: 'Elena Richardson',
    location: 'San Francisco, CA',
    member_since: '2021-01-01',
    avatar_url: 'https://example.com/avatar.png'
  };

  it('renders user name and location correctly', () => {
    render(<UserHero user={mockUser} />);
    
    expect(screen.getByText('Elena Richardson')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Member since'))).toBeInTheDocument();
  });

  it('renders avatar with edit button overlay', () => {
    render(<UserHero user={mockUser} />);
    
    // Avatar might show fallback in test environment if image loading is not handled
    const avatarFallback = screen.getByText('ER');
    expect(avatarFallback).toBeInTheDocument();
    
    // Check for edit button
    const editButton = screen.getByLabelText(/Edit Profile/i);
    expect(editButton).toBeInTheDocument();
  });
});
