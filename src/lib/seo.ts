export const SITE_URL = 'https://cliniqueduvr.ca';
export const BRAND_IMAGE = `${SITE_URL}/clinique-du-vr-brand.jpg`;

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path: string) {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return new URL(normalizedPath, SITE_URL).toString();
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {})
    }))
  };
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Clinique du VR',
    inLanguage: ['fr-CA', 'en-CA'],
    publisher: { '@id': `${SITE_URL}/#clinique-du-vr` }
  };
}

export function buildLocalBusinessSchema({
  telephone = '+1-581-337-3366',
  email = 'info@cliniqueduvr.ca',
  facebookUrl = 'https://www.facebook.com/profile.php?id=61588265661776',
  tiktokUrl = 'https://www.tiktok.com/@cliniqueduvr'
}: {
  telephone?: string;
  email?: string;
  facebookUrl?: string;
  tiktokUrl?: string;
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_URL}/#clinique-du-vr`,
    name: 'Clinique du VR',
    description: 'Inspection, entretien, réparation et infiltration d’eau de VR à Gatineau, Ottawa, Outaouais et Laurentides',
    telephone,
    email,
    url: SITE_URL,
    inLanguage: ['fr-CA', 'en-CA'],
    areaServed: [
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'AdministrativeArea', name: 'Outaouais' },
      { '@type': 'AdministrativeArea', name: 'Laurentides' },
      { '@type': 'AdministrativeArea', name: 'Québec' },
      { '@type': 'AdministrativeArea', name: 'Ontario' }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 rue de Granby, Unité 18',
      addressLocality: 'Gatineau',
      addressRegion: 'QC',
      postalCode: 'J8T 8R7',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.507195,
      longitude: -75.54977
    },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=11+rue+de+Granby+Unite+18+Gatineau+QC',
    priceRange: '$$',
    image: BRAND_IMAGE,
    sameAs: [facebookUrl, tiktokUrl],
    knowsAbout: [
      'Inspection de VR',
      'Entretien de VR',
      'Réparation de VR',
      'Infiltration d’eau de VR',
      'Toiture de VR',
      'Esthétique de VR',
      'Roulotte',
      'Caravane'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services VR',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entretien de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réparation de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Esthétique de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vente et achat de VR' } }
      ]
    }
  };
}

export function buildAboutPageSchema({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': absoluteUrl(path),
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#clinique-du-vr` },
    inLanguage: path.startsWith('/en/') ? 'en-CA' : 'fr-CA'
  };
}

export function buildContactPageSchema({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': absoluteUrl(path),
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#clinique-du-vr` },
    inLanguage: path.startsWith('/en/') ? 'en-CA' : 'fr-CA'
  };
}

export function buildServiceSchema({
  name,
  serviceType,
  description
}: {
  name: string;
  serviceType: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: { '@id': `${SITE_URL}/#clinique-du-vr` },
    areaServed: [
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'AdministrativeArea', name: 'Outaouais' },
      { '@type': 'AdministrativeArea', name: 'Laurentides' }
    ],
    serviceType,
    description
  };
}
