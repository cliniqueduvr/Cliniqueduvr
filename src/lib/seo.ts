export const SITE_URL = 'https://cliniqueduvr.ca';
export const BRAND_IMAGE = `${SITE_URL}/clinique-du-vr-brand.png`;

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

function stripHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

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
      name: stripHtml(item.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.answer)
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
  telephone = '+1-819-669-8787',
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
    description: 'Service complet pour VR, roulotte, bateau et véhicules récréatifs à Gatineau: réparation, diagnostic, aménagement, modification, fibre de verre, carrosserie, peinture, polissage, lavage, freins et essieux',
    telephone,
    email,
    url: SITE_URL,
    inLanguage: ['fr-CA', 'en-CA'],
    availableLanguage: ['fr-CA', 'en-CA'],
    foundingDate: '2013',
    areaServed: [
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'AdministrativeArea', name: 'Outaouais' },
      { '@type': 'AdministrativeArea', name: 'Laurentides' },
      { '@type': 'AdministrativeArea', name: 'Québec' },
      { '@type': 'AdministrativeArea', name: 'Ontario' }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 rue de Granby, Unité 17',
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
    hasMap: 'https://www.google.com/maps/search/?api=1&query=11+rue+de+Granby+Unite+17+Gatineau+QC',
    priceRange: '$$',
    image: BRAND_IMAGE,
    sameAs: [facebookUrl, tiktokUrl],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone,
        email,
        areaServed: ['CA', 'CA-QC', 'CA-ON'],
        availableLanguage: ['fr-CA', 'en-CA']
      }
    ],
    knowsAbout: [
      'Modification de VR',
      'Aménagement de VR',
      'Diagnostic de VR',
      'Réparation de fibre de verre',
      'Carrosserie de VR',
      'Peinture de VR',
      'Polissage de VR',
      'Lavage de VR',
      'Freins de roulotte',
      'Essieux de roulotte',
      'Inspection de VR',
      'Entretien de VR',
      'Réparation de VR',
      'Infiltration d’eau de VR',
      'Toiture de VR',
      'Roulotte',
      'Caravane'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services VR',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modification et aménagement de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diagnostic de VR et roulotte' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réparation de fibre de verre, carrosserie et peinture' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Polissage et lavage' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freins et essieux' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entretien de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Réparation de VR' } }
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
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'AdministrativeArea', name: 'Outaouais' },
      { '@type': 'AdministrativeArea', name: 'Laurentides' }
    ],
    serviceType,
    description: stripHtml(description)
  };
}

export function buildCollectionPageSchema({
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
    '@type': 'CollectionPage',
    '@id': absoluteUrl(path),
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#clinique-du-vr` },
    inLanguage: path.startsWith('/en/') ? 'en-CA' : 'fr-CA'
  };
}

export function buildArticleSchema({
  headline,
  description,
  path
}: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: path.startsWith('/en/') ? 'en-CA' : 'fr-CA',
    publisher: { '@id': `${SITE_URL}/#clinique-du-vr` }
  };
}
