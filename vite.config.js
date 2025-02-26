import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0 // Base64 dönüşümünü kapatır
  },
  base:'./',
  plugins: [
    react(),
    tailwindcss(),
  ],

})
