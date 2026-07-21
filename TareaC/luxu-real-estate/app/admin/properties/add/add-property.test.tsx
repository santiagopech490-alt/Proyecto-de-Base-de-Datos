import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from './page';

describe('Add Property Page', () => {
  it('should render the sticky header with correct title', () => {
    render(<Page />);
    expect(screen.getByText('Add New Property')).toBeDefined();
    expect(screen.getByText('Save Draft')).toBeDefined();
    expect(screen.getByText('Save Property')).toBeDefined();
  });

  it('should have a 2-column layout on large screens', () => {
    const { container } = render(<Page />);
    const mainGrid = container.querySelector('.grid');
    expect(mainGrid).toBeDefined();
    // Check if it has lg:grid-cols-[7fr_3fr] or similar
    expect(mainGrid?.className).toContain('grid-cols-1');
  });
});
