export const SITE_URL = 'https://www.cliniqueduvr.ca';
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
    description: 'Entretien, réparation et esthétique de VR à Gatineau-Ottawa',
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
    priceRange: '$$',
    image: BRAND_IMAGE,
    sameAs: [facebookUrl, tiktokUrl],
    knowsAbout: [
      'Inspection de VR',
      'Entretien de VR',
      'Réparation de VR',
      'Infiltration d’eau de VR',
      'Toiture de VR',
      'Esthétique de VR'
    ],
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jesse Brook' },
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody: "Cédric était à l'heure, a tout expliqué clairement et les résultats ont suivi comme promis. Deux pouces en l'air."
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Stéphane Desgagné' },
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody: 'Service professionnel et courtois.'
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Philippe Albert' },
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody: 'Compagnie efficace, facile de communiquer avec eux. Travail professionnel, que du positif.'
      }
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
    areaServed: ['Gatineau', 'Ottawa', 'Quebec', 'Ontario'],
    serviceType,
    description
  };
}
