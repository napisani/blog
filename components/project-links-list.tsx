import Project from '../interfaces/project'
import ProjectLink from './project-link'
import SectionSeparator from './section-separator'


const ProjectLinkList = ({ allProjects }: { allProjects: Project[] }) => {
  return (
    <div>
      <ul className="blog-posts">
        {allProjects.map((project, i) =>
          <ProjectLink project={project} key={'project_link' + i} />
        ).reduce((acc, cur) => acc.length === 0 ? [cur] : [...acc, <SectionSeparator key={'project_sep' + acc.length} />, cur], [])}
      </ul>
    </div>
  )
}

export default ProjectLinkList 
