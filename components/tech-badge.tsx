import Image from "next/image"

const badges = ['python',
  'bash',
  'rust', 'typescript',
  'kubernetes', 'neovim',
  'vuejs', 'angular', 'nextjs',
  'docker', 'lua', 'java', 'nodejs', 'kotlin', 'nestjs', 'springboot']
  .map(name => {
    const entry = {}
    entry[name] = '/assets/badges/' + name + '.svg'
    return entry
  }).reduce((acc, cur) => ({ ...acc, ...cur }), {})
const TechBadge = ({ tech }: { tech: string }) => {
  const techCleaned = tech.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (techCleaned in badges) {
    return (<Image className="badge rounded m-1 inline-block" 
      src={'/assets/badges/' + techCleaned + '.svg'} 
      width={97} height={28} alt={tech} />)
  }
  return (<span className="badge m-1 inline-block">{tech}</span>)
}
export default TechBadge
