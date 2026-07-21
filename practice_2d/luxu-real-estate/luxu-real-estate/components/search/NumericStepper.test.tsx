import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NumericStepper } from './NumericStepper';
import { usePropertyFilters } from '@/lib/hooks/usePropertyFilters';

vi.mock('@/lib/hooks/usePropertyFilters', () => ({
  usePropertyFilters: vi.fn(),
}));

describe('NumericStepper', () => {
  const mockSetFilter = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (usePropertyFilters as any).mockReturnValue({
      filters: {},
      setFilter: mockSetFilter,
    });
  });

  it('should render with label and initial value', () => {
    render(<NumericStepper label="Bedrooms" filterKey="beds" />);
    expect(screen.getByText('Bedrooms')).toBeInTheDocument();
    expect(screen.getByText('Any')).toBeInTheDocument();
  });

  it('should display value from filters', () => {
    (usePropertyFilters as any).mockReturnValue({
      filters: { beds: 3 },
      setFilter: mockSetFilter,
    });
    render(<NumericStepper label="Bedrooms" filterKey="beds" />);
    expect(screen.getByText('3+')).toBeInTheDocument();
  });

  it('should call setFilter with incremented value', () => {
    (usePropertyFilters as any).mockReturnValue({
      filters: { beds: 2 },
      setFilter: mockSetFilter,
    });
    render(<NumericStepper label="Bedrooms" filterKey="beds" />);
    const plusButton = screen.getByLabelText(/increment/i);
    
    fireEvent.click(plusButton);
    expect(mockSetFilter).toHaveBeenCalledWith('beds', 3);
  });

  it('should call setFilter with decremented value', () => {
    (usePropertyFilters as any).mockReturnValue({
      filters: { beds: 2 },
      setFilter: mockSetFilter,
    });
    render(<NumericStepper label="Bedrooms" filterKey="beds" />);
    const minusButton = screen.getByLabelText(/decrement/i);
    
    fireEvent.click(minusButton);
    expect(mockSetFilter).toHaveBeenCalledWith('beds', 1);
  });

  it('should remove filter when value goes below 1', () => {
    (usePropertyFilters as any).mockReturnValue({
      filters: { beds: 1 },
      setFilter: mockSetFilter,
    });
    render(<NumericStepper label="Bedrooms" filterKey="beds" />);
    const minusButton = screen.getByLabelText(/decrement/i);
    
    fireEvent.click(minusButton);
    expect(mockSetFilter).toHaveBeenCalledWith('beds', undefined);
  });
});
