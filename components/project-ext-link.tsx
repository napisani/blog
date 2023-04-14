import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import Project from '../interfaces/project';
const ProjectExtLink = ({ project, code }: { project: Project, code: boolean }) => {
  const url = code ? project.codeUrl : project.liveUrl;
  const icon = code ? faGithub : faUpRightFromSquare;
  if (!url) {
    return (<div></div>);
  }
  return (<div className="m-1">
    <Link
      as={url}
      href={url}
    >
      <FontAwesomeIcon className="w-4 inline-block mr-2" icon={icon} size="sm" />
      {code ? 'Code' : 'Demo'}
    </Link>
  </div>
  );
}
export default ProjectExtLink;
