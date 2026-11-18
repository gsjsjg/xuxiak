import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gsjsjg.github.io',
  base: '/xuxiak/', 
  integrations: [tailwind()],
});
