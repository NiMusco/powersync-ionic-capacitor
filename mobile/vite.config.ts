import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), wasm(), topLevelAwait()],
  envDir: '..',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  optimizeDeps: {
    // Don't optimize these packages as they contain web workers and WASM files.
    // https://github.com/vitejs/vite/issues/11672#issuecomment-1415820673
    exclude: ['@journeyapps/wa-sqlite', '@powersync/web'],
    include: [
      '@powersync/web > event-iterator',
      '@powersync/web > js-logger',
      '@powersync/web > lodash/throttle',
      '@powersync/web > can-ndjson-stream',
      '@powersync/web > bson',
      '@powersync/web > buffer',
      '@powersync/web > rsocket-core',
      '@powersync/web > rsocket-websocket-client',
      '@powersync/web > cross-fetch',
      'js-logger',
      'can-ndjson-stream',
      'lodash/throttle',
      'event-iterator',
      'uuid',
      'lodash',
      'can-ndjson-stream',
    ],
  },
  worker: {
    format: 'es',
    plugins: () => [wasm(), topLevelAwait()],
  },
});
