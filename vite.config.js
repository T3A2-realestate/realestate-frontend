import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    watch:{
      usePolling:true
    },
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://xxx.xxxxx.xxx/',
        changeOrigin: true
    }
    }
  }
})
