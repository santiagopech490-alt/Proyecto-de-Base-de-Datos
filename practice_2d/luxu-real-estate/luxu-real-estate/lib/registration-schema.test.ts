import { describe, it, expect } from 'vitest';
import { registrationSchema } from './registration-schema';

describe('registrationSchema', () => {
  it('should validate correct registration input', () => {
    const input = {
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };
    const result = registrationSchema.safeParse(input);
    expect(result.success).toBe(true);
  });

  it('should fail with invalid email', () => {
    const input = {
      fullName: 'John Doe',
      email: 'invalid-email',
      password: 'password123',
    };
    const result = registrationSchema.safeParse(input);
    expect(result.success).toBe(false);
  });
});
