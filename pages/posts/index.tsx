import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import Post from '../../interfaces/post'
import BlogPostLinkList from '../../components/blog-post-link-list'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <h1 className='page-title'>Blog Posts</h1>
      <BlogPostLinkList allPosts={allPosts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
