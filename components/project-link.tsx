import Project from '../interfaces/project'
import ProjectExtLink from './project-ext-link'
import TechBadge from './tech-badge'
type Props = {
  project: Project
}

const ProjectLink = ({
  project
}: Props) => {
  return (
    <li>
      <div className="block">
        <h2 className="subtitle">{project.title}</h2>
        <div>
          <i>{project.excerpt}</i>
        </div>
        <div>
          <ProjectExtLink project={project} code={true} />
          <ProjectExtLink project={project} code={false} />
        </div>
        <div>
          <div className='block'>Techonology involved:</div>
          <div className='block'> {project.tech.map((tech) => <TechBadge className="align-middle" tech={tech} key={tech} />)}</div>
        </div>
      </div>
    </li>
  )
}

export default ProjectLink
