import { useMemo, type CSSProperties } from 'react'
import type { Legislator } from '../data/siteContent'

type LegislatorMapSectionProps = {
  title: string
  description: string
  items: Legislator[]
}

type CityLayout = { x: number; y: number }
type CityPin = { city: string; aware: number; met: number; scheduled: number }

const CITY_LAYOUTS: Record<string, CityLayout> = {
  Worcester: { x: 18, y: 66 },
  Lynn: { x: 86, y: 40 },
  Malden: { x: 76, y: 50 },
  Everett: { x: 80, y: 56 },
  Chelsea: { x: 72, y: 62 },
  Boston: { x: 72, y: 74 },
}

function getInitials(fullName: string) {
  const words = fullName
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .filter(Boolean)
  const picks = words.slice(-2)
  return picks.map((word) => word[0]?.toUpperCase()).join('')
}

function extractCity(location: string) {
  return location.split(',')[0]?.trim() ?? location
}

function getPinClass(pin: CityPin) {
  if (pin.met > 0) {
    return 'is-met'
  }

  if (pin.aware > 0) {
    return 'is-aware'
  }

  return 'is-scheduled'
}

function LegislatorMapSection({ title, description, items }: LegislatorMapSectionProps) {
  const aware = useMemo(() => items.filter((item) => item.status === 'aware'), [items])
  const met = useMemo(() => items.filter((item) => item.status === 'met'), [items])
  const scheduled = useMemo(() => items.filter((item) => item.status === 'scheduled'), [items])

  const cityPins = useMemo(() => {
    const grouped = new Map<string, CityPin>()

    items.forEach((item) => {
      const city = extractCity(item.location)
      const group = grouped.get(city) ?? { city, aware: 0, met: 0, scheduled: 0 }

      if (item.status === 'aware') group.aware += 1
      if (item.status === 'met') group.met += 1
      if (item.status === 'scheduled') group.scheduled += 1

      grouped.set(city, group)
    })

    return Array.from(grouped.values())
      .filter((group) => CITY_LAYOUTS[group.city])
      .sort((a, b) => {
        const aLayout = CITY_LAYOUTS[a.city]
        const bLayout = CITY_LAYOUTS[b.city]
        return aLayout.x - bLayout.x || aLayout.y - bLayout.y
      })
  }, [items])

  const bostonLayout = CITY_LAYOUTS.Boston

  const renderGroup = (
    groupTitle: string,
    groupItems: Legislator[],
    statusClass: 'aware' | 'met' | 'scheduled',
  ) => (
    <section className="legislator-group" key={groupTitle}>
      <div className="legislator-group-head">
        <h3>{groupTitle}</h3>
        <span>{groupItems.length}</span>
      </div>
      <div className="legislator-grid">
        {groupItems.map((legislator) => (
          <article className={`legislator-card is-${statusClass}`} key={legislator.id}>
            <div className="legislator-avatar" aria-hidden="true">
              {legislator.photo ? (
                <img
                  alt=""
                  src={legislator.photo}
                  style={
                    legislator.photoPosition
                      ? ({ objectPosition: legislator.photoPosition } as CSSProperties)
                      : undefined
                  }
                />
              ) : (
                <span>{getInitials(legislator.name)}</span>
              )}
            </div>

            <div className="legislator-copy">
              <p className="legislator-name">
                {legislator.name}
                {legislator.status === 'aware' ? <sup aria-label="Aware of BBS">*</sup> : null}
              </p>
              <p>{legislator.office}</p>
              <p>{legislator.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )

  return (
    <div className="container section-shell">
      <div className="section-heading">
        <p className="section-label">Map</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="legislator-layout">
        <section aria-label="Legislator city map" className="legislator-map-panel" data-reveal>
          <div className="map-surface">
            <p className="map-title">Greater Boston + Worcester Coverage</p>
            <p className="map-subtitle">Numbered pins match the city list below.</p>

            <div className="map-canvas">
              <svg aria-hidden="true" className="map-lines" viewBox="0 0 100 100">
                {cityPins
                  .filter((pin) => pin.city !== 'Boston')
                  .map((pin) => {
                    const point = CITY_LAYOUTS[pin.city]
                    return (
                      <line
                        key={`line-${pin.city}`}
                        x1={bostonLayout.x}
                        x2={point.x}
                        y1={bostonLayout.y}
                        y2={point.y}
                      />
                    )
                  })}
              </svg>

              {cityPins.map((pin, index) => {
                const cityLayout = CITY_LAYOUTS[pin.city]
                const pinClass = getPinClass(pin)

                return (
                  <div
                    className={`map-pin ${pinClass}`}
                    key={pin.city}
                    style={{ left: `${cityLayout.x}%`, top: `${cityLayout.y}%` }}
                  >
                    <span className="map-pin-dot">{index + 1}</span>
                  </div>
                )
              })}
            </div>

            <ol className="map-city-list">
              {cityPins.map((pin, index) => {
                const total = pin.aware + pin.met + pin.scheduled
                const pinClass = getPinClass(pin)

                return (
                  <li className="map-city-item" key={pin.city}>
                    <span className={`city-index ${pinClass}`}>{index + 1}</span>
                    <div className="city-copy">
                      <p>{pin.city}</p>
                      <p>
                        {total} total | {pin.aware} aware | {pin.met} met | {pin.scheduled} scheduled
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>

            <div className="map-legend">
              <span className="legend-chip is-aware">Aware of BBS (*)</span>
              <span className="legend-chip is-met">Directly Met</span>
              <span className="legend-chip is-scheduled">Meetings Scheduled</span>
            </div>
          </div>
        </section>

        <div className="legislator-lists">
          {renderGroup('Legislators Aware of BBS (*)', aware, 'aware')}
          {renderGroup('Legislators Directly Met', met, 'met')}
          {renderGroup('Meetings Scheduled', scheduled, 'scheduled')}
        </div>
      </div>
    </div>
  )
}

export default LegislatorMapSection
