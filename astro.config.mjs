import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
/** @type {import('astro').AstroUserConfig} */

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.yzlow.com',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react()]
});