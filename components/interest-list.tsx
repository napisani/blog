import TechBadge from "./tech-badge";

const InterestList = () => {
  return (<div className="interests-list">
    Here are some of my favoite techonlogies/interests:
    <ul className="fav-list">
      <li>
        ⚙️  General purpose languages:
        <div className="fav-list-tech-badges">
          <TechBadge tech="TypeScript" />
          <TechBadge tech="Rust" />
          <TechBadge tech="Python" />
          <TechBadge tech="Java" />
          <TechBadge tech="Lua" />
          <TechBadge tech="Kotlin" />
        </div>
      </li>
      <li>
        🌐  Webapp techonlogies:
        <div className="fav-list-tech-badges">
          <TechBadge tech="Next.js" />
          <TechBadge tech="Vue.js" />
          <TechBadge tech="Angular" />
        </div>
      </li>
      <li>
        ⚒️  Developer Tools:
        <div className="fav-list-tech-badges">
          <TechBadge tech="neovim" />
        </div>
      </li>
      <li>
        ☁️  Cloud, DevOps and Infrastructure:
        <div className="fav-list-tech-badges">
          <TechBadge tech="Docker" />
          <TechBadge tech="Kubernetes" />
        </div>
      </li>
      <li>
        🖼️  Backend techonlogies/frameworks:
        <div className="fav-list-tech-badges">
          <TechBadge tech="node.js" />
          <TechBadge tech="nest.js" />
          <TechBadge tech="springboot" />
          <TechBadge tech="fastapi" />
        </div>
      </li>
    </ul>
  </div>)
}
export default InterestList;
