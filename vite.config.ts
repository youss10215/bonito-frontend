import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
})
console.log('🚀 ~ file: vite.config.ts:11 ~ path.resolve', path.resolve(__dirname, 'src'))
