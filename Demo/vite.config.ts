import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const env = loadEnv('', process.cwd(), "")
console.log(env.VITE_BASE_URL_QIAN_FAN)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '/@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    port: 80,
    proxy: {
      '/api/qianfan': {
        target: env.VITE_BASE_URL_QIAN_FAN,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/qianfan/, ''),
      },
    },
  }
})
