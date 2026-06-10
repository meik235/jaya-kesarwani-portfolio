import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/Users/jaya/Downloads/portfolio/src/styles/_variables.scss"; @import "/Users/jaya/Downloads/portfolio/src/styles/_mixins.scss";`,
        silenceDeprecations: ['legacy-js-api', 'import'],
      },
    },
  },
})
