import type { FAQItem } from '../lib/seo';

export interface WhyChoosePointEn {
  title: string;
  text: string;
}

export interface ServicePageEn {
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
  whyChoose: WhyChoosePointEn[];
  faqTitle: string;
  faqs: FAQItem[];
}

export const servicePagesEn: ServicePageEn[] = [
  {
    slug: 'inspection',
    alternateSlug: 'inspection',
    title: 'RV Inspection',
    h1: 'RV Inspection in Gatineau-Ottawa',
    navLabel: 'Inspection',
    icon: 'fas fa-clipboard-check',
    serviceType: 'RV Inspection',
    seoTitle: 'RV Inspection in Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'RV inspection in Gatineau-Ottawa before purchase, before the season or before departure. Free estimate available.',
    eyebrow: 'Before purchase or before the season',
    opening: 'Clinique du VR provides RV inspection in Gatineau-Ottawa to confirm the real condition of a recreational vehicle before purchase, before departure or before repair planning. We inspect key risk areas such as water intrusion, roof condition, seals, propane appliances, 12V and 110V systems, slide-outs and interior components so owners can make better decisions with fewer costly surprises.',
    lead: 'An RV should always be inspected before purchase, whether it is new or used. The goal is to confirm the real condition of the vehicle before hidden problems become expensive surprises.',
    intro: 'Clinique du VR offers complete, partial, mechanical and interior inspections. The purpose is simple: give you a reliable and practical picture of the RV before buying it or before heading out on the road.',
    detailIntro: 'A good RV inspection is more than a quick visual review. It means checking the areas that commonly fail, looking for signs of hidden water damage and validating whether the major systems actually operate the way they should under normal use.',
    highlights: [
      'Complete pre-purchase inspections',
      'Targeted inspections before departure',
      'Clear diagnostic with real priorities',
      'Practical review for RVs, trailers and caravans'
    ],
    includedTitle: 'What we inspect',
    included: [
      'Full interior inspection',
      'Water intrusion testing and risk zones review',
      'Condition of seals, sealants and openings',
      'Overall roof condition',
      'Operation of propane, 12V and 110V appliances',
      'Operation of hydraulic or electric jacks',
      'Operation of slide-outs and related systems'
    ],
    situationsTitle: 'When to book an inspection',
    situations: [
      'Before buying a new or used RV',
      'Before a long trip or the start of the season',
      'When you suspect water intrusion',
      'When you want to plan repairs without guessing'
    ],
    processIntro: 'Our inspection process is designed to separate critical issues from normal wear so the owner or buyer can move forward with a clear sense of urgency, budget and next steps.',
    process: [
      'Initial discussion and vehicle type confirmation',
      'Complete or targeted inspection based on your goal',
      'Clear feedback on critical items, watch items and repair priorities',
      'Recommended next steps if repairs are needed'
    ],
    whyChooseTitle: 'Why choose Clinique du VR for RV inspection?',
    whyChooseIntro: 'Inspection becomes valuable only when it connects visible symptoms, likely causes and realistic next steps. That is where a specialized workshop can provide more useful guidance than a simple checklist.',
    whyChoose: [
      {
        title: 'Practical workshop perspective',
        text: 'We read the vehicle in terms of actual condition and likely repair impact, not only in terms of isolated symptoms.'
      },
      {
        title: 'Preventive mindset',
        text: 'We focus on the areas most likely to trigger larger costs later, especially around the roof, openings, seals and water-sensitive zones.'
      },
      {
        title: 'Clear guidance',
        text: 'You leave with a more usable picture of what is fine, what should be watched and what should be addressed sooner.'
      }
    ],
    faqTitle: 'Frequently asked questions about RV inspection',
    faqs: [
      {
        question: 'How much does an RV inspection cost?',
        answer: 'The price depends on the vehicle type, size and level of inspection needed. Clinique du VR offers free estimate guidance to help determine the right inspection scope before booking.'
      },
      {
        question: 'When should an RV be inspected?',
        answer: 'An inspection is strongly recommended before buying a used RV, before the season starts, before a major trip and whenever there is concern about water intrusion or system performance.'
      },
      {
        question: 'What systems are checked during an inspection?',
        answer: 'We review the interior, signs of leaks, seals, roof condition, propane appliances, 12V and 110V systems, jacks, slide-outs and other key components based on the vehicle configuration.'
      }
    ]
  },
  {
    slug: 'maintenance',
    alternateSlug: 'entretien',
    title: 'RV Maintenance',
    h1: 'RV Maintenance in Gatineau-Ottawa',
    navLabel: 'Maintenance',
    icon: 'fas fa-screwdriver-wrench',
    serviceType: 'RV Maintenance',
    seoTitle: 'RV Maintenance in Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'RV maintenance in Gatineau-Ottawa to prevent failures, protect roof systems and extend vehicle life.',
    eyebrow: 'Preventive, seasonal and practical',
    opening: 'RV maintenance in Gatineau-Ottawa helps reduce breakdown risk, protect vulnerable systems and keep the vehicle more dependable through the season. Clinique du VR reviews critical wear points such as seals, roof areas, electrical components, propane appliances and moving accessories so problems can be addressed before they become more expensive repairs.',
    lead: 'Good maintenance always costs less than a breakdown in the middle of a trip. The goal is to keep your RV reliable, road-ready and better protected through the season.',
    intro: 'We handle routine maintenance for key RV systems and wear points to reduce risk, preserve the vehicle and keep everything operating when you need it.',
    detailIntro: 'Proper RV maintenance is not just a quick once-over. It is a structured review of the systems and surfaces that often degrade quietly over time and then fail at the worst possible moment during the season.',
    highlights: [
      'Pre-season maintenance',
      'Review of high-risk components',
      'Preventive and documented approach',
      'Service adapted to the vehicle type'
    ],
    includedTitle: 'What we maintain',
    included: [
      'Inspection of seals and sealing points',
      'Roof and membrane review',
      'Check of 12V, 110V and propane appliances',
      'Adjustment of moving components and accessories',
      'Preventive inspection for wear or early water issues'
    ],
    situationsTitle: 'When maintenance matters most',
    situations: [
      'At the beginning or end of the season',
      'Before a long trip',
      'To reduce the risk of major repairs',
      'To keep the RV more reliable and cleaner'
    ],
    processIntro: 'We structure maintenance around the vehicle condition, the use pattern and the season. That helps avoid generic work lists and keeps the focus on the most useful preventive tasks.',
    process: [
      'Review of the vehicle and priorities',
      'Scheduled maintenance work',
      'Feedback on what was done and what should be monitored',
      'Planning for the next useful service if needed'
    ],
    whyChooseTitle: 'Why choose Clinique du VR for RV maintenance?',
    whyChooseIntro: 'The right maintenance approach protects the systems that matter most without turning every visit into an oversized repair list. That practical balance is part of the workshop service philosophy.',
    whyChoose: [
      {
        title: 'Useful preventive work',
        text: 'We focus on the service items that directly affect reliability, water protection and seasonal readiness.'
      },
      {
        title: 'Season-aware recommendations',
        text: 'Maintenance is adapted to spring startup, off-season storage and longer travel conditions that place more stress on the vehicle.'
      },
      {
        title: 'Clear next steps',
        text: 'Owners leave with a practical understanding of what was handled now and what should be scheduled later.'
      }
    ],
    faqTitle: 'Frequently asked questions about RV maintenance',
    faqs: [
      {
        question: 'Why is preventive RV maintenance important?',
        answer: 'Preventive maintenance helps detect wear before it becomes a breakdown, a leak or a larger repair during the season.'
      },
      {
        question: 'What maintenance items matter most on an RV?',
        answer: 'Seals, roof areas, electrical and propane systems plus moving accessories are among the most important items to review regularly.'
      },
      {
        question: 'How often should an RV be maintained?',
        answer: 'The schedule depends on age, use and storage conditions, but a review at the beginning or end of the season is a strong baseline for most RV owners.'
      }
    ]
  },
  {
    slug: 'repair',
    alternateSlug: 'reparation',
    title: 'RV Repair',
    h1: 'RV Repair in Gatineau-Ottawa',
    navLabel: 'Repair',
    icon: 'fas fa-toolbox',
    serviceType: 'RV Repair',
    seoTitle: 'RV Repair in Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'RV repair in Gatineau-Ottawa for water leaks, roof issues, seals and interior restoration.',
    eyebrow: 'Leaks, roof work and corrective repairs',
    opening: 'Clinique du VR handles RV repair in Gatineau-Ottawa for water leaks, roof issues, failed seals, interior damage and broader corrective work. We start by confirming the real source of the problem so the repair plan addresses the cause instead of only improving the visible symptom.',
    lead: 'When a problem is visible, there is often hidden damage behind it. The repair page needs to show a clear method, not just a list of promises.',
    intro: 'We work on the most common RV issues with a simple logic: identify the cause, fix the actual problem and bring the vehicle back to proper condition without shortcuts.',
    detailIntro: 'RV repair often requires a wider view than the symptom alone. A stain, soft wall, cracked seal or persistent odour can point to roof weakness, opening failure or a longer-term intrusion issue that affects more than the surface finish.',
    highlights: [
      'Water leak repair',
      'Roof replacement or roof correction',
      'Structural and finish restoration',
      'Repair priorities based on actual need'
    ],
    includedTitle: 'What we repair',
    included: [
      'Leak source investigation',
      'Controlled opening and replacement of damaged materials',
      'Roof replacement or correction of weak areas',
      'Seal and sealant restoration',
      'Interior restoration after water damage'
    ],
    situationsTitle: 'Signs a repair is needed',
    situations: [
      'Water stain, odour or soft wall',
      'Aging roof or cracked seals',
      'Damaged floor, ceiling or wall',
      'A recurring issue after a temporary fix'
    ],
    processIntro: 'Our repair method is built around confirming the cause first, then sequencing the work in a way that protects healthy areas and makes the correction more durable.',
    process: [
      'Diagnosis to confirm the true source',
      'Repair plan in a logical order',
      'Execution, restoration and final verification',
      'Preventive advice to reduce the chance of recurrence'
    ],
    whyChooseTitle: 'Why choose Clinique du VR for RV repair?',
    whyChooseIntro: 'The difference between a durable repair and a weak patch often comes down to the quality of the initial diagnosis and the willingness to treat the cause. That is the workshop standard we aim for.',
    whyChoose: [
      {
        title: 'Cause-first diagnosis',
        text: 'We work to find the true origin of the issue before rebuilding finishes or closing up damaged areas.'
      },
      {
        title: 'Logical repair sequence',
        text: 'Repairs are ordered to stabilize the vehicle, protect unaffected areas and improve the long-term result.'
      },
      {
        title: 'Clear communication',
        text: 'Owners understand the problem, the proposed repair path and the reasons behind the estimate priorities.'
      }
    ],
    faqTitle: 'Frequently asked questions about RV repair',
    faqs: [
      {
        question: 'What should I do if my RV has a water leak?',
        answer: 'The issue should be reviewed quickly so the source can be identified before more structure, insulation or finish materials are affected.'
      },
      {
        question: 'Can an RV roof be repaired instead of replaced?',
        answer: 'Sometimes yes, but it depends on the overall roof condition, the membrane state and the number of weak areas. A focused repair works in some cases, while a larger replacement is more durable in others.'
      },
      {
        question: 'Can interior areas be restored after water damage?',
        answer: 'Yes, but the underlying cause has to be corrected first. Once that is done, interior materials and appearance can be brought back into better condition.'
      }
    ]
  },
  {
    slug: 'detailing',
    alternateSlug: 'esthetique',
    title: 'RV Detailing',
    h1: 'RV Detailing in Gatineau-Ottawa',
    navLabel: 'Detailing',
    icon: 'fas fa-spray-can-sparkles',
    serviceType: 'RV Detailing',
    seoTitle: 'RV Detailing in Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'RV detailing in Gatineau-Ottawa for deep cleaning, visual refresh work and pre-sale presentation.',
    eyebrow: 'Clean presentation and refresh work',
    opening: 'RV detailing in Gatineau-Ottawa at Clinique du VR is designed to make the vehicle cleaner, better presented and more ready for the season or for resale. We focus on deep cleaning, visual refresh work and the finishing details that influence how an owner or buyer perceives the overall condition of the RV.',
    lead: 'This service page sells a simple outcome: an RV that looks cleaner, better presented and more ready for the season or for resale.',
    intro: 'Detailing is more than a quick wash. We improve the overall presentation of the vehicle so it feels cleaner, healthier and better prepared for use or sale.',
    detailIntro: 'This service is especially useful after repair work, before a sale or when the vehicle simply needs a stronger visual reset. A cleaner and more coherent presentation makes the condition of the vehicle easier to appreciate.',
    highlights: [
      'Interior refresh work',
      'Deep cleaning',
      'Pre-sale preparation',
      'A more polished overall look'
    ],
    includedTitle: 'What detailing can include',
    included: [
      'Deep interior and exterior cleaning',
      'Treatment of surfaces and touch points',
      'Visual cleanup after repair work',
      'Correction of small details that hurt presentation',
      'General preparation before sale or delivery'
    ],
    situationsTitle: 'When detailing is most useful',
    situations: [
      'Before the season starts',
      'After a major repair',
      'Before listing the RV for sale',
      'When the vehicle needs a real refresh'
    ],
    processIntro: 'We adapt the level of detailing based on the vehicle condition and on the actual goal, whether that is a seasonal refresh, stronger pre-sale presentation or cleanup after technical work.',
    process: [
      'Quick review of the vehicle and desired level of work',
      'Selection of the most useful detailing tasks',
      'Execution with attention to visible details',
      'Final review and recommendations'
    ],
    whyChooseTitle: 'Why choose Clinique du VR for RV detailing?',
    whyChooseIntro: 'Good RV detailing is not just cleaning. It is also about presentation logic, consistency and helping the vehicle show better overall care when used, photographed or offered for sale.',
    whyChoose: [
      {
        title: 'Result-oriented presentation',
        text: 'We focus on making the vehicle feel cleaner, more coherent and more ready to use or show.'
      },
      {
        title: 'Strong complement to repairs',
        text: 'After technical repairs, visual cleanup helps complete the impression of a finished and cared-for vehicle.'
      },
      {
        title: 'Useful before resale',
        text: 'A stronger first impression can help a buyer feel more confident in the condition and presentation of the RV.'
      }
    ],
    faqTitle: 'Frequently asked questions about RV detailing',
    faqs: [
      {
        question: 'What is the difference between cleaning and RV detailing?',
        answer: 'Cleaning removes dirt, while detailing also focuses on presentation, visual consistency and the smaller finishing elements that affect the overall impression of the RV.'
      },
      {
        question: 'When should RV detailing be scheduled?',
        answer: 'It is useful before the season, before a sale, after major repairs or whenever the vehicle needs a stronger visual reset.'
      },
      {
        question: 'Does detailing help before selling an RV?',
        answer: 'Yes. Better presentation can support buyer confidence and make the overall condition of the vehicle easier to appreciate.'
      }
    ]
  },
  {
    slug: 'buying-selling',
    alternateSlug: 'vente-achat',
    title: 'RV Buying and Selling',
    h1: 'RV Buying and Selling Support in Gatineau-Ottawa',
    navLabel: 'Buying and Selling',
    icon: 'fas fa-van-shuttle',
    serviceType: 'RV Buying and Selling Support',
    seoTitle: 'RV Buying and Selling Support in Gatineau-Ottawa | Clinique du VR',
    seoDescription: 'Support before buying or selling an RV in Gatineau-Ottawa with inspection, prioritization and pre-sale preparation.',
    eyebrow: 'Support around the transaction',
    opening: 'Clinique du VR offers RV buying and selling support in Gatineau-Ottawa to clarify vehicle condition before a transaction, identify the repairs that matter most and improve the presentation of an RV before it is listed. The goal is to reduce uncertainty, improve decision quality and help both buyers and sellers move forward with more confidence.',
    lead: 'Confidence in a transaction starts with a vehicle that has been properly reviewed and properly prepared. We help you see things more clearly before making an important decision.',
    intro: 'We help clarify the true condition of an RV before a transaction and help prepare the vehicle so the buyer or seller can move forward with more confidence.',
    detailIntro: 'This service is useful when a buyer wants to reduce risk, when a seller wants to focus on the most worthwhile corrections or when an owner is unsure whether to repair, sell or keep the vehicle.',
    highlights: [
      'Pre-purchase inspections',
      'Preparation before sale',
      'Clear view of real priorities',
      'Better confidence in the transaction'
    ],
    includedTitle: 'How we can help',
    included: [
      'Pre-purchase inspection with strengths and weaknesses',
      'Identification of useful repairs before listing',
      'General preparation for stronger presentation',
      'Guidance on which fixes matter first',
      'Support for a clearer buying or selling decision'
    ],
    situationsTitle: 'Who this service helps',
    situations: [
      'Buyers trying to avoid surprises',
      'Sellers wanting a cleaner and more credible vehicle',
      'Owners deciding whether to repair, sell or buy',
      'Any transaction where the real condition needs clarification'
    ],
    processIntro: 'We adapt the support based on whether you are buying or selling, but the logic stays the same: understand the condition, identify the priorities and make the next decision easier.',
    process: [
      'Discussion about the buying or selling context',
      'Inspection or preparation work based on the goal',
      'Summary of what should be corrected or highlighted',
      'Recommended next step based on your objective'
    ],
    whyChooseTitle: 'Why choose Clinique du VR for RV buying and selling support?',
    whyChooseIntro: 'Transactions go better when the condition of the vehicle is clearer. That helps set better expectations, support a stronger asking price or avoid a purchase that carries more risk than expected.',
    whyChoose: [
      {
        title: 'Objective condition review',
        text: 'We help separate cosmetic details from more important technical or structural concerns.'
      },
      {
        title: 'Focused preparation',
        text: 'Before a sale, the goal is to target the corrections and presentation work that add the most trust.'
      },
      {
        title: 'Better decisions',
        text: 'Before a purchase, you gain a clearer view of the vehicle strengths, risks and likely service needs.'
      }
    ],
    faqTitle: 'Frequently asked questions about RV buying and selling support',
    faqs: [
      {
        question: 'Why inspect an RV before buying it?',
        answer: 'A pre-purchase inspection helps reveal roof, seal, water intrusion and system issues that can strongly affect real value and future repair costs.'
      },
      {
        question: 'Which repairs are worth doing before selling an RV?',
        answer: 'The most useful work is the work that improves trust, clarifies condition and strengthens presentation without overinvesting in low-impact changes.'
      },
      {
        question: 'Can you help if I am not sure whether to repair or sell?',
        answer: 'Yes. This service is designed to help owners prioritize the most meaningful corrections and choose between repair, sale or a more gradual upgrade path.'
      }
    ]
  }
];
