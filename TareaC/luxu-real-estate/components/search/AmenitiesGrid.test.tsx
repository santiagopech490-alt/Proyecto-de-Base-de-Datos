import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AmenitiesGrid } from './AmenitiesGrid';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';

vi.mock('@/lib/hooks/usePropertyFilters', () => ({
  usePropertyFilters: vi.fn(),
}));

describe('AmenitiesGrid', () => {
  const mockSetFilter = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (usePropertyFilters as any).mockReturnValue({
      filters: {},
      setFilter: mockSetFilter,
    });
  });

  it('should render all amenities', () => {
    render(<AmenitiesGrid />);
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument();
    expect(screen.getByText('Gym')).toBeInTheDocument();
    expect(screen.getByText('Parking')).toBeInTheDocument();
  });

  it('should call setFilter when an amenity is toggled', () => {
    render(<AmenitiesGrid />);
    const gymButton = screen.getByText('Gym').closest('button')!;
    
    fireEvent.click(gymButton);
    expect(mockSetFilter).toHaveBeenCalledWith('amenities', ['Gym']);
  });
});
