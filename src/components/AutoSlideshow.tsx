import { useEffect, useMemo, useState } from 'react'
import type { Slide } from '../data/siteContent'

type AutoSlideshowProps = {
  slides: Slide[]
  postUrl: string
  postTitle: string
}

const AUTO_ADVANCE_MS = 5000

function AutoSlideshow({ slides, postUrl, postTitle }: AutoSlideshowProps) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const normalizedIndex = useMemo(() => {
    if (slides.length === 0) {
      return 0
    }

    const mod = index % slides.length
    return mod >= 0 ? mod : mod + slides.length
  }, [index, slides.length])

  const activeSlide = slides[normalizedIndex]

  useEffect(() => {
    if (isPaused || slides.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setIndex((prev) => prev + 1)
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(timer)
  }, [isPaused, slides.length])

  if (!activeSlide) {
    return null
  }

  const moveBy = (delta: number) => setIndex((prev) => prev + delta)

  return (
    <div
      className="slideshow-shell"
      onBlurCapture={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          moveBy(-1)
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault()
          moveBy(1)
        }
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex={0}
    >
      <a
        aria-label={`Open outreach link: ${postTitle}`}
        className="slideshow-frame"
        href={postUrl}
        rel="noreferrer"
        target="_blank"
      >
        <img
          alt={activeSlide.alt}
          src={activeSlide.image}
          style={activeSlide.objectPosition ? { objectPosition: activeSlide.objectPosition } : undefined}
        />
      </a>

      {slides.length > 1 ? (
        <div className="slideshow-controls">
          <button aria-label="Previous slide" className="slide-btn" onClick={() => moveBy(-1)} type="button">
            Prev
          </button>

          <div aria-label="Slide selector" className="slide-indicators" role="tablist">
            {slides.map((slide, slideIndex) => (
              <button
                aria-label={`Show slide ${slideIndex + 1}`}
                aria-selected={slideIndex === normalizedIndex}
                className={`slide-dot ${slideIndex === normalizedIndex ? 'is-active' : ''}`}
                key={slide.id}
                onClick={() => setIndex(slideIndex)}
                role="tab"
                type="button"
              />
            ))}
          </div>

          <button aria-label="Next slide" className="slide-btn" onClick={() => moveBy(1)} type="button">
            Next
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default AutoSlideshow
