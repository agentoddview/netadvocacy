import type { SocialLink } from '../data/siteContent'

type SiteFooterProps = {
  mission: string
  leaders: string[]
  socialLinks: SocialLink[]
}

function SocialIcon({ platform }: { platform: SocialLink['platform'] }) {
  if (platform === 'linkedin') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.83v1.71h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.11V21h-4v-5.51c0-1.31-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21H9z" />
      </svg>
    )
  }

  if (platform === 'instagram') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4zm8.88 1.5a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M19.59 6.69A4.83 4.83 0 0 1 16.7 5a4.92 4.92 0 0 1-1.2-2.95h-3.2v12.34a2.66 2.66 0 1 1-2.65-2.66c.25 0 .49.03.72.1V8.58a5.95 5.95 0 1 0 5.93 5.95V9.1a8.06 8.06 0 0 0 4.29 1.25V7.22c-.35 0-.69-.18-1-.53z" />
    </svg>
  )
}

function SiteFooter({ mission, leaders, socialLinks }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-copy">
          <p className="section-label">New England Transit</p>
          <p>{mission}</p>
          <p>Leadership: {leaders.join(', ')}</p>
        </div>

        <nav aria-label="Social links" className="social-list">
          {socialLinks.map((link) => (
            <a
              aria-label={`Visit New England Transit on ${link.platform}`}
              className="social-link"
              href={link.url}
              key={link.platform}
              rel="noreferrer"
              target="_blank"
            >
              <SocialIcon platform={link.platform} />
            </a>
          ))}
        </nav>
      </div>

      <p className="copyright">© {new Date().getFullYear()} New England Transit. All rights reserved.</p>
    </footer>
  )
}

export default SiteFooter
