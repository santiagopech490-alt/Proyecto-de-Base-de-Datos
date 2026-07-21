import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePropertyFilters } from './usePropertyFilters';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
  useRouter: vi.fn(),
  usePathname: vi.fn(),
}));

describe('usePropertyFilters', () => {
  const mockPush = vi.fn();
  const mockPathname = '/properties';

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue({ push: mockPush });
    (usePathname as any).mockReturnValue(mockPathname);
  });

  it('should parse filters from URL search params', () => {
    const mockParams = new URLSearchParams({
      location: 'San Francisco',
      minPrice: '1000000',
      maxPrice: '5000000',
      type: 'House',
      beds: '3',
      baths: '2',
      amenities: 'Pool,Gym'
    });
    (useSearchParams as any).mockReturnValue(mockParams);

    const { result } = renderHook(() => usePropertyFilters());

    expect(result.current.filters).toEqual({
      location: 'San Francisco',
      minPrice: 1000000,
      maxPrice: 5000000,
      type: 'House',
      beds: 3,
      baths: 2,
      amenities: ['Pool', 'Gym']
    });
  });

  it('should update URL when setFilter is called', () => {
    (useSearchParams as any).mockReturnValue(new URLSearchParams());
    const { result } = renderHook(() => usePropertyFilters());

    act(() => {
      result.current.setFilter('location', 'Miami');
    });

    expect(mockPush).toHaveBeenCalledWith('/properties?location=Miami', { scroll: false });
  });

  it('should handle numeric types correctly in setFilter', () => {
    (useSearchParams as any).mockReturnValue(new URLSearchParams());
    const { result } = renderHook(() => usePropertyFilters());

    act(() => {
      result.current.setFilter('minPrice', 1500000);
    });

    expect(mockPush).toHaveBeenCalledWith('/properties?minPrice=1500000', { scroll: false });
  });

  it('should handle array types correctly in setFilter', () => {
    (useSearchParams as any).mockReturnValue(new URLSearchParams());
    const { result } = renderHook(() => usePropertyFilters());

    act(() => {
      result.current.setFilter('amenities', ['Pool', 'Gym']);
    });

    expect(mockPush).toHaveBeenCalledWith('/properties?amenities=Pool%2CGym', { scroll: false });
  });

  it('should remove filter when value is empty', () => {
    const mockParams = new URLSearchParams({ location: 'Miami' });
    (useSearchParams as any).mockReturnValue(mockParams);
    const { result } = renderHook(() => usePropertyFilters());

    act(() => {
      result.current.setFilter('location', '');
    });

    expect(mockPush).toHaveBeenCalledWith('/properties', { scroll: false });
  });

  it('should clear all filters', () => {
    const mockParams = new URLSearchParams({ location: 'Miami' });
    (useSearchParams as any).mockReturnValue(mockParams);
    const { result } = renderHook(() => usePropertyFilters());

    act(() => {
      result.current.clearFilters();
    });

    expect(mockPush).toHaveBeenCalledWith('/properties', { scroll: false });
  });
});
