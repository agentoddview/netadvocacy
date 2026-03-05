import { useEffect, useMemo, type CSSProperties } from 'react'
import { latLngBounds } from 'leaflet'
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet'
import type { Legislator } from '../data/siteContent'

type LegislatorMapSectionProps = {
  title: string
  description: string
  items: Legislator[]
}

type CityCoordinate = { lat: number; lng: number }
type CityPin = {
  city: string
  aware: number
  met: number
  scheduled: number
  legislators: Legislator[]
  coordinate: CityCoordinate
}

const CITY_COORDINATES: Record<string, CityCoordinate> = {
  Boston: { lat: 42.3601, lng: -71.0589 },
  Chelsea: { lat: 42.3918, lng: -71.0328 },
  Everett: { lat: 42.4084, lng: -71.0537 },
  Lynn: { lat: 42.4668, lng: -70.9495 },
  Malden: { lat: 42.4251, lng: -71.0662 },
  Worcester: { lat: 42.2626, lng: -71.8023 },
}

function extractCity(location: string) {
  return location.split(',')[0]?.trim() ?? location
}

function getInitials(fullName: string) {
  const words = fullName
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .filter(Boolean)
  const picks = words.slice(-2)
  return picks.map((word) => word[0]?.toUpperCase()).join('')
}

function getPinClass(pin: CityPin) {
  if (pin.met > 0) return 'is-met'
  if (pin.aware > 0) return 'is-aware'
  return 'is-scheduled'
}

function markerColorByStatus(pinClass: string) {
  if (pinClass === 'is-aware') return '#0e6e5a'
  if (pinClass === 'is-scheduled') return '#b57714'
  return '#1c5ea8'
}

function FitMapBounds({ pins }: { pins: CityPin[] }) {
  const map = useMap()

  useEffect(() => {
    if (pins.length === 0) {
      return
    }

    const bounds = latLngBounds(pins.map((pin) => [pin.coordinate.lat, pin.coordinate.lng]))
    map.fitBounds(bounds.pad(0.28), { animate: false })
  }, [map, pins])

  return null
}

function LegislatorMapSection({ title, description, items }: LegislatorMapSectionProps) {
  const aware = useMemo(() => items.filter((item) => item.status === 'aware'), [items])
  const met = useMemo(() => items.filter((item) => item.status === 'met'), [items])
  const scheduled = useMemo(() => items.filter((item) => item.status === 'scheduled'), [items])

  const cityPins = useMemo(() => {
    const grouped = new Map<string, CityPin>()

    items.forEach((item) => {
      const city = extractCity(item.location)
      const coordinate = CITY_COORDINATES[city]
      if (!coordinate) {
        return
      }

      const current = grouped.get(city) ?? {
        city,
        aware: 0,
        met: 0,
        scheduled: 0,
        legislators: [],
        coordinate,
      }

      if (item.status === 'aware') current.aware += 1
      if (item.status === 'met') current.met += 1
      if (item.status === 'scheduled') current.scheduled += 1
      current.legislators.push(item)

      grouped.set(city, current)
    })

    return Array.from(grouped.values()).sort((a, b) => a.coordinate.lng - b.coordinate.lng)
  }, [items])

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
            <p className="map-subtitle">Interactive OpenStreetMap based on legislator meeting locations.</p>

            <MapContainer className="legislator-real-map" center={[42.36, -71.16]} zoom={9} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FitMapBounds pins={cityPins} />

              {cityPins.map((pin) => {
                const pinClass = getPinClass(pin)
                const color = markerColorByStatus(pinClass)
                const total = pin.aware + pin.met + pin.scheduled

                return (
                  <CircleMarker
                    center={[pin.coordinate.lat, pin.coordinate.lng]}
                    color="#ffffff"
                    fillColor={color}
                    fillOpacity={0.94}
                    key={pin.city}
                    radius={Math.min(16, 8 + total)}
                    stroke={true}
                    weight={2}
                  >
                    <Popup>
                      <strong>{pin.city}</strong>
                      <br />
                      {total} total | {pin.aware} aware | {pin.met} met | {pin.scheduled} scheduled
                      <br />
                      <small>{pin.legislators.map((legislator) => legislator.name).join(', ')}</small>
                    </Popup>
                  </CircleMarker>
                )
              })}
            </MapContainer>

            <ol className="map-city-list">
              {cityPins.map((pin) => {
                const total = pin.aware + pin.met + pin.scheduled
                const pinClass = getPinClass(pin)

                return (
                  <li className={`map-city-item ${pinClass}`} key={pin.city}>
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
          {renderGroup('Legislators Directly Met', met, 'met')}
          {renderGroup('Meetings Scheduled', scheduled, 'scheduled')}
          {renderGroup('Legislators Aware of BBS (*)', aware, 'aware')}
        </div>
      </div>
    </div>
  )
}

export default LegislatorMapSection
