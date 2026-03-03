import PostCard from './PostCard'
import type { AdvocacyPost } from '../data/siteContent'

type OutreachSectionProps = {
  posts: AdvocacyPost[]
}

function OutreachSection({ posts }: OutreachSectionProps) {
  return (
    <div className="container section-shell">
      <div className="section-heading">
        <p className="section-label">Outreach</p>
        <h2>Advocacy In Action</h2>
        <p>
          Every meeting, presentation, and collaboration expands transit equity across New England.
          Explore each update below.
        </p>
      </div>

      <div className="posts-grid">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} reverse={index % 2 === 1} />
        ))}
      </div>
    </div>
  )
}

export default OutreachSection
