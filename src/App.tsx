import { useEffect, useMemo, useState } from 'react'
import ContactForm from './components/ContactForm'
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
  type SectionId,
} from './data/siteContent'

const DONATION_URL = 'https://buy.stripe.com/eVq5kFa2JckX23B6QKeEo00'

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const orderedPosts = useMemo(
    () => [...siteContent.posts].sort((a, b) => b.dateOrder - a.dateOrder),
    [],
  )

  const scrollToSection = (sectionId: SectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    const header = document.querySelector<HTMLElement>('.site-header')
    const offset = (header?.offsetHeight ?? 0) + 16
    const y = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const updateActiveSection = () => {
      const header = document.querySelector<HTMLElement>('.site-header')
      const threshold = window.scrollY + (header?.offsetHeight ?? 0) + 120
      let current = sections[0]?.id ?? 'home'

      sections.forEach((section) => {
        if (section.offsetTop <= threshold) {
          current = section.id
        }
      })

      setActiveSection(current as SectionId)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const updateScrollVars = () => {
      frame = 0
      const maxScrollable = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      const progress = window.scrollY / maxScrollable
      root.style.setProperty('--scroll-progress', progress.toFixed(4))
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
        donateUrl={DONATION_URL}
        items={navItems}
        logoUrl={brand.logoUrl}
        onNavigate={scrollToSection}
      />

      <main className="site-main">
        <section className="section hero-section" id="home">
          <HeroSection
            donateUrl={DONATION_URL}
            hero={siteContent.hero}
            onViewOutreach={() => scrollToSection('outreach')}
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
            fullReportPath={siteContent.research.fullReportPath}
            policyBriefPath={siteContent.research.policyBriefPath}
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
    </>
  )
}

export default App
