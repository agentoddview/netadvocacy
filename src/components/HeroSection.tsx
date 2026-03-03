import type { SiteContent } from '../data/siteContent'

type HeroSectionProps = {
  hero: SiteContent['hero']
  onViewOutreach: () => void
  onDonateClick: () => void
}

function HeroSection({ hero, onViewOutreach, onDonateClick }: HeroSectionProps) {
  return (
    <div className="container">
      <div className="hero-card" data-reveal>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-copy">{hero.description}</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={onViewOutreach} type="button">
                {hero.primaryCta}
              </button>
              <button className="btn btn-secondary" onClick={onDonateClick} type="button">
                {hero.secondaryCta}
              </button>
            </div>
          </div>

          <div aria-hidden="true" className="hero-media-collage">
            <figure className="hero-photo hero-photo-main">
              <img
                alt="NET advocacy with transit simulator in use"
                src="/assets/posts/post-1.jpg"
              />
            </figure>
            <figure className="hero-photo hero-photo-side">
              <img
                alt="Transit advocacy and policy outreach meeting"
                src="/assets/posts/post-3.jpg"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
