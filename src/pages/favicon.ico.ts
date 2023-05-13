import { settings } from '@/store/settings';
import type { APIRoute } from 'astro';

// @ts-ignore might be a typing issue, since EndpointOutput requires body to be a string
// but docs show otherwise and this works.
export const get: APIRoute = async () => {
  if (settings.icon) {
    const response = await fetch(settings.icon);
    const buffer = Buffer.from(await response.arrayBuffer());

    return {
      body: buffer,
      encoding: 'binary',
    };
  }

  return { body: '' };
};
