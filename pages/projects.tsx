import Layout from '../components/layout'
// import Head from 'next/head'
import ProjectLinkList from '../components/project-links-list'

export default function Projects() {
  return (
    <Layout>
      <h1 className='title'>Personal Projects and Contributions</h1>
      <ProjectLinkList />
    </Layout>
  )
}
