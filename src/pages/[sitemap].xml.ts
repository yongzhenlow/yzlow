import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params }) => {
  const apiURL = new URL(import.meta.env.GHOST_CONTENT_API_URL);
  const siteURL = new URL(import.meta.env.SITE_URL ?? import.meta.env.SITE);
  const res = await fetch(new URL(`${params.sitemap}.xml`, apiURL));
  const raw = await res.text();
  const body = raw
    .replaceAll(apiURL.href, siteURL.href)
    .replaceAll(apiURL.host, siteURL.host);

  return {
    body,
  };
};

export function getStaticPaths() {
  return [
    'sitemap',
    'sitemap-pages',
    'sitemap-posts',
    'sitemap-authors',
    'sitemap-tags',
  ].map((sitemap) => ({ params: { sitemap } }));
}
