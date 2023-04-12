import Project from '../interfaces/project'
import ProjectLink from './project-link'
import SectionSeparator from './section-separator'


const ProjectLinkList = () => {
  const procmux: Project = { title: 'test', date: '2020-01-01', url: 'https://google.com', excerpt: 'test' };
  return (
    <div>
      <ul className="blog-posts">
        <ProjectLink project={procmux} />
        <SectionSeparator />
      </ul>
    </div>
  )
}

export default ProjectLinkList 
