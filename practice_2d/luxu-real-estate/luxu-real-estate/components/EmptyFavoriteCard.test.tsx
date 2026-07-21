import { render, screen } from '@testing-library/react';
import EmptyFavoriteCard from './EmptyFavoriteCard';
import { describe, it, expect } from 'vitest';

describe('EmptyFavoriteCard', () => {
  it('should render the CTA text correctly', () => {
    render(<EmptyFavoriteCard />);
    expect(screen.getByText('Discover More')).toBeDefined();
    expect(screen.getByText('Browse Listings')).toBeDefined();
  });
});
