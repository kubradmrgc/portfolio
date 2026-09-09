import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: https://kubradmrgc.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    tailwindcss() as any,
  ],
})
