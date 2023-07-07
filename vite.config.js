import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    transforms: [
      {
        test: /\.vue$/,
        transform: (src) => {
          return {
            code: src,
            map: null,
            headers: { 'Content-Type': 'application/javascript' },
          }
        },
      },
    ],
  },
})
