import PostType from '../interfaces/post'
import BlogPostLink from './blog-post-link'
import SectionSeparator from './section-separator'

type Props = {
  allPosts: PostType[]
}

const BlogPostLinkList = ({
  allPosts
}: Props) => {
  return (
    <div>
      <ul className="blog-posts">
        {allPosts.map((post, i) =>
          <BlogPostLink post={post} key={'post_link' + i} />
        ).reduce((acc: any[], cur) => acc.length === 0 ? [cur] : [...acc, <SectionSeparator key={'sect_sep' + acc.length} />, cur], [])}
      </ul>
    </div>
  )
}

export default BlogPostLinkList 
