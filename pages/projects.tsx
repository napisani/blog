import Layout from '../components/layout'
import ProjectLinkList from '../components/project-links-list'
import Project from '../interfaces/project'
import { getAllProjects } from '../lib/api'

export default function Projects({ allProjects }: { allProjects: Project[] }) {
  return (
    <Layout>
      <h1 className='page-title'>Personal Projects and Contributions</h1>
      <ProjectLinkList allProjects={allProjects}/>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allProjects= getAllProjects()

  return {
    props: { allProjects },
  }
}
