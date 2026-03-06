export type SectionId = 'home' | 'impact' | 'outreach' | 'map' | 'research' | 'contact'

export type NavItem = { id: SectionId; label: string }
export type Metric = { id: string; value: string; label: string; note?: string }
export type Slide = { id: string; image: string; alt: string; objectPosition?: string }
export type LegislatorStatus = 'aware' | 'met' | 'scheduled'
export type Legislator = {
  id: string
  name: string
  office: string
  location: string
  status: LegislatorStatus
  photo?: string
  photoPosition?: string
  featured?: boolean
  featuredLabel?: string
}
export type AdvocacyPost = {
  id: string
  publishedDate: string
  title: string
  summary: string
  url: string
  ctaLabel?: string
  ctaUrl?: string
  ctaType?: 'linkedin' | 'external'
  slides: Slide[]
  dateOrder: number
}
export type SocialLink = { platform: 'linkedin' | 'instagram' | 'tiktok'; url: string }
export type SiteContent = {
  hero: {
    eyebrow: string
    title: string
    descriptionPrefix: string
    linkedGameLabel: string
    linkedGameUrl: string
    descriptionMiddle: string
    linkedPressLabel: string
    linkedPressUrl: string
    descriptionSuffix: string
    primaryCta: string
    secondaryCta: string
  }
  metrics: Metric[]
  posts: AdvocacyPost[]
  legislators: {
    title: string
    description: string
    items: Legislator[]
  }
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
  { id: 'map', label: 'Map' },
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
    descriptionPrefix: 'We organize meetings with legislators, showcasing ',
    linkedGameLabel: 'Boston Bus Simulator',
    linkedGameUrl: 'https://www.roblox.com/games/8731366500/Boston-Bus-Simulator',
    descriptionMiddle:
      ' (our flagship video game reviewed by the ',
    linkedPressLabel: 'Boston Globe',
    linkedPressUrl: 'https://www.bostonglobe.com/2025/08/19/metro/mbta-bus-simulator/',
    descriptionSuffix:
      "), and explaining how it's been used to promote transit equity across residents. Our goals are to expand transportation access for all communities through fare-free routes, frequent service, and dependable buses.",
    primaryCta: 'View Outreach',
    secondaryCta: 'Donate',
  },
  metrics: [
    {
      id: 'media',
      value: '5M+',
      label: 'People Reached',
      note: 'Over 5 million people have viewed our content on transit.',
    },
    {
      id: 'visits',
      value: '1.4M+',
      label: 'Total Visits',
      note: 'Over 1.4 million players learning about local bus routes.',
    },
    {
      id: 'community',
      value: '26K+',
      label: 'Active Members',
      note: 'More than 26,000 people actively fostering discussion promoting transit equity.',
    },
    {
      id: 'legislators',
      value: '10',
      label: 'Legislators Met',
      note: 'Showcased the game and lobbied for transit equity.',
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
          objectPosition: '50% 20%',
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
      id: 'everett-street-level',
      publishedDate: 'January 29, 2026',
      title: 'Showcasing Boston Bus Simulator & Transit Equity Policy to Everett Residents',
      summary:
        'NET Founder Ilias Benmokrane curated and presented a slideshow explaining the functions of Boston Bus Simulator from a policy perspective. He explained how over 26,000 members actively engage in disucssions to advance transit equity across Massachusetts and the world.',
      url: 'https://cityofeverett.com/events/street-level-everett-1-29-26/',
      ctaLabel: 'View Event Link',
      ctaUrl: 'https://cityofeverett.com/events/street-level-everett-1-29-26/',
      ctaType: 'external',
      slides: [
        {
          id: 'everett-street-level-event-photo',
          image: '/assets/posts/post-6.png',
          alt: 'Street Level Everett event poster for January 29, 2026',
        },
      ],
      dateOrder: 350,
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
  legislators: {
    title: 'Legislator Map',
    description:
      "A live roster of officials we've met with, officials aware of Boston Bus Simulator, and scheduled meetings. Legislators aware of BBS are marked with *, while directly met legislators are shown without an asterisk.",
    items: [
      {
        id: 'phil-eng',
        name: 'Phil Eng',
        office: 'MBTA General Manager',
        location: 'Boston, MA',
        status: 'aware',
        featured: true,
        featuredLabel: 'Transit Leadership',
      },
      {
        id: 'maura-healey',
        name: 'Governor Maura Healey',
        office: 'Governor',
        location: 'Boston, MA',
        status: 'aware',
        photo: '/assets/legislators/maura-healey.jpg',
      },
      {
        id: 'robert-van-campen',
        name: 'Mayor Robert Van Campen',
        office: 'Mayor',
        location: 'Everett, MA',
        status: 'aware',
        photo: '/assets/legislators/robert-van-campen.webp',
      },
      {
        id: 'sal-didomenico',
        name: 'State Senator Sal DiDomenico',
        office: 'State Senator',
        location: 'Everett, MA',
        status: 'met',
        photo: '/assets/legislators/sal-didomenico.jpg',
      },
      {
        id: 'joe-mcgonagle',
        name: 'State Representative Joe McGonagle',
        office: 'State Representative',
        location: 'Everett, MA',
        status: 'met',
        photo: '/assets/legislators/joe-mcgonagle.jpg',
      },
      {
        id: 'katy-rogers',
        name: 'City Councilor Katy Rogers',
        office: 'City Councilor',
        location: 'Everett, MA',
        status: 'aware',
        photo: '/assets/legislators/katy-rogers.webp',
      },
      {
        id: 'stephanie-martins',
        name: 'City Councilor Stephanie Martins',
        office: 'City Councilor',
        location: 'Everett, MA',
        status: 'aware',
        photo: '/assets/legislators/stephanie-martins.webp',
      },
      {
        id: 'david-leboeuf',
        name: 'State Representative David LeBoeuf',
        office: 'State Representative',
        location: 'Worcester, MA',
        status: 'met',
        photo: '/assets/legislators/david-leboeuf.jpg',
      },
      {
        id: 'micheal-moore',
        name: 'State Senator Micheal Moore',
        office: 'State Senator',
        location: 'Worcester, MA',
        status: 'met',
        photo: '/assets/legislators/micheal-moore.jpg',
      },
      {
        id: 'dan-ryan',
        name: 'State Representative Dan Ryan',
        office: 'State Representative',
        location: 'Everett, MA',
        status: 'met',
        photo: '/assets/legislators/dan-ryan.jpg',
      },
      {
        id: 'brendan-crighton',
        name: 'State Senator Brendan Crighton',
        office: 'State Senator',
        location: 'Lynn, MA',
        status: 'met',
        photo: '/assets/legislators/brendan-crighton.jpg',
      },
      {
        id: 'gary-christenson',
        name: 'Mayor Gary Christenson',
        office: 'Mayor',
        location: 'Malden, MA',
        status: 'met',
        photo: '/assets/legislators/gary-christenson.jpg',
        photoPosition: '50% 20%',
      },
      {
        id: 'paul-donato',
        name: 'State Representative Paul Donato',
        office: 'State Representative',
        location: 'Medford, MA',
        status: 'met',
        photo: '/assets/legislators/paul-donato.jpg',
      },
      {
        id: 'steven-ultrino',
        name: 'State Representative Steven Ultrino',
        office: 'State Representative',
        location: 'Malden, MA',
        status: 'scheduled',
        photo: '/assets/legislators/steven-ultrino.jpg',
      },
      {
        id: 'patricia-jehlen',
        name: 'State Senator Patricia Jehlen',
        office: 'State Senator',
        location: 'Medford, MA',
        status: 'scheduled',
        photo: '/assets/legislators/patricia-jehlen.jpg',
      },
      {
        id: 'judith-garcia',
        name: 'State Representative Judith Garcia',
        office: 'State Representative',
        location: 'Chelsea, MA',
        status: 'scheduled',
        photo: '/assets/legislators/judith-garcia.jpg',
      },
      {
        id: 'jessica-giannino',
        name: 'State Representative Jessica Giannino',
        office: 'State Representative',
        location: 'Revere, MA',
        status: 'scheduled',
        photo: '/assets/legislators/jessica-giannino.jpg',
      },
    ],
  },
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
