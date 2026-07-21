import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PriceRangeSlider } from './PriceRangeSlider';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';

vi.mock('@/lib/hooks/usePropertyFilters', () => ({
  usePropertyFilters: vi.fn(),
}));

describe('PriceRangeSlider', () => {
  const mockSetFilter = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (usePropertyFilters as any).mockReturnValue({
      filters: {},
      setFilter: mockSetFilter,
    });
  });

  it('should render with default values', () => {
    render(<PriceRangeSlider />);
    expect(screen.getByText(/Price Range/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Min Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Max Price/i)).toBeInTheDocument();
  });

  it('should display values from filters if present', () => {
    (usePropertyFilters as any).mockReturnValue({
      filters: { minPrice: 1200000, maxPrice: 4500000 },
      setFilter: mockSetFilter,
    });
    render(<PriceRangeSlider />);
    expect(screen.getByLabelText(/Min Price/i)).toHaveValue('1200000');
    expect(screen.getByLabelText(/Max Price/i)).toHaveValue('4500000');
  });

  it('should update filters when input values change', () => {
    render(<PriceRangeSlider />);
    const minInput = screen.getByLabelText(/Min Price/i);
    
    fireEvent.change(minInput, { target: { value: '1500000' } });
    fireEvent.blur(minInput);
    
    expect(mockSetFilter).toHaveBeenCalledWith('minPrice', 1500000);
  });
});
