import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3300, // Ahora Vite siempre usará el puerto 3300
    host: true, // Permite acceso desde la red
  }
})
