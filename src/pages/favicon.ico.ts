import { settings } from '@/store/settings';
import type { APIRoute } from 'astro';

export const get: APIRoute = async () => {
  if (settings.icon) {
    const response = await fetch(settings.icon);
    const buffer = Buffer.from(await response.arrayBuffer());

    return {
      body: buffer,
      encoding: 'binary',
    };
  }

  return new Response(null, {
    status: 404,
  });
};
