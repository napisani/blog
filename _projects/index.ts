import Project from "../interfaces/project";

export default function getProjects(): Project[] {
  const procmux: Project = {
    title: 'Procmux',
    codeUrl: 'https://github.com/napisani/procmux',
    excerpt: 'a TUI utility for running multiple commands in parallel in easily switchable terminals',
    tech: ['Python', "BASH"]
  };
  const photostore: Project = {
    title: 'Photostore',
    codeUrl: 'https://github.com/napisani/photostore',
    excerpt: 'a self-hosted, client-server solution for backing up, viewing and downloading photos',
    tech: ['Python', "FastAPI", "Flutter", "Docker", "Postgres"]
  };
  const cookiedraw: Project= {
    title: 'Cookie Draw',
    codeUrl: 'https://github.com/napisani/cookiedraw-public',
    liveUrl: 'https://cookiedraw.napisani.site',
    excerpt: 'An Angular app used for designing printable, 3D cookie cutter models',
    tech: ['TypeScript', "Angular", "PrimeNG", "Docker"]
  };
  return [procmux, photostore, cookiedraw];
}
