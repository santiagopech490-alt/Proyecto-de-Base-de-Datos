import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DashboardTabs from './DashboardTabs';

describe('DashboardTabs Component', () => {
  const mockChildren = {
    saved: <div data-testid="saved-content">Saved Content</div>,
    visits: <div data-testid="visits-content">Visits Content</div>,
    settings: <div data-testid="settings-content">Settings Content</div>
  };

  it('renders correctly and defaults to saved tab', () => {
    render(<DashboardTabs children={mockChildren} />);
    
    expect(screen.getByText('Saved Properties')).toBeInTheDocument();
    expect(screen.getByTestId('saved-content')).toBeInTheDocument();
    
    // Non-active tabs content might be in DOM but hidden depending on shadcn implementation
    // Usually it's hidden or not rendered
  });

  it('switches tabs on click', () => {
    render(<DashboardTabs children={mockChildren} />);
    
    const visitsTab = screen.getByText('Scheduled Visits');
    fireEvent.click(visitsTab);
    
    expect(screen.getByTestId('visits-content')).toBeInTheDocument();
  });
});
