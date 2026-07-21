import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
// @ts-ignore - We expect this to fail because the file doesn't exist yet
import QuickStats from './QuickStats';

describe('QuickStats Component', () => {
  const mockStats = {
    saved: 12,
    visits: 3,
    sold: 1
  };

  it('renders all stats correctly', () => {
    render(<QuickStats stats={mockStats} />);
    
    // Check values
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument(); // Assuming 2-digit format as per imagen10
    expect(screen.getByText('1')).toBeInTheDocument();
    
    // Check labels
    expect(screen.getByText(/SAVED/i)).toBeInTheDocument();
    expect(screen.getByText(/VISITS/i)).toBeInTheDocument();
    expect(screen.getByText(/SOLD/i)).toBeInTheDocument();
  });
});
