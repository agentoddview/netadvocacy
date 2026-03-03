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

  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const updateScrollVars = () => {
      frame = 0
      const maxScrollable = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      const progress = window.scrollY / maxScrollable
      root.style.setProperty('--scroll-progress', progress.toFixed(4))
      root.style.setProperty('--scroll-shift', `${window.scrollY * 0.08}px`)
      root.style.setProperty('--scroll-shift-soft', `${window.scrollY * 0.03}px`)
      root.style.setProperty('--scroll-shift-inverse', `${window.scrollY * -0.025}px`)
    }

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateScrollVars)
      }
    }

    updateScrollVars()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const revealables = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 },
    )

    revealables.forEach((node, index) => {
      if (!node.style.getPropertyValue('--reveal-delay')) {
        node.style.setProperty('--reveal-delay', `${Math.min(index * 55, 360)}ms`)
      }
      revealObserver.observe(node)
    })

    return () => revealObserver.disconnect()
  }, [orderedPosts])

  return (
    <>
      <HeaderNav
        activeSection={activeSection}
        items={navItems}
        logoUrl={brand.logoUrl}
        onDonateClick={() => setIsDonationOpen(true)}
      />

      <main className="site-main">
        <section className="section hero-section" id="home">
          <HeroSection
            hero={siteContent.hero}
            onDonateClick={() => setIsDonationOpen(true)}
          />
        </section>

        <section className="section impact-section" data-reveal id="impact">
          <ImpactStats
            heading={impactMeta.heading}
            lastUpdated={impactMeta.lastUpdated}
            metrics={siteContent.metrics}
            subtitle={impactMeta.subtitle}
          />
        </section>

        <section className="section outreach-section" data-reveal id="outreach">
          <OutreachSection posts={orderedPosts} />
        </section>

        <section className="section research-section" data-reveal id="research">
          <ResearchEmbed
            description={siteContent.research.description}
            pdfPath={siteContent.research.pdfPath}
            title={siteContent.research.title}
          />
        </section>

        <section className="section contact-section" data-reveal id="contact">
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
