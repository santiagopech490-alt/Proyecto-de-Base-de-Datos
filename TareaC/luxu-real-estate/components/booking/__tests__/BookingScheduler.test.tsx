import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BookingScheduler } from '../BookingScheduler';

describe('BookingScheduler', () => {
  it('renders calendar and time slots correctly', () => {
    const mockAvailability = {
      date: '2026-04-12',
      slots: [
        { time: '09:00 AM', isAvailable: true },
        { time: '10:00 AM', isAvailable: true },
      ]
    };

    render(<BookingScheduler availability={mockAvailability} onBook={vi.fn()} />);

    // Check if calendar exists (Calendar component usually renders some date)
    expect(screen.getByRole('grid')).toBeDefined();
    
    // Check if time slots exist
    expect(screen.getByText('09:00 AM')).toBeDefined();
    expect(screen.getByText('10:00 AM')).toBeDefined();
  });
});
