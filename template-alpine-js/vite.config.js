import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'

import manifest from './src/manifest.js'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      hmr: {
        path: 'localhost',
        port: 1234,
      },
    },
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },

    plugins: [crx({ manifest })],
    legacy: {
      skipWebSocketTokenCheck: true,
    },
  }
})
