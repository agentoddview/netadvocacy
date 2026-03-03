type ResearchEmbedProps = {
  title: string
  description: string
  pdfPath: string
}

function ResearchEmbed({ title, description, pdfPath }: ResearchEmbedProps) {
  return (
    <div className="container section-shell">
      <div className="section-heading">
        <p className="section-label">Research</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="research-panel">
        <object aria-label={title} className="research-embed" data={pdfPath} type="application/pdf">
          <p>
            Your browser cannot preview this PDF.
            <a className="text-link" href={pdfPath} rel="noreferrer" target="_blank">
              {' '}
              Download the proposal.
            </a>
          </p>
        </object>
        <a className="btn btn-secondary" href={pdfPath} rel="noreferrer" target="_blank">
          Download Proposal PDF
        </a>
      </div>
    </div>
  )
}

export default ResearchEmbed
