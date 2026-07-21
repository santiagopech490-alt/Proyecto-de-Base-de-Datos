import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AmenitiesGrid } from '../AmenitiesGrid';

describe('AmenitiesGrid', () => {
  it('renders all amenities correctly', () => {
    const amenities = ['Pool', 'Gym', 'WiFi'];
    render(<AmenitiesGrid amenities={amenities} />);
    
    amenities.forEach(amenity => {
      expect(screen.getByText(amenity)).toBeDefined();
    });
  });
});
