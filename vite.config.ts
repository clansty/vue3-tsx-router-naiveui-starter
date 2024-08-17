import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
