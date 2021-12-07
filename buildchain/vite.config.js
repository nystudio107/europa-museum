import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import critical from 'rollup-plugin-critical';
import path from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../cms/web/dist',
    rollupOptions: {
      input: {
        app: './src/js/app.ts',
      },
      output: {
        sourcemap: true
      },
    }
  },
  plugins: [
    copy({
      targets: [ { src: 'src/fonts/**/*', dest: '../cms/web/dist/fonts' } ],
      hook: 'writeBundle'
    }),
    critical({
      criticalUrl: 'http://nginx',
      criticalBase: '../cms/web/dist/criticalcss/',
      criticalPages: [
        { uri: '/', template: 'index' },
      ],
      criticalConfig: {
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    nodeResolve({
      moduleDirectories: [
        path.resolve('./node_modules'),
      ],
    }),
    ViteRestart({
      reload: [
        '../src/templates/**/*',
      ],
    }),
    vue(),
  ],
  publicDir: '../src/public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    preserveSymlinks: true,
  },
  server: {
    fs: {
      strict: false
    },
    host: '0.0.0.0',
    origin: 'http://localhost:3000/',
    port: 3000,
    strictPort: true,
  }
});
