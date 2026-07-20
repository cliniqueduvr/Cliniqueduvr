import servicePagesData from '../data/service-pages.json';
import servicePagesEnData from '../data/service-pages-en.json';
import { localAreaPagesFr, localAreaPagesEn } from '../data/local-area-pages';
import { caseStudiesFr } from '../data/case-studies-fr';

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
const refonteLastmod = '2026-07-20';

const pageLastmods = new Map<string, string>([
  ['/', refonteLastmod],
  ['/en/', refonteLastmod],
  ['/services/', refonteLastmod],
  ['/services/modification-amenagement/', refonteLastmod],
  ['/services/van-life/', refonteLastmod],
  ['/services/installation-panneaux-solaires/', refonteLastmod],
  ['/services/entretien/', refonteLastmod],
  ['/services/reparation/', refonteLastmod],
  ['/en/services/', refonteLastmod],
  ['/en/services/rv-modification-custom-builds/', refonteLastmod],
  ['/en/services/van-life-conversion/', refonteLastmod],
  ['/en/services/solar-panel-installation/', refonteLastmod],
  ['/en/services/maintenance/', refonteLastmod],
  ['/en/services/repair/', refonteLastmod],
  ['/choisir-service/', refonteLastmod],
  ['/en/choose-service/', refonteLastmod],
  ['/contact/', refonteLastmod],
  ['/en/contact/', refonteLastmod],
  ['/privacy/', refonteLastmod],
  ['/faq/', refonteLastmod],
  ['/en/faq/', '2026-04-19'],
  ['/zones-desservies/', refonteLastmod],
  ['/en/service-areas/', refonteLastmod],
  ['/ressources/infiltration-eau-vr/', refonteLastmod],
  ['/en/resources/rv-water-intrusion/', '2026-04-19'],
  ['/ressources/entretien-vr-deux-fois-par-an/', refonteLastmod],
  ['/en/resources/twice-yearly-rv-maintenance/', '2026-04-19'],
  ['/ressources/installation-panneau-solaire-vr/', '2026-04-22'],
  ['/en/resources/rv-solar-panel-installation/', '2026-04-22'],
  ['/realisations/', '2026-04-19'],
  ['/realisations/infiltration-toiture-vr-gatineau/', '2026-04-19'],
  ['/realisations/reparation-interieure-vr-apres-infiltration-ottawa/', '2026-04-19'],
  ['/realisations/reprise-scellants-vr-gatineau/', '2026-04-19'],
  ['/plan-du-site/', refonteLastmod],
  ['/en/site-map/', refonteLastmod]
]);

const staticEntries: UrlEntry[] = [
  { path: '/', lastmod: pageLastmods.get('/') ?? defaultLastmod, alternatePaths: ['/en/'] },
  { path: '/about/', lastmod: defaultLastmod, alternatePaths: ['/en/about/'] },
  { path: '/services/', lastmod: pageLastmods.get('/services/') ?? defaultLastmod, alternatePaths: ['/en/services/'] },
  { path: '/magasin/', lastmod: '2026-06-14', alternatePaths: ['/en/store/'] },
  { path: '/realisations/', lastmod: defaultLastmod, alternatePaths: ['/en/realisations/'] },
  { path: '/contact/', lastmod: pageLastmods.get('/contact/') ?? defaultLastmod, alternatePaths: ['/en/contact/'] },
  { path: '/privacy/', lastmod: pageLastmods.get('/privacy/') ?? defaultLastmod, alternatePaths: ['/en/privacy/'] },
  { path: '/choisir-service/', lastmod: pageLastmods.get('/choisir-service/') ?? defaultLastmod, alternatePaths: ['/en/choose-service/'] },
  { path: '/faq/', lastmod: pageLastmods.get('/faq/') ?? defaultLastmod, alternatePaths: ['/en/faq/'] },
  { path: '/zones-desservies/', lastmod: pageLastmods.get('/zones-desservies/') ?? defaultLastmod, alternatePaths: ['/en/service-areas/'] },
  { path: '/ressources/infiltration-eau-vr/', lastmod: pageLastmods.get('/ressources/infiltration-eau-vr/') ?? defaultLastmod, alternatePaths: ['/en/resources/rv-water-intrusion/'] },
  { path: '/ressources/entretien-vr-deux-fois-par-an/', lastmod: pageLastmods.get('/ressources/entretien-vr-deux-fois-par-an/') ?? defaultLastmod, alternatePaths: ['/en/resources/twice-yearly-rv-maintenance/'] },
  { path: '/ressources/installation-panneau-solaire-vr/', lastmod: '2026-04-22', alternatePaths: ['/en/resources/rv-solar-panel-installation/'] },
  { path: '/plan-du-site/', lastmod: pageLastmods.get('/plan-du-site/') ?? defaultLastmod, alternatePaths: ['/en/site-map/'] },
  { path: '/en/', lastmod: pageLastmods.get('/en/') ?? defaultLastmod, alternatePaths: ['/'] },
  { path: '/en/about/', lastmod: defaultLastmod, alternatePaths: ['/about/'] },
  { path: '/en/services/', lastmod: pageLastmods.get('/en/services/') ?? defaultLastmod, alternatePaths: ['/services/'] },
  { path: '/en/store/', lastmod: '2026-06-14', alternatePaths: ['/magasin/'] },
  { path: '/en/realisations/', lastmod: defaultLastmod, alternatePaths: ['/realisations/'] },
  { path: '/en/contact/', lastmod: pageLastmods.get('/en/contact/') ?? defaultLastmod, alternatePaths: ['/contact/'] },
  { path: '/en/privacy/', lastmod: defaultLastmod, alternatePaths: ['/privacy/'] },
  { path: '/en/choose-service/', lastmod: pageLastmods.get('/en/choose-service/') ?? defaultLastmod, alternatePaths: ['/choisir-service/'] },
  { path: '/en/faq/', lastmod: '2026-04-19', alternatePaths: ['/faq/'] },
  { path: '/en/service-areas/', lastmod: pageLastmods.get('/en/service-areas/') ?? defaultLastmod, alternatePaths: ['/zones-desservies/'] },
  { path: '/en/resources/rv-water-intrusion/', lastmod: '2026-04-19', alternatePaths: ['/ressources/infiltration-eau-vr/'] },
  { path: '/en/resources/twice-yearly-rv-maintenance/', lastmod: '2026-04-19', alternatePaths: ['/ressources/entretien-vr-deux-fois-par-an/'] },
  { path: '/en/resources/rv-solar-panel-installation/', lastmod: '2026-04-22', alternatePaths: ['/ressources/installation-panneau-solaire-vr/'] },
  { path: '/en/site-map/', lastmod: pageLastmods.get('/en/site-map/') ?? defaultLastmod, alternatePaths: ['/plan-du-site/'] }
];

