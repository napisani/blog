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
    <li className="flex align-baseline py-4 border-dashed border-b-1">
      <span className="whitespace-nowrap mr-4 flex-none w-40">
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
