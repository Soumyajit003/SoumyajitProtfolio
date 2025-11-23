import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    allowedHosts: [
      "25e8-2409-40e0-100b-e021-b840-90e8-72a9-7ae8.ngrok-free.app"
    ]
  }
})
