import { brand, type NavItem, type SectionId } from '../data/siteContent'

type HeaderNavProps = {
  items: NavItem[]
  activeSection: SectionId
  donateUrl: string
  onNavigate: (sectionId: SectionId) => void
  logoUrl: string
}

function HeaderNav({
  items,
  activeSection,
  donateUrl,
  onNavigate,
  logoUrl,
}: HeaderNavProps) {
  return (
    <header className="site-header">
      <div className="container header-shell">
        <button
          aria-label="Go to top of advocacy page"
          className="brand-mark brand-mark-button"
          onClick={() => onNavigate('home')}
          type="button"
        >
          <img alt={`${brand.name} logo`} src={logoUrl} />
          <span>{brand.name} Advocacy</span>
        </button>

        <nav aria-label="Primary" className="primary-nav">
          <ul className="nav-list">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <a className="donate-btn" href={donateUrl} rel="noreferrer" target="_blank">
          Donate
        </a>
      </div>
    </header>
  )
}

export default HeaderNav
