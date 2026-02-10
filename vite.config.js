import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rockbottombaits/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
