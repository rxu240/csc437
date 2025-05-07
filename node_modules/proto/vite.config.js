import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chestpress: resolve(__dirname, 'machines/chest-press.html'),
        latpulldown: resolve(__dirname, 'public/lat-pulldown.html'),
        glutebridge: resolve(__dirname, 'public/glute-bridge.html'),
        hacksquat: resolve(__dirname, 'public/hack-squat.html'),
        lowrow: resolve(__dirname, 'public/low-row.html'),
        tricepextension: resolve(__dirname, 'public/tricep-extension.html'),
      },
    },
  },
})