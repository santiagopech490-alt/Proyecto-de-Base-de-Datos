import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
// @ts-ignore - We expect this to fail because the file doesn't exist yet
import UpcomingVisitsList from './UpcomingVisitsList';

describe('UpcomingVisitsList Component', () => {
  const mockVisits = [
    {
      id: '1',
      visit_date: '2026-10-24T14:00:00Z',
      properties: {
        title: 'Skyline Penthouse Tour',
        images: ['https://example.com/penthouse.png']
      },
      agent_name: 'Sarah Jenkins'
    }
  ];

  it('renders visit details correctly', () => {
    render(<UpcomingVisitsList visits={mockVisits} isLoading={false} />);
    
    expect(screen.getByText('Skyline Penthouse Tour')).toBeInTheDocument();
    // Use a flexible matcher since test runner environment might adjust the time
    expect(screen.getByText((content) => content.includes('OCT 24'))).toBeInTheDocument();
    expect(screen.getByText(/Agent: Sarah Jenkins/i)).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<UpcomingVisitsList visits={mockVisits} isLoading={false} />);
    
    expect(screen.getByText('Reschedule')).toBeInTheDocument();
    expect(screen.getByText('Get Directions')).toBeInTheDocument();
  });

  it('renders empty state if no visits', () => {
    render(<UpcomingVisitsList visits={[]} isLoading={false} />);
    expect(screen.getByText(/no upcoming visits/i)).toBeInTheDocument();
  });
});
