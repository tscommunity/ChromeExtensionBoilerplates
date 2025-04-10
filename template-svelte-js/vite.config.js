import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import manifest from './src/manifest.js'

export default defineConfig(({ mode }) => {
  const production = mode === 'production'

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
    plugins: [
      crx({ manifest }),
      svelte({
        compilerOptions: {
          dev: !production,
        },
        preprocess: sveltePreprocess(),
      }),
    ],
    legacy: {
      skipWebSocketTokenCheck: true,
    },
  }
})
