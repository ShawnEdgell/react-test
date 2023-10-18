import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
  ],
  base: '/weather-app-2/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    target: 'esnext', 
    outDir: 'dist', 
    minify: 'terser',
    sourcemap: true
  },
  server: {
    port: 3000, 
    open: true,   
    strictPort: false, 
    cors: true,   
    https: false,  
    proxy: { 
    }
  },
  
});

