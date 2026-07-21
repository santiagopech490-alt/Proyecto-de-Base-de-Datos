import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PropertyHeader, KeyFeaturesRow } from '../PropertyHeader';

describe('PropertyHeader & KeyFeaturesRow', () => {
  it('renders property header correctly', () => {
    render(<PropertyHeader title="Test Villa" price={1000000} location="Test City" />);
    expect(screen.getByText('Test Villa')).toBeTruthy();
    expect(screen.getByText('$1,000,000')).toBeTruthy();
    expect(screen.getByText('Test City')).toBeTruthy();
  });

  it('renders key features correctly', () => {
    render(<KeyFeaturesRow beds={3} baths={2} sqft={2000} garage={1} />);

    expect(screen.getByText('3')).toBeTruthy();
    expect(screen.getByText('Bedrooms')).toBeTruthy();

    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('Bathrooms')).toBeTruthy();

    expect(screen.getByText('2,000')).toBeTruthy();
    expect(screen.getByText('Sq.Ft.')).toBeTruthy();

    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('Car Garage')).toBeTruthy();
  });
});
