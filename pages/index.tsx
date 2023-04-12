import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'

export default function Index() {
  return (
    <>
      <Layout>
        <div>
          &#128075; Hi, I&apos;m <strong>Nick</strong>. I&apos;m a software engineer, who loves the web and the command line equally.
          I&apos;m constantly tinkering something new. This blog as attempt to slow down, add comments to my code and share my learnings with the world.
        </div>
      </Layout>
    </>
  )
}
