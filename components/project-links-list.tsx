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
  const photostore: Project = {
    title: 'Photostore',
    date: '2021-7-5',
    url: 'https://github.com/napisani/photostore',
    excerpt: 'a self-hosted, client-server solution for backing up, viewing and downloading photos',
    tech: ['Python', "FastAPI", "Flutter", "Docker", "Postgres"]
  };
  return (
    <div>
      <ul className="blog-posts">
        <ProjectLink project={procmux} />
        <SectionSeparator />
        <ProjectLink project={photostore} />
        <SectionSeparator />
      </ul>
    </div>
  )
}

export default ProjectLinkList 
