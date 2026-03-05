import AutoSlideshow from './AutoSlideshow'
import type { AdvocacyPost } from '../data/siteContent'

type PostCardProps = {
  post: AdvocacyPost
  reverse?: boolean
}

function PostCard({ post, reverse = false }: PostCardProps) {
  const ctaLabel = post.ctaLabel ?? 'Read on LinkedIn'
  const ctaUrl = post.ctaUrl ?? post.url
  const shouldShowLinkedInIcon = (post.ctaType ?? 'linkedin') === 'linkedin'

  return (
    <article className={`post-card ${reverse ? 'is-reverse' : ''}`} data-reveal>
      <div className="post-card-media">
        <AutoSlideshow postTitle={post.title} postUrl={post.url} slides={post.slides} />
      </div>

      <div className="post-card-content">
        <p className="post-date">{post.publishedDate}</p>
        <a className="post-title-link" href={post.url} rel="noreferrer" target="_blank">
          <h3>{post.title}</h3>
        </a>
        <p>{post.summary}</p>
        <a className="text-link post-linkedin-link" href={ctaUrl} rel="noreferrer" target="_blank">
          {shouldShowLinkedInIcon ? (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48 2.49 2.49 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.83v1.71h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.11V21h-4v-5.51c0-1.31-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21H9z" />
            </svg>
          ) : null}
          {ctaLabel}
        </a>
      </div>
    </article>
  )
}

export default PostCard
