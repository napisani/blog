import Logo from './logo'
import SiteNav from './site-nav'

const Header = () => {
  return (
    <header>
      <a className="title" href="/">
        <h1>
          <span className="font-normal">
            <div className="inline-block mr-4">
              <Logo/>
            </div>
            Nick Pisani</span>
        </h1>
      </a>
      <SiteNav></SiteNav>
    </header>
  )
}

export default Header
