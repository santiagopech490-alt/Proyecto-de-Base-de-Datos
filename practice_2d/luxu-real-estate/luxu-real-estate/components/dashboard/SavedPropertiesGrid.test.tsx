import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
// @ts-ignore - We expect this to fail because the file doesn't exist yet
import SavedPropertiesGrid from './SavedPropertiesGrid';

describe('SavedPropertiesGrid Component', () => {
  const mockProperties = [
    {
      id: '1',
      title: 'The Glass Pavilion',
      city: 'Montecito, California',
      price: 2450000,
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: 3200,
      images: ['https://example.com/glass-pavilion.png']
    }
  ];

  it('renders property cards correctly', () => {
    render(<SavedPropertiesGrid properties={mockProperties} isLoading={false} />);
    
    expect(screen.getByText('The Glass Pavilion')).toBeInTheDocument();
    expect(screen.getByText('Montecito, California')).toBeInTheDocument();
    expect(screen.getByText('$2,450,000')).toBeInTheDocument();
  });

  it('renders empty state if no properties', () => {
    render(<SavedPropertiesGrid properties={[]} isLoading={false} />);
    expect(screen.getByText(/no saved properties/i)).toBeInTheDocument();
  });
});
