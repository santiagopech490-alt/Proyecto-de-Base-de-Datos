import { describe, it, expect, vi } from 'vitest';
import { getPropertiesByOwner, calculateKPIs } from './property-service';
import { Property } from '@/types/property';

describe('property-service', () => {
  it('fetches and filters properties by owner_id', async () => {
    // This test should fail until implemented
    const properties = await getPropertiesByOwner('user123');
    expect(properties).toBeDefined();
    expect(properties.every(p => p.agentId === 'user123')).toBe(true);
  });

  it('calculates KPIs correctly', () => {
    const mockProperties: Property[] = [
      { id: '1', status: 'active' } as Property,
      { id: '2', status: 'active' } as Property,
      { id: '3', status: 'pending' } as Property,
    ];
    const kpis = calculateKPIs(mockProperties);
    expect(kpis.total).toBe(3);
    expect(kpis.active).toBe(2);
    expect(kpis.pending).toBe(1);
  });
});
