import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gsjsjg.github.io',
  base: '/xuxiak', // 必须与你的仓库名 xuxiak 完全一致
  integrations: [tailwind()],
});
