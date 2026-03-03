export type SectionId = 'home' | 'impact' | 'outreach' | 'research' | 'contact'

export type NavItem = { id: SectionId; label: string }
export type Metric = { id: string; value: string; label: string; note?: string }
export type Slide = { id: string; image: string; alt: string }
export type AdvocacyPost = {
  id: string
  title: string
  summary: string
  url: string
  slides: Slide[]
  dateOrder: number
}
export type SocialLink = { platform: 'linkedin' | 'instagram' | 'tiktok'; url: string }
export type SiteContent = {
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  metrics: Metric[]
  posts: AdvocacyPost[]
  research: { title: string; description: string; pdfPath: string }
  contact: { email: string; subjectPrefix: string }
  footer: { mission: string; leaders: string[]; social: SocialLink[] }
}

export const brand = {
  name: 'New England Transit',
  logoUrl:
    'https://images.squarespace-cdn.com/content/v1/68b52f5d040b6e3906c32794/0e990523-2a23-4a68-969d-dfca421a7cd9/netransit893.png',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'impact', label: 'Impact' },
  { id: 'outreach', label: 'Outreach' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

export const impactMeta = {
  heading: 'Impact Snapshot',
  subtitle:
    'New England Transit advocacy is focused on practical transit equity policy, education, and public engagement.',
  lastUpdated: 'Last updated: Placeholder values pending final 2026 reporting.',
}

export const siteContent: SiteContent = {
  hero: {
    eyebrow: 'New England Transit Advocacy',
    title: 'Championing Better Public Transit Across the Region',
    description:
      'We meet with leaders, present transit solutions, and build momentum for equitable bus service through policy outreach, community education, and strategic partnerships.',
    primaryCta: 'View Outreach',
    secondaryCta: 'Donate',
  },
  metrics: [
    {
      id: 'legislators',
      value: '00+',
      label: 'Legislators Engaged',
      note: 'Placeholder metric',
    },
    {
      id: 'residents',
      value: '00,000+',
      label: 'Residents Reached',
      note: 'Placeholder metric',
    },
    {
      id: 'cities',
      value: '00+',
      label: 'Cities Represented',
      note: 'Placeholder metric',
    },
  ],
  posts: [
    {
      id: 'fire-alarm-sen-crighton',
      title: 'Not Even the Fire Alarm Stopped Advocacy',
      summary:
        'Ilias Benmokrane met with State Senator Brendan Crighton to present how Boston Bus Simulator can educate both youth and adults on local transit systems while supporting legislative conversations on fare-free pilot routes.',
      url: 'https://www.linkedin.com/posts/new-england-transit_not-even-the-fire-alarm-stopped-ilias-benmokrane-activity-7423106511381635074-oQzx',
      slides: [
        {
          id: 'fire-alarm-1',
          image: '/assets/posts/fire-alarm-1.svg',
          alt: 'Placeholder slide for advocacy meeting with Senator Crighton',
        },
        {
          id: 'fire-alarm-2',
          image: '/assets/posts/fire-alarm-2.svg',
          alt: 'Placeholder slide showing transit policy presentation context',
        },
        {
          id: 'fire-alarm-3',
          image: '/assets/posts/fire-alarm-3.svg',
          alt: 'Placeholder slide for community-facing transit education tools',
        },
      ],
      dateOrder: 400,
    },
    {
      id: 'naples-advocacy',
      title: 'Transit Advocacy in Naples',
      summary:
        'NET advocacy reached an international audience in Naples, where the team shared regional transit goals and built awareness around equitable bus access, system design, and rider-first planning.',
      url: 'https://www.linkedin.com/posts/new-england-transit_ilias-benmokrane-is-in-naples-italy-activity-7416565087957848065-EV-v',
      slides: [
        {
          id: 'naples-1',
          image: '/assets/posts/naples-1.svg',
          alt: 'Placeholder slide for NET transit outreach in Naples',
        },
        {
          id: 'naples-2',
          image: '/assets/posts/naples-2.svg',
          alt: 'Placeholder slide for international transit policy discussion',
        },
        {
          id: 'naples-3',
          image: '/assets/posts/naples-3.svg',
          alt: 'Placeholder slide featuring cross-city transit collaboration',
        },
      ],
      dateOrder: 300,
    },
    {
      id: 'simulator-strides',
      title: 'Boston Bus Simulator Momentum',
      summary:
        'The Boston Bus Simulator continues to support advocacy by helping communities visualize real-world transit decisions, making route planning and public policy conversations more accessible and engaging.',
      url: 'https://www.linkedin.com/posts/new-england-transit_boston-bus-simulator-continues-to-make-strides-activity-7407099611049402368--EGZ',
      slides: [
        {
          id: 'simulator-1',
          image: '/assets/posts/simulator-1.svg',
          alt: 'Placeholder slide for Boston Bus Simulator advocacy outreach',
        },
        {
          id: 'simulator-2',
          image: '/assets/posts/simulator-2.svg',
          alt: 'Placeholder slide for transit education using simulation',
        },
        {
          id: 'simulator-3',
          image: '/assets/posts/simulator-3.svg',
          alt: 'Placeholder slide for policy engagement with simulation tools',
        },
      ],
      dateOrder: 200,
    },
    {
      id: 'founders-advancing-equity',
      title: 'Founders Advancing Regional Transit Equity',
      summary:
        'Founders met with policy stakeholders to align advocacy priorities around transit reliability, affordability, and stronger regional coordination that benefits riders across city boundaries.',
      url: 'https://www.linkedin.com/posts/new-england-transit_last-month-founders-ilias-benmokrane-and-activity-7402415280834002945-0N9s',
      slides: [
        {
          id: 'founders-1',
          image: '/assets/posts/founders-1.svg',
          alt: 'Placeholder slide for founders advocacy outreach meeting',
        },
        {
          id: 'founders-2',
          image: '/assets/posts/founders-2.svg',
          alt: 'Placeholder slide for NET regional transit equity efforts',
        },
        {
          id: 'founders-3',
          image: '/assets/posts/founders-3.svg',
          alt: 'Placeholder slide for policy coordination and transit access',
        },
      ],
      dateOrder: 100,
    },
  ],
  research: {
    title: 'BU Research Proposal: Fare-Free Buses',
    description:
      'This section is reserved for the New England Transit research proposal on fare-free bus policy. A placeholder file is included and can be replaced by dropping in the finalized PDF.',
    pdfPath: '/assets/bu-fare-free-proposal.pdf',
  },
  contact: {
    email: 'contact@netransit.net',
    subjectPrefix: 'NET Advocacy Inquiry',
  },
  footer: {
    mission:
      'New England Transit advances practical, equitable transit policy through outreach, education, and partnerships.',
    leaders: ['Ilias Benmokrane', 'Medy Florestal', 'Jarek Alexander'],
    social: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/new-england-transit/' },
      { platform: 'instagram', url: 'https://www.instagram.com/netransit_rblx/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@netransitrblx' },
    ],
  },
}
