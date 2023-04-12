import Project from '../interfaces/project'
import ProjectLink from './project-link'
import SectionSeparator from './section-separator'


const ProjectLinkList = () => {
  const procmux: Project = { 
    title: 'Procmux', 
    date: '2022-10-25', 
    url: 'https://github.com/napisani/procmux', 
    excerpt: 'a TUI utility for running multiple commands in parallel in easily switchable terminals',
    tech: ['Python', "BASH"] 
  };
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
