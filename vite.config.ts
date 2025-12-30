import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // allows external connections (required for ngrok)
    port: 5173,       // ensures consistent port for ngrok
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
