import servicePagesData from '../data/service-pages.json';
import servicePagesEnData from '../data/service-pages-en.json';
import { localAreaPagesFr, localAreaPagesEn } from '../data/local-area-pages';

type UrlEntry = {
  path: string;
  lastmod: string;
  alternatePaths?: string[];
};

type ServiceSlug = {
  slug: string;
  alternateSlug: string;
};

const baseUrl = 'https://cliniqueduvr.ca';
const defaultLastmod = '2026-04-12';

const pageLastmods = new Map<string, string>([
  ['/vente/', '2026-04-14'],
  ['/en/sales/', '2026-04-14'],
  ['/choisir-service/', '2026-04-15'],
  ['/en/choose-service/', '2026-04-15'],
  ['/plan-du-site/', '2026-04-15'],
  ['/en/site-map/', '2026-04-15']
]);

const staticEntries: UrlEntry[] = [
  { path: '/', lastmod: defaultLastmod, alternatePaths: ['/en/'] },
  { path: '/about/', lastmod: defaultLastmod, alternatePaths: ['/en/about/'] },
  { path: '/services/', lastmod: defaultLastmod, alternatePaths: ['/en/services/'] },
  { path: '/realisations/', lastmod: defaultLastmod, alternatePaths: ['/en/realisations/'] },
  { path: '/contact/', lastmod: defaultLastmod, alternatePaths: ['/en/contact/'] },
  { path: '/vente/', lastmod: '2026-04-14', alternatePaths: ['/en/sales/'] },
  { path: '/privacy/', lastmod: defaultLastmod, alternatePaths: ['/en/privacy/'] },
  { path: '/choisir-service/', lastmod: '2026-04-15', alternatePaths: ['/en/choose-service/'] },
  { path: '/plan-du-site/', lastmod: '2026-04-15', alternatePaths: ['/en/site-map/'] },
  { path: '/en/', lastmod: defaultLastmod, alternatePaths: ['/'] },
  { path: '/en/about/', lastmod: defaultLastmod, alternatePaths: ['/about/'] },
  { path: '/en/services/', lastmod: defaultLastmod, alternatePaths: ['/services/'] },
  { path: '/en/realisations/', lastmod: defaultLastmod, alternatePaths: ['/realisations/'] },
  { path: '/en/contact/', lastmod: defaultLastmod, alternatePaths: ['/contact/'] },
  { path: '/en/sales/', lastmod: '2026-04-14', alternatePaths: ['/vente/'] },
  { path: '/en/privacy/', lastmod: defaultLastmod, alternatePaths: ['/privacy/'] },
  { path: '/en/choose-service/', lastmod: '2026-04-15', alternatePaths: ['/choisir-service/'] },
  { path: '/en/site-map/', lastmod: '2026-04-15', alternatePaths: ['/plan-du-site/'] }
];

const servicePages = servicePagesData.items as ServiceSlug[];
const servicePagesEn = servicePagesEnData.items as ServiceSlug[];
const frAreaToEnSlug = new Map(localAreaPagesEn.map((page) => [page.area, page.slug]));
const enAreaToFrSlug = new Map(localAreaPagesFr.map((page) => [page.area, page.slug]));

const serviceEntries = servicePages.map((service) => ({
  path: `/services/${service.slug}/`,
  lastmod: pageLastmods.get(`/services/${service.slug}/`) ?? defaultLastmod,
  alternatePaths: service.alternateSlug ? [`/en/services/${service.alternateSlug}/`] : []
}));

const serviceEntriesEn = servicePagesEn.map((service) => ({
  path: `/en/services/${service.slug}/`,
  lastmod: pageLastmods.get(`/en/services/${service.slug}/`) ?? defaultLastmod,
  alternatePaths: service.alternateSlug ? [`/services/${service.alternateSlug}/`] : []
}));

const areaEntriesFr = localAreaPagesFr.map((page) => ({
  path: `/zones/${page.slug}/`,
  lastmod: pageLastmods.get(`/zones/${page.slug}/`) ?? '2026-04-15',
  alternatePaths: frAreaToEnSlug.get(page.area) ? [`/en/areas/${frAreaToEnSlug.get(page.area)}/`] : []
}));

const areaEntriesEn = localAreaPagesEn.map((page) => ({
  path: `/en/areas/${page.slug}/`,
  lastmod: pageLastmods.get(`/en/areas/${page.slug}/`) ?? '2026-04-15',
  alternatePaths: enAreaToFrSlug.get(page.area) ? [`/zones/${enAreaToFrSlug.get(page.area)}/`] : []
}));

const entries = [...staticEntries, ...serviceEntries, ...serviceEntriesEn, ...areaEntriesFr, ...areaEntriesEn];

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function absoluteUrl(path: string) {
  return `${baseUrl}${path}`;
}

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map((entry) => {
    const alternates = (entry.alternatePaths ?? [])
      .filter((alternatePath) => alternatePath && alternatePath !== entry.path)
      .map(
        (alternatePath) =>
          `    <xhtml:link rel="alternate" hreflang="${alternatePath.startsWith('/en/') ? 'en-CA' : 'fr-CA'}" href="${escapeXml(absoluteUrl(alternatePath))}" />`
      )
      .join('\n');

    return `  <url>
    <loc>${escapeXml(absoluteUrl(entry.path))}</loc>
    <lastmod>${entry.lastmod}</lastmod>${alternates ? `\n${alternates}` : ''}
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
