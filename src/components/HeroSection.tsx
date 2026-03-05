import type { SiteContent } from '../data/siteContent'

type HeroSectionProps = {
  hero: SiteContent['hero']
  donateUrl: string
  onViewOutreach: () => void
}

function HeroSection({ hero, donateUrl, onViewOutreach }: HeroSectionProps) {
  return (
    <div className="container">
      <div className="hero-card" data-reveal>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-copy">
              {hero.descriptionPrefix}
              <a className="text-link" href={hero.linkedGameUrl} rel="noreferrer" target="_blank">
                {hero.linkedGameLabel}
              </a>
              {hero.descriptionMiddle}
              <a className="text-link" href={hero.linkedPressUrl} rel="noreferrer" target="_blank">
                {hero.linkedPressLabel}
              </a>
              {hero.descriptionSuffix}
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={onViewOutreach} type="button">
                {hero.primaryCta}
              </button>
              <a className="btn btn-secondary" href={donateUrl} rel="noreferrer" target="_blank">
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div aria-hidden="true" className="hero-media-collage">
            <figure className="hero-photo hero-photo-main">
              <img
                alt="NET advocacy meeting with community and policy leaders"
                src="/assets/posts/hero-main.jpg"
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
