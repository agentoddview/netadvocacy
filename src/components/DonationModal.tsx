import { useEffect } from 'react'

type DonationModalProps = {
  isOpen: boolean
  onClose: () => void
}

function DonationModal({ isOpen, onClose }: DonationModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.classList.add('no-scroll')
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        aria-labelledby="donation-title"
        aria-modal="true"
        className="modal-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <p className="section-label">Donation Portal</p>
        <h2 id="donation-title">Donations Are Launching Soon</h2>
        <p>
          We are preparing a secure donation platform to support New England Transit advocacy,
          presentations, and travel for transit policy meetings and expos.
        </p>
        <button className="btn btn-primary" onClick={onClose} type="button">
          Close
        </button>
      </div>
    </div>
  )
}

export default DonationModal
