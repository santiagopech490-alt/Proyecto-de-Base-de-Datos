import { render, screen } from '@testing-library/react';
import FavoriteCard from './FavoriteCard';
import { describe, it, expect, vi } from 'vitest';

const mockProperty = {
  id: '1',
  title: 'Modern Luxury Villa',
  price: 1250000,
  address: '4502 Ocean Drive, Miami Beach, FL',
  bedrooms: 3,
  bathrooms: 2,
  sqft: 2100,
  images: ['https://example.com/image.jpg'],
  listing_status: 'For Sale'
};

describe('FavoriteCard', () => {
  it('should render property details correctly', () => {
    render(<FavoriteCard property={mockProperty} isFavorite={true} onToggle={() => {}} />);
    
    expect(screen.getByText('$1,250,000')).toBeDefined();
    expect(screen.getByText('4502 Ocean Drive, Miami Beach, FL')).toBeDefined();
    expect(screen.getByText('3 Beds')).toBeDefined();
    expect(screen.getByText('2 Baths')).toBeDefined();
    expect(screen.getByText('2,100 sqft')).toBeDefined();
  });

  it('should show the correct favorite icon state', () => {
    const { rerender } = render(<FavoriteCard property={mockProperty} isFavorite={true} onToggle={() => {}} />);
    // Check for filled heart (active)
    // We use queryAllByText because Material Icons text content might appear in hidden elements
    expect(screen.getAllByText('favorite').length).toBeGreaterThan(0);

    rerender(<FavoriteCard property={mockProperty} isFavorite={false} onToggle={() => {}} />);
    // Check for outline heart (inactive)
    expect(screen.getAllByText('favorite_border').length).toBeGreaterThan(0);
  });
});
