import type { APIRoute } from 'astro';

// Both language versions of every page. The old /es/* URLs redirect and are left out.
const slugs = ['webia', 'uxquickaudit', 'auroradorada', 'rebranding-qdq', 'landora', 'levedadzine'];
const sections = ['', 'work', 'about', 'lab', ...slugs.map((s) => `projects/${s}`)];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://mramosvirginia.com');
  const url = (prefix: string, section: string) => {
    const path = [prefix, section].filter(Boolean).join('/');
    return new URL(path ? `/${path}/` : '/', base).href;
  };
  const entries = sections.flatMap((section) => {
    const es = url('', section);
    const en = url('en', section);
    const alt = `<xhtml:link rel="alternate" hreflang="es" href="${es}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${es}"/>`;
    return [es, en].map((loc) => `<url><loc>${loc}</loc>${alt}</url>`);
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
