import type { SiteContent } from '../data/siteContent'

type HeroSectionProps = {
  hero: SiteContent['hero']
  onDonateClick: () => void
}

function HeroSection({ hero, onDonateClick }: HeroSectionProps) {
  return (
    <div className="container">
      <div className="hero-card">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-copy">{hero.description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#outreach">
            {hero.primaryCta}
          </a>
          <button className="btn btn-secondary" onClick={onDonateClick} type="button">
            {hero.secondaryCta}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
