import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PropertyKPIs } from '../PropertyKPIs';

describe('PropertyKPIs', () => {
  it('renders KPI cards with correct values', () => {
    const kpis = { total: 24, active: 18, pending: 4 };
    render(<PropertyKPIs {...kpis} />);
    
    expect(screen.getByText('24')).toBeDefined();
    expect(screen.getByText('18')).toBeDefined();
    expect(screen.getByText('4')).toBeDefined();
  });
});
