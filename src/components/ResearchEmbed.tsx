import { useMemo, useState } from 'react'

type ResearchEmbedProps = {
  title: string
  description: string
  fullReportPath: string
  policyBriefPath: string
}

function ResearchEmbed({
  title,
  description,
  fullReportPath,
  policyBriefPath,
}: ResearchEmbedProps) {
  const [selectedDoc, setSelectedDoc] = useState<'full' | 'brief'>('brief')

  const activeDocPath = useMemo(
    () => (selectedDoc === 'full' ? fullReportPath : policyBriefPath),
    [fullReportPath, policyBriefPath, selectedDoc],
  )

  const activeDocLabel =
    selectedDoc === 'full' ? '22-Page Research Paper' : '1-Page Policy Brief'

  return (
    <div className="container section-shell">
      <div className="section-heading">
        <p className="section-label">Research</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="research-panel">
        <div className="research-switch">
          <button
            className={`doc-toggle ${selectedDoc === 'brief' ? 'is-active' : ''}`}
            onClick={() => setSelectedDoc('brief')}
            type="button"
          >
            1-Page Policy Brief
          </button>
          <button
            className={`doc-toggle ${selectedDoc === 'full' ? 'is-active' : ''}`}
            onClick={() => setSelectedDoc('full')}
            type="button"
          >
            22-Page Research Paper
          </button>
        </div>

        <object
          aria-label={`${title} - ${activeDocLabel}`}
          className="research-embed"
          data={activeDocPath}
          key={activeDocPath}
          type="application/pdf"
        >
          <p>
            Your browser cannot preview this PDF.
            <a className="text-link" href={activeDocPath} rel="noreferrer" target="_blank">
              {' '}
              Download the proposal.
            </a>
          </p>
        </object>
      </div>
    </div>
  )
}

export default ResearchEmbed
