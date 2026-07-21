import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
// @ts-ignore
import ActivityFeed from './ActivityFeed';

describe('ActivityFeed Component', () => {
  const mockActivities = [
    { id: '1', action: 'Saved property', property_title: 'Modern Loft', timestamp: '2026-04-10T10:00:00Z' }
  ];

  it('renders activities correctly', () => {
    render(<ActivityFeed activities={mockActivities} isLoading={false} />);
    
    expect(screen.getByText(/Recent Activity/i)).toBeInTheDocument();
    expect(screen.getByText(/Saved property/i)).toBeInTheDocument();
    expect(screen.getByText(/Modern Loft/i)).toBeInTheDocument();
  });

  it('renders empty state', () => {
    render(<ActivityFeed activities={[]} isLoading={false} />);
    expect(screen.getByText(/no recent activity/i)).toBeInTheDocument();
  });
});
