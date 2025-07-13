import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/cpdc-platform/', // 替换为GitHub仓库名称，确保GitHub Pages可以正确访问资源
  server: {
    proxy: {
      // 匹配 /api 开头的请求
      '/api': {
        target: 'https://included-asp-known.ngrok-free.app', // 你的后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 去掉 /api 前缀
      }
    }
  }
})
