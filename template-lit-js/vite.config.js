import * as path from 'path'
import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import manifest from './src/manifest.js'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    server: {
      hmr: {
        path: 'localhost',
        port: 1234,
      },
    },
    emptyOutDir: true,
    outDir: 'build',
    rollupOptions: {
      input: {
        options: path.resolve('options.html'),
        popup: path.resolve('popup.html'),
        sidepanel: path.resolve('sidepanel.html'),
      },
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  },
  plugins: [crx({ manifest })],
  legacy: {
    skipWebSocketTokenCheck: true,
  },
})
