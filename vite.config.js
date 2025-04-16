import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: '0.0.0.0', // 👈 c’est ça qui change l’URL
    // port: 3000        // tu peux aussi personnaliser le port ici
  },
  theme: {
    extend: {
      colors: {
        Primary: "#1E90FF",
        "Primary-Bis": "#ADD8E6",
        Secondary: "#F5F5F5",
        "Secondary-Bis": "#E0E0E0",
        Tertiary: "#4B0082",
        Quaternary: "#6B7280",
      },
    },
  },
})