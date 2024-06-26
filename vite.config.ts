import { remixPWA } from '@remix-pwa/dev'
import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { remixDevTools } from 'remix-development-tools'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix({ appDirectory: './src/app' }),
    tsconfigPaths(),
    remixPWA(),
  ],
  build: {
    rollupOptions: {
      external: ['./src/app/service-worker.ts'],
    },
  },
})
