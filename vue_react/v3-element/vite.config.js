import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe({
    mockPath: 'mock', // 解析根目录下的mock文件夹
    localEnabled: true, // 设置是否启用本地
  })],
})
