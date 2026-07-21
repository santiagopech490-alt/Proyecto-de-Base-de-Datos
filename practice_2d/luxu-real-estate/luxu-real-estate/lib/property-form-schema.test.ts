import { describe, it, expect } from 'vitest';
import { propertyFormSchema } from './property-form-schema';

describe('Property Form Schema', () => {
  it('should validate a correct property object', () => {
    const validData = {
      title: 'Luxury Mansion in Beverly Hills',
      price: 15000000,
      property_type: 'House',
      listing_status: 'Available',
      description: 'A beautiful luxury mansion with pool and gym.',
      address: '123 Sunset Blvd, Beverly Hills, CA',
      latitude: 34.0736,
      longitude: -118.4004,
      sqft: 12000,
      built_year: 2022,
      bedrooms: 8,
      bathrooms: 10,
      garage: 6,
      amenities: ['Swimming Pool', 'Gym', 'Wine Cellar']
    };
    
    const result = propertyFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should fail validation if required fields are missing', () => {
    const invalidData = {
      title: 'A',
      price: -100
    };
    
    const result = propertyFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      expect(fieldErrors.title).toBeDefined();
      expect(fieldErrors.price).toBeDefined();
      expect(fieldErrors.property_type).toBeDefined();
    }
  });
});
