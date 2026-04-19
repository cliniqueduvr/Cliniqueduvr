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
    slug: 'fuite-eau-vr-gatineau',
    area: 'Gatineau',
    title: "Fuite d’eau de VR à Gatineau | Clinique du VR",
    description: "Fuite d'eau de VR à Gatineau: inspection, détection d'humidité, joints, toiture et orientation vers la bonne réparation ou le bon entretien.",
    eyebrow: 'Gatineau',
    h1: "Fuite d’eau de VR à Gatineau",
    intro: "Clinique du VR aide à Gatineau quand un VR présente une fuite d'eau, des traces d'humidité, des joints suspects ou une toiture qui laisse planer un doute sur l'étanchéité.",
    lead: "À Gatineau, une fuite d'eau de VR demande surtout une lecture claire de la situation: savoir si le problème relève d'une inspection, d'un entretien de joints ou d'une réparation déjà nécessaire.",
    serviceType: "Fuite d’eau de VR à Gatineau",
    highlights: ["Fuite d'eau", "Humidité", 'Joints et toiture', 'Diagnostic utile'],
    sections: [
      {
        title: "Les signes qui doivent alerter rapidement",
        body: "Une odeur d'humidité, une tache d'eau, un mur mou, un plancher qui gonfle ou des joints fatigués sont des signes qui justifient une vérification rapide. Plus la fuite d'eau dure, plus les dommages deviennent coûteux."
      },
      {
        title: "Inspection, entretien ou réparation?",
        body: "Quand la fuite d'eau n'est pas encore clairement localisée, l'inspection permet de confirmer la zone touchée. Quand les joints et le scellement commencent à fatiguer sans dommage majeur, l'entretien peut suffire. Quand les matériaux sont déjà atteints, la réparation devient généralement la bonne étape."
      },
      {
        title: "Ce que nous regardons d'abord à Gatineau",
        body: "Nous ciblons les joints de mur, les joints de toit, les ouvertures sensibles, la membrane et les signes d'humidité visibles ou mesurables. L'objectif est de vous orienter rapidement vers la bonne intervention au lieu de multiplier les démarches."
      }
    ],
    faqs: [
      {
        question: "Que faire si mon VR a une fuite d'eau à Gatineau?",
        answer: "Il faut d'abord confirmer la source et l'ampleur du problème. Selon l'état des joints, de la toiture et des matériaux atteints, la meilleure prochaine étape peut être une <a href=\"/services/inspection/\">inspection</a>, un <a href=\"/services/entretien/\">entretien ciblé</a> ou une <a href=\"/services/reparation/\">réparation</a>."
      },
      {
        question: "Une fuite d'eau exige-t-elle toujours une grosse réparation?",
        answer: "Pas toujours. Si le problème est pris tôt, un <a href=\"/services/entretien/\">entretien</a> ou une reprise de scellement peut parfois suffire. Quand les murs, le plancher ou les finis sont déjà touchés, la <a href=\"/services/reparation/\">réparation</a> devient souvent nécessaire."
      }
    ],
    links: [
      {
        href: '/services/inspection/',
        title: "Commencer par l'inspection",
        body: "Voyez le service d'inspection si vous devez confirmer la source d'une fuite d'eau, l'état des joints ou l'humidité dans le VR.",
        linkLabel: "Voir l'inspection"
      },
      {
        href: '/services/reparation/',
        title: 'Voir la réparation spécialisée',
        body: "Consultez cette page si la fuite d'eau a déjà causé des dommages au plancher, aux murs, à la toiture ou aux finis intérieurs.",
        linkLabel: 'Voir la réparation'
      }
    ]
  },
  {
    slug: 'entretien-vr-gatineau',
    area: 'Gatineau',
    title: "Entretien de VR à Gatineau | Clinique du VR",
    description: "Entretien de VR à Gatineau pour joints, toiture, membrane et prévention de fuite d'eau sur roulotte, caravane et véhicule récréatif.",
    eyebrow: 'Gatineau',
    h1: "Entretien de VR à Gatineau",
    intro: "Clinique du VR prend en charge l'entretien de VR à Gatineau quand le besoin principal concerne les joints, la toiture, la membrane et la prévention des fuites d'eau.",
    lead: "À Gatineau, un entretien fait au bon moment permet souvent d'éviter que des joints fatigués ou une toiture vulnérable se transforment en infiltration d'eau et en réparation plus lourde.",
    serviceType: "Entretien de VR à Gatineau",
    highlights: ['Joints', 'Toiture', 'Membrane', "Prévention de fuite d'eau"],
    sections: [
      {
        title: "Pourquoi l'entretien change souvent tout",
        body: "Les joints de mur, les joints de toit, les zones de scellement exposées et la membrane de toit vieillissent naturellement. Un entretien fait avant la fuite d'eau coûte souvent beaucoup moins cher qu'une réparation après dommage."
      },
      {
        title: "Les bons cas pour un entretien à Gatineau",
        body: "L'entretien est utile quand les joints commencent à sécher, craquer ou décoller, quand la toiture montre un scellement incomplet ou quand vous voulez simplement remettre le VR en ordre avant la saison."
      },
      {
        title: "Ce que nous visons avec l'entretien",
        body: "Le but est de préserver l'étanchéité du VR, de reprendre les zones faibles avant qu'elles laissent entrer l'eau et de vous donner une vision claire des prochains points à surveiller."
      }
    ],
    faqs: [
      {
        question: "À quel moment faire l'entretien d'un VR à Gatineau?",
        answer: "Dès que les joints commencent à fatiguer, que la toiture semble vulnérable ou avant la saison si vous voulez réduire le risque de fuite d'eau et de dommages plus coûteux. Voyez aussi notre ressource <a href=\"/ressources/entretien-vr-deux-fois-par-an/\">entretien de VR deux fois par an</a>."
      },
      {
        question: "L'entretien aide-t-il vraiment à prévenir une fuite d'eau?",
        answer: "Oui. Un <a href=\"/services/entretien/\">entretien</a> bien ciblé des joints, du scellement et de la membrane aide à préserver l'étanchéité et à éviter qu'une faiblesse mineure devienne un problème majeur."
      }
    ],
    links: [
      {
        href: '/services/entretien/',
        title: "Voir le service d'entretien",
        body: "Consultez le détail du service si vous voulez reprendre les joints, entretenir la toiture ou réduire le risque de fuite d'eau.",
        linkLabel: "Voir l'entretien"
      },
      {
        href: '/contact/',
        title: "Parler de votre VR",
        body: "Envoyez des photos et une courte description si vous hésitez entre un entretien préventif, une inspection ou une réparation.",
        linkLabel: "Contacter l'atelier"
      }
    ]
  },
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
        answer: "Une <a href=\"/services/inspection/\">inspection</a> permet de confirmer l'état réel du véhicule, de détecter les signes d'humidité ou d'infiltration et de mieux orienter la suite, que ce soit avant achat, avant réparation ou avant vente dans l'Outaouais."
      },
      {
        question: "L'inspection est-elle utile avant une réparation?",
        answer: "Oui. Quand le problème n'est pas encore parfaitement clair, l'<a href=\"/services/inspection/\">inspection</a> aide à éviter de partir dans la mauvaise direction et à prioriser les bons travaux."
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
        answer: "Quand les dommages sont déjà visibles ou confirmés, par exemple un plancher mou, un mur touché, une toiture endommagée ou des signes de moisissure liés à l'eau, la <a href=\"/services/reparation/\">réparation</a> devient généralement la bonne prochaine étape."
      },
      {
        question: "Réparez-vous seulement l'apparence ou aussi la cause?",
        answer: "La réparation utile commence par la validation de la cause. Le but est de corriger le problème à la base avant de remettre les surfaces en état. Consultez notre page <a href=\"/services/reparation/\">réparation spécialisée</a> pour le détail."
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
        answer: "La première étape utile est souvent l'<a href=\"/services/inspection/\">inspection</a> pour confirmer les zones humides, l'état de la toiture et des joints, puis décider si un <a href=\"/services/entretien/\">entretien</a> ou une <a href=\"/services/reparation/\">réparation</a> est nécessaire."
      },
      {
        question: "Tous les problèmes d'infiltration demandent-ils une réparation immédiate?",
        answer: "Pas toujours. Certains cas relèvent d'un <a href=\"/services/entretien/\">entretien préventif</a> ou d'une reprise ciblée des joints, mais il faut d'abord confirmer l'état réel de la roulotte."
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
    slug: 'rv-water-leak-gatineau',
    area: 'Gatineau',
    title: 'RV Water Leak in Gatineau | Clinique du VR',
    description: 'RV water leak help in Gatineau for moisture, seals, roof issues and the right next step between inspection, maintenance and repair.',
    eyebrow: 'Gatineau',
    h1: 'RV Water Leak in Gatineau',
    intro: 'Clinique du VR helps in Gatineau when an RV shows signs of a water leak, moisture, suspicious seals, or roof issues that raise doubts about watertightness.',
    lead: 'In Gatineau, an RV water leak usually needs one clear answer first: whether the next useful step is inspection, seal maintenance, or repair work that is already necessary.',
    serviceType: 'RV Water Leak in Gatineau',
    highlights: ['Water leak', 'Moisture', 'Seals and roof', 'Useful diagnosis'],
    sections: [
      {
        title: 'The signs that should be checked quickly',
        body: 'A moisture smell, water stain, soft wall, swelling floor, or tired seals are all signs that deserve a quick check. The longer a water leak continues, the more expensive the damage can become.'
      },
      {
        title: 'Inspection, maintenance, or repair?',
        body: 'When the source of the water leak is not yet clear, inspection helps confirm the area involved. When the seals and sealing are getting tired without major damage yet, maintenance may be enough. When materials are already affected, repair is usually the right next step.'
      },
      {
        title: 'What we look at first in Gatineau',
        body: 'We focus on wall seals, roof seals, vulnerable openings, the roof membrane, and visible or measurable signs of moisture. The goal is to point you quickly toward the right intervention instead of wasting time on the wrong path.'
      }
    ],
    faqs: [
      {
        question: 'What should I do if my RV has a water leak in Gatineau?',
        answer: 'The first step is to confirm the source and the extent of the problem. Depending on the condition of the seals, roof, and affected materials, the best next step may be inspection, targeted maintenance, or repair.'
      },
      {
        question: 'Does a water leak always mean a major repair?',
        answer: 'Not always. If the issue is caught early, seal maintenance or a targeted sealing correction may be enough. When walls, flooring, or finishes are already affected, repair is often required.'
      }
    ],
    links: [
      {
        href: '/en/services/inspection/',
        title: 'Start with inspection',
        body: 'See the inspection service if you need to confirm the source of a water leak, the condition of the seals, or moisture inside the RV.',
        linkLabel: 'View inspection'
      },
      {
        href: '/en/services/repair/',
        title: 'See specialized repair',
        body: 'Visit this page if the water leak has already caused damage to the flooring, walls, roof, or interior finishes.',
        linkLabel: 'View repair'
      }
    ]
  },
  {
    slug: 'rv-maintenance-gatineau',
    area: 'Gatineau',
    title: 'RV Maintenance in Gatineau | Clinique du VR',
    description: 'RV maintenance in Gatineau for seals, roof areas, membrane care and water leak prevention on trailers, caravans and recreational vehicles.',
    eyebrow: 'Gatineau',
    h1: 'RV Maintenance in Gatineau',
    intro: 'Clinique du VR handles RV maintenance in Gatineau when the main need involves seals, roof areas, membrane care, and preventing water leaks before they spread.',
    lead: 'In Gatineau, maintenance done at the right time often prevents tired seals or a vulnerable roof from turning into water intrusion and a much larger repair file.',
    serviceType: 'RV Maintenance in Gatineau',
    highlights: ['Seals', 'Roof', 'Membrane', 'Water leak prevention'],
    sections: [
      {
        title: 'Why maintenance often changes the outcome',
        body: 'Wall seals, roof seals, exposed sealing areas, and roof membranes all age naturally. Maintenance done before a water leak starts usually costs much less than repairing the damage afterward.'
      },
      {
        title: 'When maintenance is the right fit in Gatineau',
        body: 'Maintenance is useful when seals begin drying, cracking, or lifting, when the roof shows incomplete or tired sealing, or when you simply want to get the RV ready before the season.'
      },
      {
        title: 'What we aim for with maintenance',
        body: 'The goal is to preserve the RV’s watertightness, correct weak areas before water gets in, and give you a clear view of the next points that should be monitored.'
      }
    ],
    faqs: [
      {
        question: 'When should RV maintenance be done in Gatineau?',
        answer: 'As soon as the seals start to age, the roof looks vulnerable, or before the season if you want to reduce the risk of water leaks and more expensive damage.'
      },
      {
        question: 'Does maintenance really help prevent water leaks?',
        answer: 'Yes. Well-targeted seal, roof, and membrane maintenance helps preserve watertightness and keeps a minor weakness from becoming a much bigger problem.'
      }
    ],
    links: [
      {
        href: '/en/services/maintenance/',
        title: 'View the maintenance service',
        body: 'See the service details if you want to refresh seals, maintain the roof, or lower the risk of future water leaks.',
        linkLabel: 'View maintenance'
      },
      {
        href: '/en/contact/',
        title: 'Talk to us about your RV',
        body: 'Send photos and a short description if you are hesitating between preventive maintenance, inspection, or repair.',
        linkLabel: 'Contact the workshop'
      }
    ]
  },
  {
    slug: 'rv-inspection-outaouais',
    area: 'Outaouais',
    title: 'RV Inspection in Outaouais | Clinique du VR',
    description: 'RV inspection in Outaouais for water intrusion, seals, roof condition, and pre-purchase validation, with the workshop based in Gatineau.',
    eyebrow: 'Outaouais',
    h1: 'RV Inspection in Outaouais',
    intro: 'Clinique du VR helps clients in Outaouais who want to clarify their RV’s actual condition before repairs, a purchase, or restoration work.',
    lead: 'In Outaouais, inspection is often the right starting point when the RV is nearby, between seasons, or being assessed before a quick decision.',
    serviceType: 'RV Inspection in Outaouais',
    highlights: ['Visual inspection', 'Moisture meter', 'Before purchase', 'Seals and roof'],
    sections: [
      {
        title: 'When inspection is the right starting point',
        body: 'Inspection is especially useful when you suspect water intrusion, want to verify the condition of the roof or seals, or need a clear opinion before committing to work in the Outaouais area.'
      },
      {
        title: 'For buyers and sellers in Outaouais',
        body: 'Before a transaction, inspection helps clarify strengths, risks, and useful corrections. It is often the right approach for an RV being considered locally in Outaouais before going any further.'
      },
      {
        title: 'What we review first',
        body: 'We focus on seals, roof areas, vulnerable openings, and signs of moisture. The goal is to quickly identify higher-risk areas and point you to the most useful next step without unnecessary back-and-forth.'
      }
    ],
    faqs: [
      {
        question: 'Why request an RV inspection in Outaouais?',
        answer: 'Inspection helps confirm the vehicle’s actual condition, detect moisture or water-intrusion signs, and guide the next step whether you are buying, repairing, or preparing for a sale.'
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
    intro: 'Clinique du VR helps clients in Ottawa who need specialized RV repair related to water, roofing, or visible damage inside the vehicle.',
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
        body: 'Browse examples of workshop interventions to better understand your situation before contacting us.',
        linkLabel: 'View projects'
      }
    ]
  },
  {
    slug: 'trailer-water-intrusion-laurentides',
    area: 'Laurentides',
    title: 'Trailer Water Intrusion in Laurentides | Clinique du VR',
    description: 'Help with trailer water intrusion in Laurentides, including inspection, seals, roof condition, moisture signs, and practical next steps from our Gatineau workshop.',
    eyebrow: 'Laurentides',
    h1: 'Trailer Water Intrusion in Laurentides',
    intro: 'Clinique du VR helps trailer owners in Laurentides when signs of moisture, worn seals, or questions about water intrusion begin to appear.',
    lead: 'In Laurentides, the right move is often to confirm the seal early before moisture, seals, or roof areas have more time to deteriorate.',
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
        body: 'Once the trailer’s condition is confirmed, the next step may be seal maintenance, targeted sealing work, or a more advanced repair depending on the extent of the damage and the trailer’s overall condition.'
      }
    ],
    faqs: [
      {
        question: 'What should I do if my trailer shows signs of water intrusion in Laurentides?',
        answer: 'The most useful first step is often inspection so moisture zones, roof condition, and seal quality can be confirmed before deciding whether maintenance or repair is needed.'
      },
      {
        question: 'Does every water-intrusion issue require immediate repair?',
        answer: 'Not always. Some cases are better handled with preventive maintenance or targeted seal work, but the trailer’s actual condition needs to be confirmed first.'
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
