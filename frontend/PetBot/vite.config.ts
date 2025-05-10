import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { config } from 'dotenv'
import path from 'path'

config()

// Use environment variable or default to localhost:5000
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:5000'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@hooks': path.resolve(__dirname, 'src/app/hooks'),
      '@models': path.resolve(__dirname, 'src/models'),
    },
  },
  plugins: [
    react(),
  ],
  base: "/",
  build: {
    chunkSizeWarningLimit: 3000,
    // Add this to prevent provisional headers
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: API_BASE_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: true,
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            // Remove provisional headers
            delete proxyRes.headers['x-powered-by']
            delete proxyRes.headers['server']
          })
        }
      },
    },
    // Add these headers to prevent provisional headers
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  // Add this to prevent sourcemap warnings
  esbuild: {
    drop: ['console', 'debugger'],
  }
})