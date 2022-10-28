import type { APIRoute } from 'astro';

export const get: APIRoute = async () => {
  const apiURL = new URL(import.meta.env.GHOST_CONTENT_API_URL);
  const siteURL = new URL(import.meta.env.SITE_URL ?? import.meta.env.SITE);
  const res = await fetch(new URL(`sitemap.xsl`, apiURL));
  const raw = await res.text();
  const body = raw
    .replaceAll(apiURL.href, siteURL.href)
    .replaceAll(apiURL.host, siteURL.host);

  return {
    body,
  };
};
