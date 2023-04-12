import Layout from '../components/layout'
import TechBadge from '../components/tech-badge'
import { getAllPosts } from '../lib/api'

export default function Index() {
  return (
    <>
      <Layout>
        <div class="mb-2">
          &#128075; Hi, I&apos;m <strong>Nick</strong>. I&apos;m a software engineer, who loves the web and the command line equally.
          I&apos;m constantly tinkering something new. This blog is an attempt to slow down, comment my code and share learnings with the world.
        </div>
        <div className="interests-list">
          Here are some of my favoite techonlogies/interests:
          <ul>
            <li>
              General purpose languages:
              <div className="ml-4">
                <TechBadge tech="TypeScript" />
                <TechBadge tech="Rust" />
                <TechBadge tech="Python" />
                <TechBadge tech="Java" />
                <TechBadge tech="Lua" />
                <TechBadge tech="Kotlin" />
              </div>
            </li>
            <li>
              Webapp techonlogies:
              <div className="ml-4">
                <TechBadge tech="Next.js" />
                <TechBadge tech="Vue.js" />
                <TechBadge tech="Angular" />
              </div>
            </li>
            <li>
              Developer Tools:
              <div className="ml-4">
                <TechBadge tech="neovim" />
              </div>
            </li>
            <li>
              Cloud, DevOps and Infrastructure
              <div className="ml-4">
                <TechBadge tech="Docker" />
                <TechBadge tech="Kubernetes" />
              </div>
            </li>
            <li>
              Backend techonlogies/frameworks:
              <div className="ml-4">
                <TechBadge tech="node.js" />
                <TechBadge tech="nest.js" />
                <TechBadge tech="springboot" />
              </div>
            </li>
          </ul>
        </div>
      </Layout >
    </>
  )
}
