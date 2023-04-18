import classNames from "classnames"
import Image from "next/image"
import Link from "next/link";
const techs = {
  'angular': 'https://angular.io/',
  'bash': 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
  'docker': 'https://www.docker.com',
  'flutter': 'https://flutter.dev/',
  'java': 'https://java.com/',
  'fastapi': 'https://fastapi.tiangolo.com/',
  'kotlin': 'https://kotlinlang.org/',
  'kubernetes': 'https://kotlinlang.org/',
  'lua': 'https://www.lua.org/',
  'neovim': 'https://neovim.io/',
  'nestjs': 'https://nestjs.com/',
  'nextjs': 'https://nextjs.org/',
  'nodejs': 'https://nodejs.org/',
  'postgres': 'https://www.postgresql.org/',
  'primeng': 'https://primeng.org/',
  'python': 'https://www.python.org/',
  'rust': 'https://www.rust-lang.org/',
  'springboot': 'https://spring.io/projects/spring-boot',
  'sqlite': 'https://www.sqlite.org/',
  'threejs': 'https://threejs.org/',
  'typescript': 'https://www.typescriptlang.org/',
  'vuejs': 'https://vuejs.org/',
};
const badges = Object.keys(techs)
  .map(name => {
    const entry = {}
    entry[name] = '/assets/badges/' + name + '.svg'
    return entry
  }).reduce((acc, cur) => ({ ...acc, ...cur }), {})
const TechBadge = ({ className, tech }: { className?: string, tech: string }) => {
  const techCleaned = tech.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (techCleaned in badges) {
    return (<Link as={techs[techCleaned]} href={techs[techCleaned]}>
      <div className={classNames('inline-block', 'm-1', className)}>
        <Image className="badge rounded w-auto h-full"
          width="0"
          height="0"
          src={'/assets/badges/' + techCleaned + '.svg'}
          aria-label={tech}
          alt={tech} />
      </div>
    </Link>
    )
  }
  return (<span className="badge m-1 inline-block">{tech}</span>)
}
export default TechBadge
