import { brand, type NavItem, type SectionId } from '../data/siteContent'

type HeaderNavProps = {
  items: NavItem[]
  activeSection: SectionId
  onDonateClick: () => void
  onNavigate: (sectionId: SectionId) => void
  logoUrl: string
}

function HeaderNav({
  items,
  activeSection,
  onDonateClick,
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

        <button className="donate-btn" onClick={onDonateClick} type="button">
          Donate
        </button>
      </div>
    </header>
  )
}

export default HeaderNav
