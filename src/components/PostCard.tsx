import AutoSlideshow from './AutoSlideshow'
import type { AdvocacyPost } from '../data/siteContent'

type PostCardProps = {
  post: AdvocacyPost
  reverse?: boolean
}

function PostCard({ post, reverse = false }: PostCardProps) {
  return (
    <article className={`post-card ${reverse ? 'is-reverse' : ''}`}>
      <div className="post-card-media">
        <AutoSlideshow postTitle={post.title} postUrl={post.url} slides={post.slides} />
      </div>

      <div className="post-card-content">
        <a className="post-title-link" href={post.url} rel="noreferrer" target="_blank">
          <h3>{post.title}</h3>
        </a>
        <p>{post.summary}</p>
        <a className="text-link" href={post.url} rel="noreferrer" target="_blank">
          Read on LinkedIn
        </a>
      </div>
    </article>
  )
}

export default PostCard
