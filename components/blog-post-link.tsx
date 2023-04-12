import Link from 'next/link'
import PostType from '../interfaces/post'
import DateFormatter from './date-formatter'
type Props = {
  post: PostType
}

const BlogPostLink = ({
  post
}: Props) => {
  return (
    <li>
      <span>
        <i>
          <DateFormatter dateString={post.date} />
        </i>
      </span>
      <Link
        as={`/posts/${post.slug}`}
        href="/posts/[slug]"
        className="hover:underline"
      >
        {post.title}
      </Link>
    </li>
  )
}

export default BlogPostLink
