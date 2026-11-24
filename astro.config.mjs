import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.cliniqueduvr.ca/',
  integrations: [],
  output: 'static',
  redirects: {
    '/services/van-life/': '/ressources/van-life/',
    '/en/services/van-life-conversion/': '/en/resources/van-life-conversion/'
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