const servicePages = servicePagesData.items as ServiceSlug[];
const servicePagesEn = servicePagesEnData.items as ServiceSlug[];
const englishServiceSlugs = new Set(servicePagesEn.map((service) => service.slug));
const frToEnAreaSlug = new Map([
  ['fuite-eau-vr-gatineau', 'rv-water-leak-gatineau'],
  ['entretien-vr-gatineau', 'rv-maintenance-gatineau'],
  ['inspection-vr-outaouais', 'rv-inspection-outaouais'],
  ['reparation-vr-ottawa', 'rv-repair-ottawa'],
  ['infiltration-eau-roulotte-laurentides', 'trailer-water-intrusion-laurentides']
]);
const enToFrAreaSlug = new Map([
  ['rv-water-leak-gatineau', 'fuite-eau-vr-gatineau'],
  ['rv-maintenance-gatineau', 'entretien-vr-gatineau'],
  ['rv-inspection-outaouais', 'inspection-vr-outaouais'],
  ['rv-repair-ottawa', 'reparation-vr-ottawa'],
  ['trailer-water-intrusion-laurentides', 'infiltration-eau-roulotte-laurentides']
]);

const serviceEntries = servicePages.map((service) => ({
  path: `/services/${service.slug}/`,
  lastmod: pageLastmods.get(`/services/${service.slug}/`) ?? defaultLastmod,
  alternatePaths: service.alternateSlug && service.slug !== 'rexoseal' && englishServiceSlugs.has(service.alternateSlug) ? [`/en/services/${service.alternateSlug}/`] : []
}));

const serviceEntriesEn = servicePagesEn.map((service) => ({
  path: `/en/services/${service.slug}/`,
  lastmod: pageLastmods.get(`/en/services/${service.slug}/`) ?? defaultLastmod,
  alternatePaths: service.alternateSlug ? [`/services/${service.alternateSlug}/`] : []
}));

const areaEntriesFr = localAreaPagesFr.map((page) => ({
  path: `/zones/${page.slug}/`,
  lastmod: pageLastmods.get(`/zones/${page.slug}/`) ?? '2026-04-15',
  alternatePaths: frToEnAreaSlug.get(page.slug) ? [`/en/areas/${frToEnAreaSlug.get(page.slug)}/`] : []
}));

const areaEntriesEn = localAreaPagesEn.map((page) => ({
  path: `/en/areas/${page.slug}/`,
  lastmod: pageLastmods.get(`/en/areas/${page.slug}/`) ?? '2026-04-15',
  alternatePaths: enToFrAreaSlug.get(page.slug) ? [`/zones/${enToFrAreaSlug.get(page.slug)}/`] : []
}));

const caseStudyEntriesFr = caseStudiesFr.map((study) => ({
  path: `/realisations/${study.slug}/`,
  lastmod: pageLastmods.get(`/realisations/${study.slug}/`) ?? '2026-04-19',
  alternatePaths: []
}));

const entries = [...staticEntries, ...serviceEntries, ...serviceEntriesEn, ...areaEntriesFr, ...areaEntriesEn, ...caseStudyEntriesFr];

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
