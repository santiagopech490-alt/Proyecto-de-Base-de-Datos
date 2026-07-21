import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    globals: true, // Added to make globals like 'expect' available
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
