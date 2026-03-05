export type SectionId = 'home' | 'impact' | 'outreach' | 'research' | 'contact'

export type NavItem = { id: SectionId; label: string }
export type Metric = { id: string; value: string; label: string; note?: string }
export type Slide = { id: string; image: string; alt: string }
export type AdvocacyPost = {
  id: string
  publishedDate: string
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
      value: '26K+',
      label: 'People Connected',
      note: 'Over 26,000 people fostering equitable transit discussion.',
    },
    {
      id: 'visits',
      value: '1.4M+',
      label: 'Total Visits',
      note: 'Over 1.4 million players learning about local bus routes.',
    },
    {
      id: 'legislators',
      value: '10',
      label: 'Legislators Met',
      note: 'Showcased the game and lobbied for transit equity.',
    },
    {
      id: 'cities',
      value: '8',
      label: 'Municipalities Covered in Games',
      note: 'Recreated 1:1 city and town landscapes across Greater Boston and Worcester.',
    },
  ],
  posts: [
    {
      id: 'medford-donato-advocacy',
      publishedDate: 'March 5, 2026',
      title: 'Next Stop for Advocacy: Medford, Meeting with Representative Donato',
      summary:
        'Founder Ilias Benmokrane met with State Representative Paul Donato in Medford to demonstrate how Boston Bus Simulator supports transit usage and fosters equity-focused transportation dialogue. NET is partnering on local outreach to bring the experience to more residents and encourage greater bus and train ridership.',
      url: 'https://www.linkedin.com/posts/new-england-transit_medford-were-advocating-for-you-this-activity-7435128792378941441-cW-7',
      slides: [
        {
          id: 'medford-donato-photo',
          image: '/assets/posts/post-5.jpg',
          alt: 'Ilias Benmokrane meeting with Representative Donato in Medford',
        },
      ],
      dateOrder: 500,
    },
    {
      id: 'fire-alarm-sen-crighton',
      publishedDate: 'January 30, 2026',
      title: 'Advocating Transit Equity with the Chair of Transportation, Senator Brendan Crighton',
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
      publishedDate: 'January 12, 2026',
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
      publishedDate: 'December 17, 2025',
      title: 'Lobbying in Marginalized Communities with Everett Rep. Joe McGonagle',
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
      publishedDate: 'December 4, 2025',
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
      'Check out the policy NET founder Ilias Benmokrane is proposing to legislators, which would institute fare-free service for high-ridership bus routes in underrepresented, low-income communities.',
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
    leaders: [
      'Ilias Benmokrane (Everett)',
      'Medy Florestal (Lynn)',
      '& Jarek Alexander (Boston)',
    ],
    social: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/company/new-england-transit/' },
      { platform: 'instagram', url: 'https://www.instagram.com/netransit_rblx/' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@netransitrblx' },
    ],
  },
}
