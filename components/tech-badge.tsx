import classNames from "classnames"
import Image from "next/image"

const badges = [
  'angular',
  'bash',
  'docker',
  'fastapi',
  'flutter',
  'java',
  'kotlin',
  'kubernetes',
  'lua',
  'neovim',
  'nestjs',
  'nextjs',
  'nodejs',
  'postgres',
  'primeng',
  'python',
  'rust',
  'springboot',
  'sqlite',
  'threejs',
  'typescript',
  'vuejs',
].map(name => {
  const entry = {}
  entry[name] = '/assets/badges/' + name + '.svg'
  return entry
}).reduce((acc, cur) => ({ ...acc, ...cur }), {})
const TechBadge = ({ className, tech }: { className?: string, tech: string }) => {
  const techCleaned = tech.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (techCleaned in badges) {
    return (
      <div className={classNames('inline-block', 'm-1', className)}>
        <Image className="badge rounded w-auto h-full"
          width="0"
          height="0"
          src={'/assets/badges/' + techCleaned + '.svg'}
          aria-label={tech}
          alt={tech} />
      </div>)
  }
  return (<span className="badge m-1 inline-block">{tech}</span>)
}
export default TechBadge
