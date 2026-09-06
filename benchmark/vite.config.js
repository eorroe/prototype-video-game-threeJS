import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  server: {
    host: '127.0.0.1',
    port: 5174,
  },
  build: {
    target: 'es2022',
  }
});
