import type { CSSProperties } from 'react'
import type { Metric } from '../data/siteContent'

type ImpactStatsProps = {
  heading: string
  subtitle: string
  lastUpdated: string
  metrics: Metric[]
}

function ImpactStats({ heading, subtitle, lastUpdated, metrics }: ImpactStatsProps) {
  const metricKickers: Record<string, string> = {
    legislators: 'Policy Outreach',
    residents: 'Community Reach',
    cities: 'Coverage',
    visits: 'Platform Growth',
  }

  return (
    <div className="container section-shell">
      <div className="section-heading">
        <p className="section-label">Impact</p>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="impact-grid">
        {metrics.map((metric, index) => (
          <article
            className={`metric-card metric-card--${metric.id}`}
            data-reveal
            key={metric.id}
            style={{ '--reveal-delay': `${index * 120}ms` } as CSSProperties}
          >
            <p className="metric-kicker">{metricKickers[metric.id] ?? 'Impact'}</p>
            <p className="metric-value">{metric.value}</p>
            <p className="metric-label">{metric.label}</p>
            {metric.note ? <p className="metric-note">{metric.note}</p> : null}
          </article>
        ))}
      </div>

      <p className="impact-updated">{lastUpdated}</p>
    </div>
  )
}

export default ImpactStats
