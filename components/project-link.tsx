import Link from 'next/link'
import Project from '../interfaces/project'
import DateFormatter from './date-formatter'
type Props = {
  project: Project
}

const ProjectLink = ({
 project 
}: Props) => {
  return (
    <li>
      <span className="whitespace-nowrap mr-4">
        <i>
          <DateFormatter dateString={project.date} />
        </i>
      </span>
      <Link
        as={project.url}
        href={project.url}
        className="hover:underline"
      >
        {project.title}
      </Link>
    </li>
  )
}

export default ProjectLink
