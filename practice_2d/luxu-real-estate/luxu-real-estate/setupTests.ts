import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import { vi } from 'vitest';

process.env.NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://onbxtmjehvusglfksudr.supabase.co';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_SP0jEJ7fkdlAsFzn9NwFwg_CC9QFrK4';
