import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Install @types/node if you encounter type errors with 'path'
// npm install -D @types/node

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});