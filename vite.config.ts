import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Tatis_Chavez_Nuestra_Boda/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
