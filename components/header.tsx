import Link from 'next/link'
import Logo from './logo'
import SiteNav from './site-nav'

const Header = () => {
  return (
    <header>
      <Link
        as='/'
        href="/"
        className="title"
      >
        <h1 className="title">
          <span className="font-normal">
            <div className="inline-block mr-4">
              <Logo />
            </div>
            Nick Pisani
          </span>
        </h1>
      </Link>
      <SiteNav></SiteNav>
    </header>
  )
}

export default Header
