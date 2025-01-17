const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'vue-cookie-comply',
      fileName: (format) => {
        if (format === 'es') {
          return `vue-cookie-comply.${format}.mjs`
        }
        if (format === 'umd') {
          return `vue-cookie-comply.${format}.js`
        }
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
