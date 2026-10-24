// All copy, clients and figures are placeholders until the real Corvabyte content is confirmed.

export const navLinks = [
  { href: '#process', label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
];

export const metrics = [
  { value: 64, suffix: '+', label: 'Products shipped' },
  { value: 99.98, decimals: 2, suffix: '%', label: 'Uptime across client APIs' },
  { value: 42, suffix: 'ms', label: 'Median API response' },
  { value: 4.9, decimals: 1, suffix: '/5', label: 'Average client rating' },
];

export const clients = ['NPM', 'NODEJS', 'RUST', 'MONGODB', 'REACT', 'SQL SERVER', 'C#', 'PYTHON', 'JAVA', 'GO', 'PHP', 'SWIFT', 'KOTLIN', 'AI', 'DART', 'SCALA', 'PRIVATE AI'];

export const steps = [
  {
    when: 'Stage 1 · Weeks 1–2',
    title: 'Discover',
    text: 'We sit with your team and your users, map what exists today, and agree on the one outcome the first release has to deliver.',
    tags: ['User interviews', 'Systems audit', 'Scope & roadmap'],
  },
  {
    when: 'Stage 2 · Weeks 2–4',
    title: 'Design',
    text: 'Flows, wireframes and a clickable prototype, tested with real people before a line of production code is written.',
    tags: ['Wireframes', 'Design system', 'Prototype tests'],
  },
  {
    when: 'Stage 3 · Weeks 4–12',
    title: 'Build',
    text: 'Two-week sprints with a working build at the end of each one. You see progress on your own phone, not in a status report.',
    tags: ['React Native', 'Node.js APIs', 'MongoDB', 'CI/CD'],
  },
  {
    when: 'Stage 4 · Ongoing',
    title: 'Launch & scale',
    text: 'App Store and Play Store release, monitoring from day one, and a steady roadmap of improvements driven by real usage data.',
    tags: ['Store release', 'Observability', 'Growth roadmap'],
  },
];

export const services = [
  {
    id: 'web',
    kicker: 'Web',
    tab: 'Web platforms',
    title: 'Fast, accessible web products',
    text: 'Marketing sites, customer portals and internal tools that load quickly, rank well and are easy for your team to update.',
    deliverables: [
      ['Marketing site & CMS', '4–6 wks'],
      ['Customer portal', '8–12 wks'],
      ['Accessibility audit (WCAG 2.2 AA)', '1–2 wks'],
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Edge hosting'],
  },
  {
    id: 'mobile',
    kicker: 'Mobile',
    tab: 'Mobile apps',
    title: 'One codebase, both stores',
    text: 'Native-feeling iOS and Android apps from a single React Native codebase, with offline support, push notifications and over-the-air updates.',
    deliverables: [
      ['MVP app (iOS + Android)', '10–14 wks'],
      ['App Store & Play Store release', '1 wk'],
      ['Ongoing release train', 'monthly'],
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Push & OTA'],
  },
  {
    id: 'data',
    kicker: 'Backend',
    tab: 'APIs & data',
    title: 'APIs that stay up under load',
    text: 'Node.js services and MongoDB data models designed for the queries you actually run, with monitoring and alerting wired in from the first deploy.',
    deliverables: [
      ['REST / GraphQL API', '6–10 wks'],
      ['Data model & migration', '2–4 wks'],
      ['Performance review', '1–2 wks'],
    ],
    stack: ['Node.js', 'MongoDB', 'Redis', 'OpenTelemetry'],
  },
  {
    id: 'brand',
    kicker: 'Identity',
    tab: 'Brand & design',
    title: 'Identity that carries across screens',
    text: 'Logo, color, type and a component library, built once and shared by your website, your app and your pitch deck.',
    deliverables: [
      ['Logo & visual identity', '3–4 wks'],
      ['Design system & tokens', '3–5 wks'],
      ['Brand guidelines', '1 wk'],
    ],
    stack: ['Figma', 'Design tokens', 'Storybook'],
  },
];

export const cases = [
  {
    tag: 'Performance · API & Backend',
    figure: '60', unit: '%',
    title: 'Performance improvement achieved through API optimization..',
    quote: 'We optimize your code , APIs, database access, and backend services to reduce response times and improve scalability. Performance monitoring can also be integrated to provide ongoing visibility into application health, response times, and potential bottlenecks.',
    //cite: 'Head of Digital, Larkspur Bank (placeholder)',
  },
  {
    tag: 'Design · Flexibility & Ownership',
    figure: 'Flex', unit: 'ibility',
    title: 'Great design without unnecessary vendor lock-in.',
    quote: 'We deliver consistent design systems tailored to each customer’s brand, with excellent feedback on usability &experience. When required, we are comfortable to provide customers with a copy of their solution’s source code, giving them transparency, and long-term control.',
    //cite: 'CTO, Okapi Logistics (placeholder)',
  },
  {
    tag: 'Banking & Fintech · Security',
    figure: 'SEC', unit: 'URE',
    title: 'Security is built into the architecture from day one.',
    quote: 'Our experience delivering solutions for banks means security is considered throughout the entire development lifecycle. Authentication, encryption, secure communications, API protection, sensitive-data handling, and auditability are designed into the solution.',
    //cite: 'Product Lead, Meridian Health (placeholder)',
  },
];
