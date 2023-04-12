import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Post from '../interfaces/post'
import BlogPosts from '../components/blog-posts'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <div>
          &#128075; Hi, I'm <strong>Nick</strong>. I'm a software engineer, who loves the web and the command line equally. 
          I'm constantly tinkering something new. This blog as attempt to slow down and share my learnings with the world.
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
