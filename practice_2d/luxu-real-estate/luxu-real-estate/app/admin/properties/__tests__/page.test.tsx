import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AdminPropertiesPage from '../page';
import { getPropertiesByOwner } from '@/lib/services/property-service';

// Mocking del servicio
vi.mock('@/lib/services/property-service', () => ({
  getPropertiesByOwner: vi.fn(),
  calculateKPIs: vi.fn(() => ({ total: 1, active: 1, pending: 0 })),
}));

describe('AdminPropertiesPage', () => {
  it('renders dashboard with properties data', async () => {
    (getPropertiesByOwner as any).mockResolvedValue([
      { id: '1', slug: 'test', title: 'Test', price: 100, location: 'Loc', beds: 1, baths: 1, sqft: 100, garage: 0, description: '', amenities: [], images: [], agentId: 'u', status: 'active' }
    ]);
    
    // Renderizamos el componente servidor como un componente normal para el test
    const Component = await AdminPropertiesPage();
    render(Component);
    
    expect(screen.getByText('My Properties')).toBeDefined();
    expect(screen.getByText('Test')).toBeDefined();
  });
});
