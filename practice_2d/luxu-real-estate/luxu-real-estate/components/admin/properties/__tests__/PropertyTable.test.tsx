import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PropertyTable } from '../PropertyTable';
import { PropertyTableRow } from '../PropertyTableRow';
import { Property } from '@/types/property';

const mockProperty: Property = {
  id: '1',
  slug: 'test-prop',
  title: 'Test Property',
  price: 100000,
  location: 'Test City',
  beds: 2,
  baths: 1,
  sqft: 1000,
  garage: 1,
  description: 'Test desc',
  amenities: [],
  images: [],
  agentId: 'user1',
  status: 'active',
};

describe('PropertyTable & PropertyTableRow', () => {
  it('renders table headers', () => {
    render(<PropertyTable properties={[]} />);
    expect(screen.getByText(/Property Details/i)).toBeDefined();
    expect(screen.getByText(/Price/i)).toBeDefined();
  });

  it('renders row data correctly', () => {
    render(
      <table>
        <tbody>
          <PropertyTableRow property={mockProperty} />
        </tbody>
      </table>
    );
    expect(screen.getByText('Test Property')).toBeDefined();
    expect(screen.getByText(/Active/i)).toBeDefined();
  });
});
