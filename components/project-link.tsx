import Link from 'next/link'
import Project from '../interfaces/project'
import TechBadge from './tech-badge'
type Props = {
  project: Project
}

const ProjectLink = ({
  project
}: Props) => {
  return (
    <li>
      <div className="inline-block">
        <Link
          as={project.url}
          href={project.url}
          className="hover:underline"
        >
          {project.title}
        </Link>
        <div>
          <i>{project.excerpt}</i>
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
