import InterestList from '../components/interest-list'
import Layout from '../components/layout'
import OtherInterests from '../components/other-interests'
import TechBadge from '../components/tech-badge'

export default function Index() {
  return (
    <>
      <Layout>
        <h1 className="page-title">Bio</h1>
        <div className="mb-2">
          &#128075; Hi, I&apos;m <strong>Nick</strong>. I&apos;m a software engineer, who loves the web and the command line equally.
          I&apos;m constantly tinkering something new. This blog is an attempt to slow down, comment my code and share learnings with the world.
        </div>
        <InterestList />
        <OtherInterests/>

      </Layout>
    </>
  )
}
