import Image from "next/image"

const badges = [
  'python',
  'bash',
  'rust',
  'typescript',
  'kubernetes',
  'neovim',
  'vuejs',
  'angular',
  'nextjs',
  'docker',
  'lua',
  'java',
  'nodejs',
  'kotlin',
  'nestjs',
  'springboot'
].map(name => {
  const entry = {}
  entry[name] = '/assets/badges/' + name + '.svg'
  return entry
}).reduce((acc, cur) => ({ ...acc, ...cur }), {})
const TechBadge = ({ tech }: { tech: string }) => {
  const techCleaned = tech.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (techCleaned in badges) {
    return (
      <div className="inline-block m-1">
        <Image className="badge rounded w-auto h-full"
          width="0"
          height="0"
          src={'/assets/badges/' + techCleaned + '.svg'}
          alt={tech} />
      </div>)
  }
  return (<span className="badge m-1 inline-block">{tech}</span>)
}
export default TechBadge
