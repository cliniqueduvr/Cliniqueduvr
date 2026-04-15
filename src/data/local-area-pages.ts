import type { FAQItem } from '../lib/seo';

export interface LocalAreaCard {
  title: string;
  body: string;
}

export interface LocalAreaLink {
  href: string;
  title: string;
  body: string;
  linkLabel: string;
}

export interface LocalAreaPage {
  slug: string;
  area: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  lead: string;
  serviceType: string;
  highlights: string[];
  sections: LocalAreaCard[];
  faqs: FAQItem[];
  links: LocalAreaLink[];
}

export const localAreaPagesFr: LocalAreaPage[] = [
  {
    slug: 'inspection-vr-outaouais',
    area: 'Outaouais',
    title: "Inspection de VR en Outaouais | Clinique du VR",
    description: "Inspection de VR en Outaouais pour infiltration d'eau, joints, toiture et validation avant achat, avec atelier à Gatineau.",
    eyebrow: 'Outaouais',
    h1: "Inspection de VR en Outaouais",
    intro: "Clinique du VR accompagne les clients de l'Outaouais qui veulent clarifier l'état réel de leur VR avant une réparation, un achat ou une remise en état.",
    lead: "En Outaouais, l'inspection sert souvent de point de départ quand le véhicule est encore sur place, entre deux saisons ou en évaluation avant une décision rapide.",
    serviceType: "Inspection de VR en Outaouais",
    highlights: ['Inspection visuelle', 'Humidimètre', 'Avant achat', "Joints et toiture"],
    sections: [
      {
        title: "Quand l'inspection est le bon point de départ",
        body: "Une inspection est particulièrement utile quand vous soupçonnez une infiltration d'eau, quand vous voulez vérifier l'état de la toiture ou des joints, ou quand vous avez besoin d'un avis clair avant d'investir dans des travaux dans la région de l'Outaouais."
      },
      {
        title: "Pour les acheteurs et vendeurs en Outaouais",
        body: "Avant une transaction, l'inspection aide à clarifier les forces, les risques et les correctifs utiles. C'est souvent la bonne approche pour un VR vu localement en Outaouais avant de s'engager davantage."
      },
      {
        title: "Ce que nous regardons en priorité",
        body: "Nous concentrons l'attention sur les joints, la toiture, les ouvertures sensibles et les signes d'humidité. Le but est d'identifier rapidement les zones à risque et d'orienter la prochaine étape utile sans multiplier les démarches inutiles."
      }
    ],
    faqs: [
      {
        question: "Pourquoi demander une inspection de VR en Outaouais?",
        answer: "Une inspection permet de confirmer l'état réel du véhicule, de détecter les signes d'humidité ou d'infiltration et de mieux orienter la suite, que ce soit avant achat, avant réparation ou avant vente dans l'Outaouais."
      },
      {
        question: "L'inspection est-elle utile avant une réparation?",
        answer: "Oui. Quand le problème n'est pas encore parfaitement clair, l'inspection aide à éviter de partir dans la mauvaise direction et à prioriser les bons travaux."
      }
    ],
    links: [
      {
        href: '/services/inspection/',
        title: "Voir le service d'inspection",
        body: "Consultez la page du service pour le détail du processus, des vérifications et des questions fréquentes.",
        linkLabel: "Voir l'inspection"
      },
      {
        href: '/contact/',
        title: "Parler de votre VR",
        body: "Envoyez des photos et une courte description du problème pour être orienté rapidement.",
        linkLabel: "Contacter l'atelier"
      }
    ]
  },
  {
    slug: 'reparation-vr-ottawa',
    area: 'Ottawa',
    title: "Réparation de VR à Ottawa | Clinique du VR",
    description: "Réparation de VR à Ottawa pour infiltration d'eau, toiture, murs, plancher et dommages intérieurs, avec atelier à Gatineau.",
    eyebrow: 'Ottawa',
    h1: "Réparation de VR à Ottawa",
    intro: "Clinique du VR accompagne les clients d'Ottawa qui ont besoin d'une réparation spécialisée liée à l'eau, à la toiture ou aux dommages visibles dans un VR.",
    lead: "À Ottawa, les demandes arrivent souvent quand les dommages sont déjà visibles et qu'il faut passer d'un doute à une réparation structurée.",
    serviceType: "Réparation de VR à Ottawa",
    highlights: ["Infiltration d'eau", 'Toiture', 'Plancher et murs', 'Remise en état'],
    sections: [
      {
        title: "Quand passer de l'inspection à la réparation",
        body: "Quand l'eau a déjà atteint les matériaux, quand un mur est mou, qu'un plancher est abîmé ou qu'une odeur de moisissure apparaît, il faut généralement passer à la réparation plutôt que de rester au stade de l'évaluation."
      },
      {
        title: "Réparations fréquentes pour les clients d'Ottawa",
        body: "Les demandes venant d'Ottawa concernent souvent la toiture, la membrane, les murs, le plancher et les dommages intérieurs causés par une infiltration d'eau ou une étanchéité déficiente."
      },
      {
        title: "Une réparation guidée par la cause",
        body: "L'objectif n'est pas seulement d'améliorer l'apparence. Il faut confirmer la vraie source du problème, traiter les zones touchées et remettre le véhicule en état de façon cohérente, surtout quand plusieurs surfaces sont déjà atteintes."
      }
    ],
    faqs: [
      {
        question: "Quand faut-il demander une réparation de VR à Ottawa?",
        answer: "Quand les dommages sont déjà visibles ou confirmés, par exemple un plancher mou, un mur touché, une toiture endommagée ou des signes de moisissure liés à l'eau, la réparation devient généralement la bonne prochaine étape."
      },
      {
        question: "Réparez-vous seulement l'apparence ou aussi la cause?",
        answer: "La réparation utile commence par la validation de la cause. Le but est de corriger le problème à la base avant de remettre les surfaces en état."
      }
    ],
    links: [
      {
        href: '/services/reparation/',
        title: 'Voir le service de réparation',
        body: "Consultez les détails du service si votre VR présente déjà des dommages ou des zones à remettre en état.",
        linkLabel: 'Voir la réparation'
      },
      {
        href: '/realisations/',
        title: 'Voir des cas réels',
        body: "Consultez des exemples d'interventions pour mieux situer votre situation avant de nous écrire.",
        linkLabel: 'Voir les réalisations'
      }
    ]
  },
  {
    slug: 'infiltration-eau-roulotte-laurentides',
    area: 'Laurentides',
    title: "Infiltration d’eau de roulotte dans les Laurentides | Clinique du VR",
    description: "Aide pour infiltration d'eau de roulotte dans les Laurentides: inspection, joints, toiture, humidité et orientation vers la bonne intervention depuis notre atelier de Gatineau.",
    eyebrow: 'Laurentides',
    h1: "Infiltration d’eau de roulotte dans les Laurentides",
    intro: "Clinique du VR accompagne les propriétaires de roulottes dans les Laurentides quand des signes d'humidité, des joints fatigués ou des doutes sur l'étanchéité apparaissent.",
    lead: "Dans les Laurentides, le bon réflexe est souvent de valider rapidement l'étanchéité avant que l'humidité, les joints ou la toiture ne se dégradent davantage.",
    serviceType: "Infiltration d’eau de roulotte dans les Laurentides",
    highlights: ["Inspection d'humidité", 'Joints et toiture', 'Prévention des dommages', 'Orientation claire'],
    sections: [
      {
        title: "Les signes à surveiller",
        body: "Des traces d'eau, des joints qui sèchent, des matériaux gondolés, une odeur d'humidité ou une toiture douteuse sont des signes qui méritent une vérification rapide, surtout sur une roulotte qui a beaucoup séjourné dehors."
      },
      {
        title: "Pourquoi commencer par l'inspection",
        body: "Quand l'infiltration n'est pas encore clairement localisée, l'inspection est la meilleure façon de confirmer la situation avant de parler d'entretien ou de réparation et d'éviter de traiter la mauvaise zone."
      },
      {
        title: "Quand l'entretien ou la réparation prend le relais",
        body: "Une fois l'état du véhicule confirmé, on peut orienter vers un entretien des joints, une reprise d'étanchéité ou une réparation plus avancée selon l'ampleur du dommage et l'état général de la roulotte."
      }
    ],
    faqs: [
      {
        question: "Que faire si ma roulotte montre des signes d'infiltration d'eau dans les Laurentides?",
        answer: "La première étape utile est souvent l'inspection pour confirmer les zones humides, l'état de la toiture et des joints, puis décider si un entretien ou une réparation est nécessaire."
      },
      {
        question: "Tous les problèmes d'infiltration demandent-ils une réparation immédiate?",
        answer: "Pas toujours. Certains cas relèvent d'un entretien préventif ou d'une reprise ciblée des joints, mais il faut d'abord confirmer l'état réel de la roulotte."
      }
    ],
    links: [
      {
        href: '/services/inspection/',
        title: "Commencer par l'inspection",
        body: "Voyez le service d'inspection si vous soupçonnez une infiltration d'eau ou un problème d'étanchéité.",
        linkLabel: "Voir l'inspection"
      },
      {
        href: '/services/entretien/',
        title: 'Voir le service d’entretien',
        body: "Si les joints ou la toiture demandent surtout une reprise préventive, l'entretien est souvent la prochaine étape.",
        linkLabel: "Voir l'entretien"
      }
    ]
  }
];

