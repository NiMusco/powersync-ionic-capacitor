// shared/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: '**/*.svg',
    }),
    react(),
    tsConfigPaths(),
  ],
});
