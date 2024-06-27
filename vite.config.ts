import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const host = process.env.VITE_HOST || '0.0.0.0';
const port = Number(process.env.VITE_PORT) || 3000;

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: host,
    port: port,
  },
  build: {
    target: 'esnext',
  },
});