export const localAreaPagesEn: LocalAreaPage[] = [
  {
    slug: 'rv-inspection-outaouais',
    area: 'Outaouais',
    title: 'RV Inspection in Outaouais | Clinique du VR',
    description: 'RV inspection in Outaouais for water intrusion, seals, roof condition and pre-purchase validation, with the workshop based in Gatineau.',
    eyebrow: 'Outaouais',
    h1: 'RV Inspection in Outaouais',
    intro: 'Clinique du VR helps clients in Outaouais who want to clarify the true condition of their RV before repairs, a purchase, or restoration work.',
    lead: 'In Outaouais, inspection is often the right starting point when the RV is nearby, between seasons, or being reviewed before a decision has to be made.',
    serviceType: 'RV Inspection in Outaouais',
    highlights: ['Visual inspection', 'Moisture meter', 'Before purchase', 'Seals and roof'],
    sections: [
      {
        title: 'When inspection is the right starting point',
        body: 'Inspection is especially useful when you suspect water intrusion, want to verify the condition of the roof or seals, or need a clear opinion before committing to work in the Outaouais area.'
      },
      {
        title: 'For buyers and sellers in Outaouais',
        body: 'Before a transaction, inspection helps clarify strengths, risks, and useful corrections. That gives you a better understanding of a vehicle being considered locally in Outaouais before making a decision.'
      },
      {
        title: 'What we review first',
        body: 'We focus on seals, roof areas, vulnerable openings, and signs of moisture. The goal is to identify higher-risk sections quickly and point you to the most useful next step without unnecessary back-and-forth.'
      }
    ],
    faqs: [
      {
        question: 'Why request an RV inspection in Outaouais?',
        answer: 'Inspection helps confirm the actual condition of the vehicle, detect moisture or water-intrusion signs, and guide the next step whether you are buying, repairing, or preparing for a sale.'
      },
      {
        question: 'Is inspection useful before repairs?',
        answer: 'Yes. When the issue is not yet fully clear, inspection helps avoid going in the wrong direction and makes it easier to prioritize the right work.'
      }
    ],
    links: [
      {
        href: '/en/services/inspection/',
        title: 'View the inspection service',
        body: 'See the service page for the full process, checks performed, and common questions.',
        linkLabel: 'View inspection'
      },
      {
        href: '/en/contact/',
        title: 'Talk to us about your RV',
        body: 'Send photos and a short description of the issue to get practical direction quickly.',
        linkLabel: 'Contact the workshop'
      }
    ]
  },
  {
    slug: 'rv-repair-ottawa',
    area: 'Ottawa',
    title: 'RV Repair in Ottawa | Clinique du VR',
    description: 'RV repair in Ottawa for water intrusion, roof damage, walls, floors and interior issues, with the workshop based in Gatineau.',
    eyebrow: 'Ottawa',
    h1: 'RV Repair in Ottawa',
    intro: 'Clinique du VR helps clients in Ottawa who need specialized RV repair related to water, roof areas, or visible damage inside the vehicle.',
    lead: 'In Ottawa, requests often come in once the damage is already visible and the next step needs to be a structured repair plan.',
    serviceType: 'RV Repair in Ottawa',
    highlights: ['Water intrusion', 'Roof', 'Floors and walls', 'Restoration work'],
    sections: [
      {
        title: 'When to move from inspection to repair',
        body: 'When water has already affected materials, when a wall feels soft, when the floor is damaged, or when a mold smell appears, repair is usually the right next step rather than staying in diagnosis mode.'
      },
      {
        title: 'Common repair requests for Ottawa clients',
        body: 'Requests coming from Ottawa often involve the roof, membrane, walls, floor, and interior damage caused by water intrusion or failed sealing.'
      },
      {
        title: 'Repair guided by the actual cause',
        body: 'The goal is not only to improve appearance. The real source of the problem must be confirmed, affected areas treated, and the vehicle restored in a coherent order, especially when multiple sections are already affected.'
      }
    ],
    faqs: [
      {
        question: 'When should I request RV repair in Ottawa?',
        answer: 'When damage is already visible or confirmed, such as a soft floor, affected wall, damaged roof, or mold signs related to water.'
      },
      {
        question: 'Do you only repair the visible surface or also the cause?',
        answer: 'Useful repair starts by confirming the cause. The goal is to correct the issue at the source before restoring the visible surfaces.'
      }
    ],
    links: [
      {
        href: '/en/services/repair/',
        title: 'View the repair service',
        body: 'See the service details if your RV already has damage or areas that need to be restored.',
        linkLabel: 'View repair'
      },
      {
        href: '/en/realisations/',
        title: 'See real project examples',
        body: 'Review examples of workshop interventions to better understand your situation before contacting us.',
        linkLabel: 'View projects'
      }
    ]
  },
  {
    slug: 'trailer-water-intrusion-laurentides',
    area: 'Laurentides',
    title: 'Trailer Water Intrusion in Laurentides | Clinique du VR',
    description: 'Help with trailer water intrusion in Laurentides including inspection, seals, roof condition, moisture signs and practical next steps from our Gatineau workshop.',
    eyebrow: 'Laurentides',
    h1: 'Trailer Water Intrusion in Laurentides',
    intro: 'Clinique du VR helps trailer owners in Laurentides when moisture signs, worn seals, or questions about watertightness begin to appear.',
    lead: 'In Laurentides, the right move is often to confirm watertightness early before moisture, seals, or roof areas have more time to deteriorate.',
    serviceType: 'Trailer Water Intrusion in Laurentides',
    highlights: ['Moisture inspection', 'Seals and roof', 'Damage prevention', 'Clear direction'],
    sections: [
      {
        title: 'Signs worth checking quickly',
        body: 'Water marks, drying seals, warped materials, moisture odours, or questionable roof condition are all signs that deserve a closer look, especially on a trailer that spends a lot of time outdoors.'
      },
      {
        title: 'Why inspection usually comes first',
        body: 'When the source of the intrusion is not yet clear, inspection is the best way to confirm the situation before talking about maintenance or repair and before treating the wrong area.'
      },
      {
        title: 'When maintenance or repair takes over',
        body: 'Once the condition of the trailer is confirmed, the next step may be seal maintenance, targeted watertightness work, or a more advanced repair depending on the extent of the damage and the overall condition of the trailer.'
      }
    ],
    faqs: [
      {
        question: 'What should I do if my trailer shows signs of water intrusion in Laurentides?',
        answer: 'The most useful first step is often inspection so moisture zones, roof condition, and seal quality can be confirmed before deciding whether maintenance or repair is needed.'
      },
      {
        question: 'Does every water-intrusion issue require immediate repair?',
        answer: 'Not always. Some cases are better handled with preventive maintenance or targeted seal work, but the actual condition needs to be confirmed first.'
      }
    ],
    links: [
      {
        href: '/en/services/inspection/',
        title: 'Start with inspection',
        body: 'See the inspection service if you suspect water intrusion or a sealing problem.',
        linkLabel: 'View inspection'
      },
      {
        href: '/en/services/maintenance/',
        title: 'View the maintenance service',
        body: 'If the roof or seals mostly need preventive attention, maintenance is often the next step.',
        linkLabel: 'View maintenance'
      }
    ]
  }
];

function normalizeForComparison(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function assertUniqueLocalAreaContent(locale: string, pages: LocalAreaPage[]) {
  const seenSlugs = new Set<string>();
  const seenKeys = new Map<string, string>();

  for (const page of pages) {
    if (seenSlugs.has(page.slug)) {
      throw new Error(`Duplicate local area slug detected for ${locale}: ${page.slug}`);
    }

    seenSlugs.add(page.slug);

    for (const [field, value] of [
      ['title', page.title],
      ['intro', page.intro],
      ['lead', page.lead],
      ['serviceType', page.serviceType]
    ] as const) {
      const normalized = normalizeForComparison(value);
      const existingSlug = seenKeys.get(`${field}:${normalized}`);

      if (existingSlug) {
        throw new Error(`Duplicate local area ${field} detected for ${locale}: ${page.slug} matches ${existingSlug}`);
      }

      seenKeys.set(`${field}:${normalized}`, page.slug);
    }
  }
}

assertUniqueLocalAreaContent('fr', localAreaPagesFr);
assertUniqueLocalAreaContent('en', localAreaPagesEn);
