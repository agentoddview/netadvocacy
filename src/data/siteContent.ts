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
  research: {
    title: string
    description: string
    fullReportPath: string
    policyBriefPath: string
  }
  contact: { email: string; subjectPrefix: string }
  footer: { mission: string; leaders: string[]; social: SocialLink[] }
}

export const brand = {
  name: 'New England Transit',
  logoUrl: '/assets/net-logo-black.png',
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
  lastUpdated: 'Last updated: March 2026',
}

export const siteContent: SiteContent = {
  hero: {
    eyebrow: 'New England Transit Advocacy',
    title: 'Leading Transit Equity Across Greater Boston through Simulation & Policy',
    description:
      "We organize meetings with legislators, showcasing our game and explaining how it's been used to promote transit equity across residents. Our goals are to expand transportation access for all communities through fare-free routes, frequent service, and dependable buses.",
    primaryCta: 'View Outreach',
    secondaryCta: 'Donate',
  },
  metrics: [
    {
      id: 'residents',
      value: '25K+',
      label: 'People Connected',
      note: 'Over 25,000 people connected with NET.',
    },
    {
      id: 'visits',
      value: '1M+',
      label: 'Total Visits',
      note: 'Over 1,000,000 visits across experiences.',
    },
    {
      id: 'legislators',
      value: '9',
      label: 'Legislators Met',
      note: 'Met directly through advocacy meetings.',
    },
    {
      id: 'cities',
      value: '7',
      label: 'Municipalities Covered in Games',
      note: 'Includes both cities and towns such as Auburn.',
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
          id: 'fire-alarm-photo',
          image: '/assets/posts/post-1.jpg',
          alt: 'Advocacy meeting with transit simulator demonstration',
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
          id: 'naples-photo',
          image: '/assets/posts/post-2.jpg',
          alt: 'International advocacy outreach photo in Naples',
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
          id: 'simulator-photo',
          image: '/assets/posts/post-3.jpg',
          alt: 'Boston Bus Simulator advocacy momentum photo',
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
          id: 'founders-photo',
          image: '/assets/posts/post-4.jpg',
          alt: 'Founders coordinating transit equity advocacy with policymakers',
        },
      ],
      dateOrder: 100,
    },
  ],
  research: {
    title: 'BU Research Proposal: Fare-Free Buses',
    description:
      'Review the full BU research project first, then switch to the 1-page policy brief for a quick summary.',
    fullReportPath: '/assets/research/bu-research-project-fare-free-mbta-pilot.pdf',
    policyBriefPath: '/assets/research/public-fare-free-proposal-policy-brief.pdf',
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
