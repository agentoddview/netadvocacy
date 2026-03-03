import { brand, type NavItem } from '../data/siteContent'

type HeaderNavProps = {
  items: NavItem[]
  activeSection: NavItem['id']
  onDonateClick: () => void
  logoUrl: string
}

function HeaderNav({ items, activeSection, onDonateClick, logoUrl }: HeaderNavProps) {
  return (
    <header className="site-header">
      <div className="container header-shell">
        <a aria-label="Go to top of advocacy page" className="brand-mark" href="#home">
          <img alt={`${brand.name} logo`} src={logoUrl} />
          <span>{brand.name} Advocacy</span>
        </a>

        <nav aria-label="Primary" className="primary-nav">
          <ul className="nav-list">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
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
