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

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_URL}/#clinique-du-vr`,
    name: 'Clinique du VR',
    description: 'Entretien, reparation et esthetique de VR a Gatineau-Ottawa',
    telephone: '+1-581-337-3366',
    email: 'info@demosolution.ca',
    url: SITE_URL,
    areaServed: [
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Ottawa' }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gatineau',
      addressRegion: 'QC',
      addressCountry: 'CA'
    },
    priceRange: '$$',
    image: BRAND_IMAGE,
    sameAs: [
      'https://www.facebook.com/profile.php?id=61588265661776'
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
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reparation de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Esthetique de VR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vente et achat de VR' } }
      ]
    }
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
