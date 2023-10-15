import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  VitePWA({ registerType: 'autoUpdate',  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}']
  }, devOptions: {
    enabled: true
  } })],
})