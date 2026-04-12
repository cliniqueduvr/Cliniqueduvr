export interface ServicePage {
  slug: string;
  title: string;
  navLabel: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  lead: string;
  intro: string;
  highlights: string[];
  includedTitle: string;
  included: string[];
  situationsTitle: string;
  situations: string[];
  process: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'inspection',
    title: 'Inspection de VR',
    navLabel: 'Inspection',
    icon: 'fas fa-clipboard-check',
    seoTitle: 'Inspection de VR | Clinique du VR',
    seoDescription: "Inspection complete ou ciblee de VR avant achat, avant depart ou pour valider l'etat general du vehicule.",
    eyebrow: 'Diagnostic avant achat ou avant saison',
    lead: "Il est primordial de faire inspecter un VR avant l'achat, neuf ou usage. On valide l'etat reel du vehicule avant que les problemes deviennent des surprises couteuses.",
    intro: "Clinique du VR offre des inspections completes, partielles, mecaniques et habitacle. L'objectif est simple: vous donner un portrait fiable, clair et exploitable de l'etat du VR avant achat ou avant de partir a l'aventure.",
    highlights: [
      'Inspection complete avant achat',
      'Inspection ciblee avant depart',
      'Diagnostic clair avec priorites reelles',
      'Lecture terrain pour VR, roulottes et caravanes'
    ],
    includedTitle: 'Ce que nous verifions',
    included: [
      "Inspection complete de l'habitacle",
      "Test des infiltrations d'eau et zones a risque",
      'Etat des joints, scellants et ouvertures',
      'Etat general de la toiture',
      'Fonctionnement des appareils propane, 12V et 110V',
      'Fonctionnement des jacks hydrauliques ou electriques',
      'Fonctionnement des slide-out et accessoires'
    ],
    situationsTitle: 'Quand demander une inspection',
    situations: [
      "Avant l'achat d'un VR neuf ou usage",
      'Avant un long voyage ou le debut de saison',
      "Quand vous soupconnez une infiltration d'eau",
      "Quand vous voulez planifier des travaux sans deviner"
    ],
    process: [
      'Prise de contact et validation du type de VR',
      'Inspection complete ou ciblee selon votre besoin',
      'Retour clair sur les points critiques, a surveiller et a corriger',
      "Recommendation des prochaines etapes si des reparations sont necessaires"
    ]
  },
  {
    slug: 'entretien',
    title: 'Entretien de VR',
    navLabel: 'Entretien',
    icon: 'fas fa-screwdriver-wrench',
    seoTitle: 'Entretien de VR | Clinique du VR',
    seoDescription: 'Entretien preventif de VR pour prolonger la duree de vie du vehicule et reduire les pannes en saison.',
    eyebrow: 'Preventif, saisonnier et durable',
    lead: "Un bon entretien coute toujours moins cher qu'une panne en plein voyage. Cette page sert de cadre pour un service clair, rassurant et facile a decliner en SEO.",
    intro: "Nous prenons en charge l'entretien regulier des systemes et des points sensibles du VR pour limiter l'usure, stabiliser la valeur du vehicule et garder tout fonctionnel au bon moment.",
    highlights: [
      'Entretien avant saison',
      'Verification des composantes a risque',
      'Approche preventive et documentee',
      'Interventions adaptees au type de vehicule'
    ],
    includedTitle: "Elements d'entretien frequents",
    included: [
      'Verification des joints et points de scellement',
      'Controle de la toiture et des membranes',
      'Verification des appareils 12V, 110V et propane',
      'Ajustement des composantes mobiles et accessoires',
      'Inspection preventive des traces d usure ou infiltration'
    ],
    situationsTitle: "Pourquoi faire l'entretien",
    situations: [
      'Au debut ou a la fin de la saison',
      'Avant un long deplacement',
      'Pour reduire le risque de reparation majeure',
      'Pour conserver un VR plus fiable et plus propre'
    ],
    process: [
      'Evaluation du vehicule et des priorites',
      'Entretien des points prevus au rendez-vous',
      'Retour sur ce qui a ete fait et ce qui doit etre surveille',
      'Planification des prochaines interventions au besoin'
    ]
  },
  {
    slug: 'reparation',
    title: 'Reparation de VR',
    navLabel: 'Reparation',
    icon: 'fas fa-toolbox',
    seoTitle: 'Reparation de VR | Clinique du VR',
    seoDescription: "Reparation de fuite d'eau, toiture et composantes de VR avec une approche claire et durable.",
    eyebrow: 'Fuites, toiture et remise en etat',
    lead: "Quand un probleme est visible, il y a souvent un dommage cache derriere. La page de reparation doit donc inspirer confiance et montrer une methode propre.",
    intro: "Nous intervenons sur les problemes les plus frequents en VR, avec une logique simple: trouver la cause, corriger le vrai probleme et remettre le vehicule en etat sans improvisation.",
    highlights: [
      "Reparation de fuite d'eau",
      'Changement ou remise en etat de toiture',
      'Correction structurelle et finition',
      'Priorisation des travaux essentiels'
    ],
    includedTitle: 'Reparations frequentes',
    included: [
      "Recherche de source d'infiltration",
      'Ouverture controlee et remplacement des materiaux touches',
      'Changement de toiture ou correction des zones faibles',
      'Refection de joints et scellants',
      "Remise en etat interieure apres dommage d'eau"
    ],
    situationsTitle: 'Signes qui demandent une reparation',
    situations: [
      'Trace d eau, odeur ou mur mou',
      'Toiture fatiguee ou joints fissures',
      'Plancher, plafond ou paroi endommagee',
      'Probleme qui revient malgre une reparation temporaire'
    ],
    process: [
      'Diagnostic pour confirmer la source',
      'Plan de correction avec ordre logique des travaux',
      'Execution, remise en etat et verification finale',
      'Conseils preventifs pour eviter un retour du probleme'
    ]
  },
  {
    slug: 'esthetique',
    title: 'Esthetique de VR',
    navLabel: 'Esthetique',
    icon: 'fas fa-sparkles',
    seoTitle: 'Esthetique de VR | Clinique du VR',
    seoDescription: 'Nettoyage, remise a neuf et amelioration esthetique de VR pour la saison ou avant la vente.',
    eyebrow: 'Presentation propre et remise a neuf',
    lead: "Cette page sert a vendre une promesse simple: un VR plus propre, plus presentable et mieux prepare pour la saison ou pour la vente.",
    intro: "L'esthetique ne se limite pas a un lavage. Nous travaillons la presentation generale du vehicule pour lui redonner une apparence plus nette, plus saine et plus coherente.",
    highlights: [
      'Remise a neuf interieure',
      'Nettoyage en profondeur',
      'Preparation avant vente',
      'Presentation soignee du vehicule'
    ],
    includedTitle: 'Travaux esthetiques possibles',
    included: [
      'Nettoyage interieur et exterieur en profondeur',
      'Traitement des surfaces et zones de contact',
      'Remise en ordre visuelle apres travaux',
      'Correction de petits details qui nuisent a la presentation',
      'Preparation generale avant affichage ou livraison'
    ],
    situationsTitle: 'Quand ce service est utile',
    situations: [
      'Avant le debut de saison',
      'Apres une reparation importante',
      'Avant de mettre le VR en vente',
      'Quand le vehicule a besoin d un vrai rafraichissement'
    ],
    process: [
      'Evaluation rapide de l etat et du niveau d intervention souhaite',
      'Selection des travaux esthetiques utiles',
      'Execution avec attention aux details visibles',
      'Retour final sur le resultat et les recommandations'
    ]
  },
  {
    slug: 'vente-achat',
    title: 'Vente et achat de VR',
    navLabel: 'Vente et achat',
    icon: 'fas fa-van-shuttle',
    seoTitle: 'Vente et achat de VR | Clinique du VR',
    seoDescription: "Accompagnement avant achat ou mise en vente d'un VR avec inspection, priorites et preparation du vehicule.",
    eyebrow: 'Accompagnement avant transaction',
    lead: "Pour l'achat comme pour la vente, la confiance vient d'un vehicule bien evalue et bien prepare. Cette page sert a encadrer ce service sans le surcharger.",
    intro: "Nous aidons a clarifier l'etat du VR avant une transaction et a mieux preparer le vehicule pour l'acheteur ou pour votre propre decision d'achat.",
    highlights: [
      'Inspection avant achat',
      'Preparation avant vente',
      'Lecture des priorites reelles',
      'Meilleure confiance dans la transaction'
    ],
    includedTitle: 'Ce que nous pouvons faire',
    included: [
      "Inspection avant achat avec points forts et points faibles",
      'Identification des travaux utiles avant mise en vente',
      'Preparation generale du vehicule pour meilleure presentation',
      'Orientation sur les correctifs prioritaires',
      'Appui pour prendre une decision plus claire'
    ],
    situationsTitle: 'A qui ce service sert',
    situations: [
      'Acheteur qui veut limiter les surprises',
      'Vendeur qui veut presenter un VR propre et credible',
      'Client qui hesite entre reparer, vendre ou acheter',
      'Transaction ou l etat reel du vehicule doit etre clarifie'
    ],
    process: [
      'Discussion sur le contexte de vente ou achat',
      'Inspection ou preparation du vehicule',
      'Synthese des points a corriger ou mettre en valeur',
      'Prochaine etape recommandee selon votre objectif'
    ]
  }
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service])
) as Record<string, ServicePage>;
