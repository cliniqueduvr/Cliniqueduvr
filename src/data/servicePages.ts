import type { FAQItem } from '../lib/seo';

export interface WhyChoosePoint {
  title: string;
  text: string;
}

export interface ServicePage {
  slug: string;
  alternateSlug: string;
  title: string;
  h1: string;
  navLabel: string;
  icon: string;
  serviceType: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  opening: string;
  lead: string;
  intro: string;
  detailIntro: string;
  highlights: string[];
  includedTitle: string;
  included: string[];
  situationsTitle: string;
  situations: string[];
  processIntro: string;
  process: string[];
  whyChooseTitle: string;
  whyChooseIntro: string;
  whyChoose: WhyChoosePoint[];
  faqTitle: string;
  faqs: FAQItem[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'inspection',
    alternateSlug: 'inspection',
    title: 'Inspection de VR',
    h1: 'Inspection de VR a Gatineau-Ottawa',
    navLabel: 'Inspection',
    icon: 'fas fa-clipboard-check',
    serviceType: 'Inspection de VR',
    seoTitle: 'Inspection de VR a Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'Inspection de VR a Gatineau-Ottawa avant achat, avant saison ou avant depart. Devis gratuit. RBQ: 5824-9764-01.',
    eyebrow: 'Diagnostic avant achat ou avant saison',
    opening: "Clinique du VR offre l'inspection de VR a Gatineau-Ottawa pour valider l'etat reel d'un vehicule recreatif avant achat, avant depart ou avant travaux. Nous inspectons les points critiques comme l'etancheite, la toiture, les joints, les appareils 12V et 110V, le propane, les slide-out et l'habitacle afin de reduire les surprises couteuses et d'aider a prendre une decision claire.",
    lead: "Il est primordial de faire inspecter un VR avant l'achat, neuf ou usage. On valide l'etat reel du vehicule avant que les problemes deviennent des surprises couteuses.",
    intro: "Clinique du VR offre des inspections completes, partielles, mecaniques et habitacle. L'objectif est simple: vous donner un portrait fiable, clair et exploitable de l'etat du VR avant achat ou avant de partir a l'aventure.",
    detailIntro: "Une bonne inspection ne se limite pas a regarder l'apparence generale du VR. Nous cherchons les signes d'usure, les faiblesses d'etancheite, les problemes de fonctionnement et les indices qui peuvent annoncer des reparations importantes. Ce travail sert autant a rassurer un acheteur qu'a preparer un proprietaire avant la saison, avant un long trajet ou avant des travaux cibles.",
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
    processIntro: "Notre processus d'inspection de VR a Gatineau-Ottawa est pense pour que vous sachiez rapidement ce qui est normal, ce qui doit etre surveille et ce qui doit etre corrige en priorite. Le but n'est pas de produire un jargon inutile, mais un diagnostic utile pour l'achat, l'entretien ou la planification des reparations.",
    process: [
      'Prise de contact et validation du type de VR',
      'Inspection complete ou ciblee selon votre besoin',
      'Retour clair sur les points critiques, a surveiller et a corriger',
      "Recommendation des prochaines etapes si des reparations sont necessaires"
    ],
    whyChooseTitle: 'Pourquoi choisir Clinique du VR pour l inspection de VR?',
    whyChooseIntro: "L'inspection devient utile seulement si elle est reliee a des faits concrets, a un contexte de route et a des recommandations comprenables. C'est la valeur d'un atelier specialise qui connait les problemes frequents de toiture, de joints, de fuite d'eau et de systemes integres en VR.",
    whyChoose: [
      {
        title: 'Approche terrain',
        text: "Nous parlons en fonction de l'etat reel du vehicule et de l'usage prevu, pas seulement d'une liste abstraite de verifications."
      },
      {
        title: 'Vision preventive',
        text: "Nous cherchons les zones faibles avant qu'elles deviennent des refections lourdes, notamment autour de la toiture, des ouvertures et des points d'eau."
      },
      {
        title: 'Diagnostic exploitable',
        text: 'Vous repartez avec une lecture claire des priorites, ce qui aide pour negocier un achat, planifier des travaux ou partir en confiance.'
      }
    ],
    faqTitle: "Questions frequentes sur l'inspection de VR",
    faqs: [
      {
        question: 'Combien coute une inspection de VR?',
        answer: "Le cout depend surtout du type de vehicule, de sa taille et du niveau d'inspection demande. Clinique du VR offre des devis gratuits afin d'orienter le client vers une inspection complete ou ciblee adaptee a la situation."
      },
      {
        question: 'Quand devrait-on faire inspecter son VR?',
        answer: "Nous recommandons une inspection avant l'achat d'un VR usage, au debut de la saison, avant un long voyage et des qu'un doute existe sur l'etancheite ou le fonctionnement des systemes importants."
      },
      {
        question: 'Quels systemes sont verifies lors d une inspection?',
        answer: "Nous regardons l'habitacle, les traces d'infiltration, les joints, la toiture, les appareils propane, 12V et 110V, les jacks, les slide-out et d'autres composantes selon le type de VR."
      }
    ]
  },
  {
    slug: 'entretien',
    alternateSlug: 'maintenance',
    title: 'Entretien de VR',
    h1: 'Entretien de VR a Gatineau-Ottawa',
    navLabel: 'Entretien',
    icon: 'fas fa-screwdriver-wrench',
    serviceType: 'Entretien de VR',
    seoTitle: 'Entretien de VR a Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'Entretien de VR a Gatineau-Ottawa pour prevenir les pannes, proteger la toiture et prolonger la vie du vehicule. Devis gratuit.',
    eyebrow: 'Preventif, saisonnier et durable',
    opening: "L'entretien de VR a Gatineau-Ottawa permet de prevenir les pannes, de prolonger la duree de vie du vehicule et de proteger les composantes sensibles comme la toiture, les joints, les appareils 12V et 110V ainsi que les accessoires mobiles. Clinique du VR intervient avec une logique preventive pour reduire les couts futurs et garder le vehicule plus fiable pendant la saison.",
    lead: "Un bon entretien coute toujours moins cher qu'une panne en plein voyage. L objectif est de garder votre VR fiable, pret pour la route et mieux protege contre l usure de la saison.",
    intro: "Nous prenons en charge l'entretien regulier des systemes et des points sensibles du VR pour limiter l'usure, stabiliser la valeur du vehicule et garder tout fonctionnel au bon moment.",
    detailIntro: "Un entretien de VR bien fait est plus qu'une simple verification rapide. Il consiste a revoir les zones qui vieillissent mal, les systemes qui se degradent discretement et les points qui causent souvent des fuites, des pannes electriques ou des problemes de depart en debut de saison.",
    highlights: [
      'Entretien avant saison',
      'Verification des composantes a risque',
      'Approche preventive et documentee',
      'Interventions adaptees au type de vehicule'
    ],
    includedTitle: "Ce que nous faisons en entretien",
    included: [
      'Verification des joints et points de scellement',
      'Controle de la toiture et des membranes',
      'Verification des appareils 12V, 110V et propane',
      'Ajustement des composantes mobiles et accessoires',
      'Inspection preventive des traces d usure ou infiltration'
    ],
    situationsTitle: "Quand faire l'entretien",
    situations: [
      'Au debut ou a la fin de la saison',
      'Avant un long deplacement',
      'Pour reduire le risque de reparation majeure',
      'Pour conserver un VR plus fiable et plus propre'
    ],
    processIntro: "Nous structurons l'entretien en fonction de l'etat du vehicule, de l'historique disponible et du type d'utilisation. Cela permet d'eviter les visites inutiles et de concentrer l'effort sur les composantes qui ont le plus d'impact sur la fiabilite du VR.",
    process: [
      'Evaluation du vehicule et des priorites',
      'Entretien des points prevus au rendez-vous',
      'Retour sur ce qui a ete fait et ce qui doit etre surveille',
      'Planification des prochaines interventions au besoin'
    ],
    whyChooseTitle: 'Pourquoi choisir Clinique du VR pour l entretien de VR?',
    whyChooseIntro: "Le bon atelier d'entretien n'est pas celui qui ajoute des travaux partout, mais celui qui sait cibler les zones qui comptent le plus selon la saison et selon l'usage du VR. C'est cette approche que nous appliquons a Gatineau-Ottawa.",
    whyChoose: [
      {
        title: 'Entretien utile',
        text: 'Nous priorisons les composantes qui ont le plus d impact sur la fiabilite, la securite et la prevention des infiltrations.'
      },
      {
        title: 'Vision saisonniere',
        text: 'Nos recommandations tiennent compte du debut de saison, de l entreposage et des longs trajets ou la charge sur le vehicule augmente.'
      },
      {
        title: 'Suivi clair',
        text: 'Le client comprend ce qui est regle maintenant, ce qui peut attendre et ce qui doit etre surveille a court terme.'
      }
    ],
    faqTitle: "Questions frequentes sur l'entretien de VR",
    faqs: [
      {
        question: 'Pourquoi faire un entretien preventif de VR?',
        answer: "L'entretien preventif permet de detecter les signes d'usure avant qu'ils causent une panne, une fuite d'eau ou une intervention plus couteuse pendant la saison."
      },
      {
        question: 'Quels elements d entretien sont les plus importants?',
        answer: "Les joints, la toiture, les appareils electriques et propane ainsi que les composantes mobiles font partie des zones les plus importantes a verifier regulierement."
      },
      {
        question: 'A quelle frequence faut-il faire entretenir un VR?',
        answer: "La frequence depend de l'utilisation, de l'age du vehicule et des conditions d'entreposage, mais un entretien au debut ou a la fin de la saison est une base recommandee."
      }
    ]
  },
  {
    slug: 'reparation',
    alternateSlug: 'repair',
    title: 'Reparation de VR',
    h1: 'Reparation de VR a Gatineau-Ottawa',
    navLabel: 'Reparation',
    icon: 'fas fa-toolbox',
    serviceType: 'Reparation de VR',
    seoTitle: 'Reparation de VR a Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'Reparation de VR a Gatineau-Ottawa: fuite d eau, toiture, joints et remise en etat interieure. Devis gratuit.',
    eyebrow: 'Fuites, toiture et remise en etat',
    opening: "Clinique du VR prend en charge la reparation de VR a Gatineau-Ottawa pour les problemes d'infiltration d'eau, de toiture, de joints, de deterioration interieure et de remise en etat generale. Nous cherchons d'abord la vraie source du probleme afin d'eviter les correctifs temporaires qui masquent un dommage plus important.",
    lead: "Quand un probleme est visible, il y a souvent un dommage cache derriere. La page de reparation doit donc inspirer confiance et montrer une methode propre.",
    intro: "Nous intervenons sur les problemes les plus frequents en VR, avec une logique simple: trouver la cause, corriger le vrai probleme et remettre le vehicule en etat sans improvisation.",
    detailIntro: "La reparation de VR exige souvent une lecture plus large que le symptome visible. Une tache d'eau, un joint fatigue, un mur mou ou une odeur inhabituelle peuvent indiquer un probleme de toiture, d'ouverture ou d'etancheite qui dure depuis plus longtemps que prevu.",
    highlights: [
      "Reparation de fuite d'eau",
      'Changement ou remise en etat de toiture',
      'Correction structurelle et finition',
      'Priorisation des travaux essentiels'
    ],
    includedTitle: 'Ce que nous reparons',
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
    processIntro: "Notre methode de reparation commence par la validation de la cause, puis par l'ordre logique des travaux. Cela permet de corriger le bon probleme, de limiter les retours en atelier et de proteger le vehicule plus longtemps.",
    process: [
      'Diagnostic pour confirmer la source',
      'Plan de correction avec ordre logique des travaux',
      'Execution, remise en etat et verification finale',
      'Conseils preventifs pour eviter un retour du probleme'
    ],
    whyChooseTitle: 'Pourquoi choisir Clinique du VR pour la reparation de VR?',
    whyChooseIntro: "La difference entre une reparation utile et une reparation fragile se joue souvent dans la qualite du diagnostic initial et dans la capacite a traiter la cause. C'est la base de notre approche en atelier.",
    whyChoose: [
      {
        title: 'Priorite a la source',
        text: "Nous cherchons la veritable origine de l'infiltration ou du dommage avant de refaire les finis."
      },
      {
        title: 'Travaux ordonnes',
        text: 'Le sequence des interventions est pensee pour stabiliser le vehicule, proteger les zones saines et remettre le VR en etat proprement.'
      },
      {
        title: 'Communication simple',
        text: 'Le client comprend le probleme, la solution proposee et la logique de priorisation du devis.'
      }
    ],
    faqTitle: 'Questions frequentes sur la reparation de VR',
    faqs: [
      {
        question: 'Que faire si mon VR presente une infiltration d eau?',
        answer: "Il faut agir rapidement et faire confirmer la source avant que l'humidite endommage davantage la structure, l'isolation ou les finis interieurs."
      },
      {
        question: 'Est-ce qu une toiture de VR se repare ou se remplace?',
        answer: "Tout depend de l'etat general de la membrane, des joints et des zones faibles. Dans certains cas une correction ciblee suffit, dans d'autres un changement plus large est plus durable."
      },
      {
        question: 'Peut-on reparer l interieur apres un dommage d eau?',
        answer: "Oui, mais seulement apres avoir corrige la cause. Nous pouvons ensuite remettre en etat les materiaux touches et la presentation interieure du vehicule."
      }
    ]
  },
  {
    slug: 'esthetique',
    alternateSlug: 'detailing',
    title: 'Esthetique de VR',
    h1: 'Esthetique de VR a Gatineau-Ottawa',
    navLabel: 'Esthetique',
    icon: 'fas fa-spray-can-sparkles',
    serviceType: 'Esthetique de VR',
    seoTitle: 'Esthetique de VR a Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'Esthetique de VR a Gatineau-Ottawa: nettoyage en profondeur, remise a neuf et preparation avant vente. Devis gratuit.',
    eyebrow: 'Presentation propre et remise a neuf',
    opening: "L'esthetique de VR a Gatineau-Ottawa chez Clinique du VR vise a rendre le vehicule plus propre, plus presentable et mieux prepare pour la saison ou pour la vente. Nous intervenons sur l'apparence generale, le nettoyage en profondeur, la remise en ordre visuelle et les details qui influencent la premiere impression du proprietaire ou de l'acheteur.",
    lead: "Le service esthetique vise un resultat simple: un VR plus propre, plus presentable et mieux prepare pour la saison ou pour la vente.",
    intro: "L'esthetique ne se limite pas a un lavage. Nous travaillons la presentation generale du vehicule pour lui redonner une apparence plus nette, plus saine et plus coherente.",
    detailIntro: "Ce service est particulierement utile apres des reparations, avant une mise en vente ou quand le VR a besoin d'un vrai rafraichissement visuel. Une presentation propre aide a mieux percevoir l'etat du vehicule et a valoriser les travaux deja effectues.",
    highlights: [
      'Remise a neuf interieure',
      'Nettoyage en profondeur',
      'Preparation avant vente',
      'Presentation soignee du vehicule'
    ],
    includedTitle: 'Ce que nous faisons en esthetique',
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
    processIntro: "Nous ajustons le niveau d'intervention selon l'etat du vehicule et selon votre objectif: rafraichissement rapide, preparation plus poussee avant vente ou remise en ordre apres reparation. Cela permet de concentrer les efforts la ou l'impact visuel est le plus fort.",
    process: [
      'Evaluation rapide de l etat et du niveau d intervention souhaite',
      'Selection des travaux esthetiques utiles',
      'Execution avec attention aux details visibles',
      'Retour final sur le resultat et les recommandations'
    ],
    whyChooseTitle: 'Pourquoi choisir Clinique du VR pour l esthetique de VR?',
    whyChooseIntro: "Un bon service esthetique pour VR ne consiste pas seulement a nettoyer. Il faut aussi comprendre ce qui nuit a la perception du vehicule, ce qui doit etre mis en valeur et ce qui doit rester coherent avec l'etat general du VR.",
    whyChoose: [
      {
        title: 'Presentation orientee resultat',
        text: 'Nous cherchons a rendre le vehicule plus net, plus accueillant et plus coherent visuellement.'
      },
      {
        title: 'Bon complement aux reparations',
        text: 'Apres des travaux techniques, une remise en ordre esthetique aide a finaliser le resultat et a mieux valoriser le vehicule.'
      },
      {
        title: 'Preparation avant vente',
        text: "Une meilleure presentation aide a rassurer un acheteur et a montrer que le VR a ete pris en charge serieusement."
      }
    ],
    faqTitle: "Questions frequentes sur l'esthetique de VR",
    faqs: [
      {
        question: "Quelle est la difference entre nettoyage et esthetique de VR?",
        answer: "Le nettoyage enleve la salete, alors que le service esthetique vise aussi la presentation generale, la coherence visuelle et la remise en ordre des details qui influencent la perception du vehicule."
      },
      {
        question: 'Quand faire un service esthetique sur un VR?',
        answer: "Ce service est utile avant la saison, avant la vente, apres des reparations ou quand le vehicule a perdu en fraicheur visuelle avec le temps."
      },
      {
        question: "Est-ce utile avant de vendre un VR?",
        answer: "Oui. Une bonne presentation aide a mieux valoriser le VR, a renforcer la confiance de l'acheteur et a rendre les autres travaux deja effectues plus visibles."
      }
    ]
  },
  {
    slug: 'vente-achat',
    alternateSlug: 'buying-selling',
    title: 'Vente et achat de VR',
    h1: 'Vente et achat de VR a Gatineau-Ottawa',
    navLabel: 'Vente et achat',
    icon: 'fas fa-van-shuttle',
    serviceType: 'Vente et achat de VR',
    seoTitle: 'Vente et achat de VR a Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'Vente et achat de VR a Gatineau-Ottawa: inspection avant transaction, preparation avant vente et priorisation des correctifs.',
    eyebrow: 'Accompagnement avant transaction',
    opening: "Le service de vente et achat de VR a Gatineau-Ottawa aide a clarifier l'etat du vehicule avant une transaction, a preparer le VR pour la mise en vente et a orienter les correctifs qui ont le plus d'impact. Clinique du VR intervient pour reduire les zones grises, mieux encadrer l'achat et ameliorer la credibilite d'un vehicule affiche.",
    lead: "Pour l achat comme pour la vente, la confiance vient d un vehicule bien evalue et bien prepare. Nous vous aidons a voir plus clair avant de prendre une decision importante.",
    intro: "Nous aidons a clarifier l'etat du VR avant une transaction et a mieux preparer le vehicule pour l'acheteur ou pour votre propre decision d'achat.",
    detailIntro: "Ce service est utile lorsque l'acheteur veut reduire les risques, lorsque le vendeur veut connaitre les correctifs les plus rentables ou lorsque le proprietaire hesite entre reparer, vendre ou conserver le vehicule. L'idee est de rendre la transaction plus simple et mieux informee.",
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
    situationsTitle: 'Quand ce service sert le plus',
    situations: [
      'Acheteur qui veut limiter les surprises',
      'Vendeur qui veut presenter un VR propre et credible',
      'Client qui hesite entre reparer, vendre ou acheter',
      'Transaction ou l etat reel du vehicule doit etre clarifie'
    ],
    processIntro: "Nous adaptons l'accompagnement selon que vous etes acheteur ou vendeur. Dans les deux cas, la logique reste la meme: comprendre l'etat du vehicule, reperer les priorites et clarifier la prochaine etape utile avant de prendre une decision.",
    process: [
      'Discussion sur le contexte de vente ou achat',
      'Inspection ou preparation du vehicule',
      'Synthese des points a corriger ou mettre en valeur',
      'Prochaine etape recommandee selon votre objectif'
    ],
    whyChooseTitle: 'Pourquoi choisir Clinique du VR pour la vente et l achat de VR?',
    whyChooseIntro: "Une transaction se passe mieux lorsque l'etat du vehicule est compris et documente. C'est ce qui aide a poser un prix plus coherent, a negocier avec plus de confiance ou a eviter un mauvais achat.",
    whyChoose: [
      {
        title: 'Lecture objective',
        text: 'Nous aidons a distinguer les details cosmetiques des vrais enjeux techniques ou structuraux.'
      },
      {
        title: 'Preparation ciblee',
        text: 'Avant la vente, nous concentrons les efforts sur les points qui renforcent le plus la confiance de l acheteur.'
      },
      {
        title: 'Decision plus claire',
        text: 'Avant achat, vous obtenez une meilleure vision des forces, des limites et des travaux potentiels du vehicule.'
      }
    ],
    faqTitle: 'Questions frequentes sur la vente et l achat de VR',
    faqs: [
      {
        question: 'Pourquoi faire inspecter un VR avant de l acheter?',
        answer: "Une inspection avant achat aide a detecter les problemes d'etancheite, de toiture, de systemes ou de presentation qui peuvent influencer la valeur reelle du vehicule."
      },
      {
        question: 'Quels travaux valent la peine avant de vendre un VR?',
        answer: "Les travaux les plus utiles sont ceux qui clarifient l'etat du vehicule, corrigent les problemes majeurs et ameliorent la presentation generale sans surinvestir inutilement."
      },
      {
        question: 'Pouvez-vous aider si je ne sais pas si je dois reparer ou vendre?',
        answer: "Oui. Ce service sert justement a prioriser les correctifs et a mieux comprendre si le vehicule merite une remise en etat, une vente rapide ou une mise a niveau plus progressive."
      }
    ]
  }
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service])
) as Record<string, ServicePage>;
