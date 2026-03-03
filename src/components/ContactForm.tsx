import { useState } from 'react'
import type { SiteContent } from '../data/siteContent'

type ContactFormProps = {
  contact: SiteContent['contact']
}

type ContactDraft = {
  name: string
  email: string
  message: string
}

const initialDraft: ContactDraft = { name: '', email: '', message: '' }

function ContactForm({ contact }: ContactFormProps) {
  const [draft, setDraft] = useState<ContactDraft>(initialDraft)
  const [hasOpenedMailClient, setHasOpenedMailClient] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!event.currentTarget.reportValidity()) {
      return
    }

    const subject = `${contact.subjectPrefix} — ${draft.name}`
    const body = `Name: ${draft.name}\nEmail: ${draft.email}\n\nMessage:\n${draft.message}`
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setHasOpenedMailClient(true)
  }

  const updateField = (key: keyof ContactDraft, value: string) => {
    setDraft((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="container section-shell">
      <div className="section-heading">
        <p className="section-label">Contact</p>
        <h2>Partner With NET Advocacy</h2>
        <p>
          Reach out for collaboration requests, legislative meetings, speaking opportunities, or
          community transit discussions.
        </p>
      </div>

      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <label htmlFor="contact-name">
          Name
          <input
            autoComplete="name"
            id="contact-name"
            name="name"
            onChange={(event) => updateField('name', event.target.value)}
            required
            type="text"
            value={draft.name}
          />
        </label>

        <label htmlFor="contact-email">
          Email
          <input
            autoComplete="email"
            id="contact-email"
            name="email"
            onChange={(event) => updateField('email', event.target.value)}
            required
            type="email"
            value={draft.email}
          />
        </label>

        <label htmlFor="contact-message">
          Message
          <textarea
            id="contact-message"
            name="message"
            onChange={(event) => updateField('message', event.target.value)}
            required
            rows={6}
            value={draft.message}
          />
        </label>

        <div className="contact-actions">
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          <p>
            Or email us directly at{' '}
            <a className="text-link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </p>
        </div>

        {hasOpenedMailClient ? (
          <p className="form-status">Your mail client should now open with a pre-filled draft.</p>
        ) : null}
      </form>
    </div>
  )
}

export default ContactForm
