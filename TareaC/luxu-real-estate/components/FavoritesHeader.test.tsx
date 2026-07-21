import { render, screen } from '@testing-library/react';
import FavoritesHeader from './FavoritesHeader';
import { describe, it, expect, vi } from 'vitest';

describe('FavoritesHeader', () => {
  it('should render the title and property count', () => {
    render(<FavoritesHeader count={4} sortBy="date" onSortChange={() => {}} view="grid" onViewChange={() => {}} />);
    expect(screen.getByText('Your Favorites')).toBeDefined();
    expect(screen.getByText('You have 4 saved properties waiting for you.')).toBeDefined();
  });

  it('should render sort and view controls', () => {
    render(<FavoritesHeader count={4} sortBy="date" onSortChange={() => {}} view="grid" onViewChange={() => {}} />);
    // Check for grid/list view icons
    expect(screen.getAllByText('grid_view').length).toBeGreaterThan(0);
    expect(screen.getAllByText('view_list').length).toBeGreaterThan(0);
    // Check for Select existence
    expect(screen.getAllByRole('combobox').length).toBeGreaterThan(0);
  });
});
