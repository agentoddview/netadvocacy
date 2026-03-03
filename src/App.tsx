import { useEffect, useMemo, useState } from 'react'
import ContactForm from './components/ContactForm'
import DonationModal from './components/DonationModal'
import HeaderNav from './components/HeaderNav'
import HeroSection from './components/HeroSection'
import ImpactStats from './components/ImpactStats'
import OutreachSection from './components/OutreachSection'
import ResearchEmbed from './components/ResearchEmbed'
import SiteFooter from './components/SiteFooter'
import {
  brand,
  impactMeta,
  navItems,
  siteContent,
  type NavItem,
} from './data/siteContent'

function App() {
  const [isDonationOpen, setIsDonationOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<NavItem['id']>('home')
  const orderedPosts = useMemo(
    () => [...siteContent.posts].sort((a, b) => b.dateOrder - a.dateOrder),
    [],
  )

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id as NavItem['id'])
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.4, 0.6, 0.8] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeaderNav
        activeSection={activeSection}
        items={navItems}
        logoUrl={brand.logoUrl}
        onDonateClick={() => setIsDonationOpen(true)}
      />

      <main>
        <section className="section hero-section" id="home">
          <HeroSection
            hero={siteContent.hero}
            onDonateClick={() => setIsDonationOpen(true)}
          />
        </section>

        <section className="section impact-section" id="impact">
          <ImpactStats
            heading={impactMeta.heading}
            lastUpdated={impactMeta.lastUpdated}
            metrics={siteContent.metrics}
            subtitle={impactMeta.subtitle}
          />
        </section>

        <section className="section outreach-section" id="outreach">
          <OutreachSection posts={orderedPosts} />
        </section>

        <section className="section research-section" id="research">
          <ResearchEmbed
            description={siteContent.research.description}
            pdfPath={siteContent.research.pdfPath}
            title={siteContent.research.title}
          />
        </section>

        <section className="section contact-section" id="contact">
          <ContactForm contact={siteContent.contact} />
        </section>
      </main>

      <SiteFooter
        leaders={siteContent.footer.leaders}
        mission={siteContent.footer.mission}
        socialLinks={siteContent.footer.social}
      />

      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />
    </>
  )
}

export default App
