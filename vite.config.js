import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 Esto expone el servidor a tu red/contenedor
    port: 5173  // Asegura que use el puerto que esperas
  }
})