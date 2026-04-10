import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.demosolution.ca/',
  integrations: [],
  output: 'static',
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
