// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5174,
    allowedHosts: [
      'xenia-hemoglobic-sherri.ngrok-free.dev'
    ]
  }
})