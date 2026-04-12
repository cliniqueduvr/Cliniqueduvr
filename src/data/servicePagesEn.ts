export interface ServicePageEn {
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

export const servicePagesEn: ServicePageEn[] = [
  {
    slug: 'inspection',
    title: 'RV Inspection',
    navLabel: 'Inspection',
    icon: 'fas fa-clipboard-check',
    seoTitle: 'RV Inspection | Clinique du VR',
    seoDescription: 'Complete or targeted RV inspection before purchase, before a trip or to validate the overall condition of the vehicle.',
    eyebrow: 'Before purchase or before the season',
    lead: 'An RV should always be inspected before purchase, whether it is new or used. The goal is to confirm the real condition of the vehicle before hidden problems become expensive surprises.',
    intro: 'Clinique du VR offers complete, partial, mechanical and interior inspections. The purpose is simple: give you a reliable and practical picture of the RV before buying it or before heading out on the road.',
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
    process: [
      'Initial discussion and vehicle type confirmation',
      'Complete or targeted inspection based on your goal',
      'Clear feedback on critical items, watch items and repair priorities',
      'Recommended next steps if repairs are needed'
    ]
  },
  {
    slug: 'maintenance',
    title: 'RV Maintenance',
    navLabel: 'Maintenance',
    icon: 'fas fa-screwdriver-wrench',
    seoTitle: 'RV Maintenance | Clinique du VR',
    seoDescription: 'Preventive RV maintenance to extend vehicle life and reduce in-season breakdowns.',
    eyebrow: 'Preventive, seasonal and practical',
    lead: 'Good maintenance always costs less than a breakdown in the middle of a trip. This page gives you a clean framework for a simple, reassuring service offer.',
    intro: 'We handle routine maintenance for key RV systems and wear points to reduce risk, preserve the vehicle and keep everything operating when you need it.',
    highlights: [
      'Pre-season maintenance',
      'Review of high-risk components',
      'Preventive and documented approach',
      'Service adapted to the vehicle type'
    ],
    includedTitle: 'Common maintenance items',
    included: [
      'Inspection of seals and sealing points',
      'Roof and membrane review',
      'Check of 12V, 110V and propane appliances',
      'Adjustment of moving components and accessories',
      'Preventive inspection for wear or early water issues'
    ],
    situationsTitle: 'Why maintenance matters',
    situations: [
      'At the beginning or end of the season',
      'Before a long trip',
      'To reduce the risk of major repairs',
      'To keep the RV more reliable and cleaner'
    ],
    process: [
      'Review of the vehicle and priorities',
      'Scheduled maintenance work',
      'Feedback on what was done and what should be monitored',
      'Planning for the next useful service if needed'
    ]
  },
  {
    slug: 'repair',
    title: 'RV Repair',
    navLabel: 'Repair',
    icon: 'fas fa-toolbox',
    seoTitle: 'RV Repair | Clinique du VR',
    seoDescription: 'RV leak repair, roof work and corrective service with a clear and durable approach.',
    eyebrow: 'Leaks, roof work and corrective repairs',
    lead: 'When a problem is visible, there is often hidden damage behind it. The repair page needs to show a clear method, not just a list of promises.',
    intro: 'We work on the most common RV issues with a simple logic: identify the cause, fix the actual problem and bring the vehicle back to proper condition without shortcuts.',
    highlights: [
      'Water leak repair',
      'Roof replacement or roof correction',
      'Structural and finish restoration',
      'Repair priorities based on actual need'
    ],
    includedTitle: 'Frequent repair work',
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
    process: [
      'Diagnosis to confirm the true source',
      'Repair plan in a logical order',
      'Execution, restoration and final verification',
      'Preventive advice to reduce the chance of recurrence'
    ]
  },
  {
    slug: 'detailing',
    title: 'RV Detailing',
    navLabel: 'Detailing',
    icon: 'fas fa-sparkles',
    seoTitle: 'RV Detailing | Clinique du VR',
    seoDescription: 'Cleaning, refresh work and aesthetic improvement for RVs before the season or before sale.',
    eyebrow: 'Clean presentation and refresh work',
    lead: 'This service page sells a simple outcome: an RV that looks cleaner, better presented and more ready for the season or for resale.',
    intro: 'Detailing is more than a quick wash. We improve the overall presentation of the vehicle so it feels cleaner, healthier and better prepared for use or sale.',
    highlights: [
      'Interior refresh work',
      'Deep cleaning',
      'Pre-sale preparation',
      'A more polished overall look'
    ],
    includedTitle: 'Possible detailing work',
    included: [
      'Deep interior and exterior cleaning',
      'Treatment of surfaces and touch points',
      'Visual cleanup after repair work',
      'Correction of small details that hurt presentation',
      'General preparation before sale or delivery'
    ],
    situationsTitle: 'When this service helps',
    situations: [
      'Before the season starts',
      'After a major repair',
      'Before listing the RV for sale',
      'When the vehicle needs a real refresh'
    ],
    process: [
      'Quick review of the vehicle and desired level of work',
      'Selection of the most useful detailing tasks',
      'Execution with attention to visible details',
      'Final review and recommendations'
    ]
  },
  {
    slug: 'buying-selling',
    title: 'RV Buying and Selling',
    navLabel: 'Buying and Selling',
    icon: 'fas fa-van-shuttle',
    seoTitle: 'RV Buying and Selling Support | Clinique du VR',
    seoDescription: 'Support before buying or selling an RV with inspection, prioritization and vehicle preparation.',
    eyebrow: 'Support around the transaction',
    lead: 'Confidence in a transaction starts with a vehicle that has been properly reviewed and properly prepared. This page frames that service without overloading it.',
    intro: 'We help clarify the true condition of an RV before a transaction and help prepare the vehicle so the buyer or seller can move forward with more confidence.',
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
    process: [
      'Discussion about the buying or selling context',
      'Inspection or preparation work based on the goal',
      'Summary of what should be corrected or highlighted',
      'Recommended next step based on your objective'
    ]
  }
];
