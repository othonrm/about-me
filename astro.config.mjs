import vercel from '@astrojs/vercel';
// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
