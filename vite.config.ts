import eslintPlugin from '@nabla/vite-plugin-eslint';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react-hook-form': require.resolve('react-hook-form'),
    },
  },
});
