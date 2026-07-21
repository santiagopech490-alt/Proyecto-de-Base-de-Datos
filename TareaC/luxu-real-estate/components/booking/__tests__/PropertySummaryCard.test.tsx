import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PropertySummaryCard } from '../PropertySummaryCard';

describe('PropertySummaryCard', () => {
  it('renders property details correctly', () => {
    const mockProperty = {
      id: '1',
      title: 'Modern Villa in Beverly Hills',
      price: 4500000,
      address: '1284 Sunset Blvd, Beverly Hills, CA',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      images: ['/placeholder.jpg'],
      listing_status: 'FOR SALE'
    };

    render(<PropertySummaryCard property={mockProperty} agentName="Sarah Jenkins" />);

    expect(screen.getByText('Modern Villa in Beverly Hills')).toBeDefined();
    expect(screen.getByText('$4,500,000')).toBeDefined();
    expect(screen.getByText('1284 Sunset Blvd, Beverly Hills, CA')).toBeDefined();
    expect(screen.getByText('Sarah Jenkins')).toBeDefined();
    expect(screen.getByText('4 Beds')).toBeDefined();
    expect(screen.getByText('3 Baths')).toBeDefined();
    expect(screen.getByText('3,200 sqft')).toBeDefined();
  });
});
