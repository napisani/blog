import classNames from 'classnames';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ReactNode } from 'react'
import NavSeparator from './nav-separator'


const SiteNav = () => {
  const { pathname } = useRouter();
  const paths = [
    { path: '/', name: 'Home' },
    { path: '/posts', name: 'Blog' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' },
  ];
  console.log(pathname);
  return (
    <nav className="my-3">
      {paths.map((path, idx) =>
        (<Link key={idx} as={path.path} href={path.path} className={classNames({ 'navlink': true, active: pathname === path.path })} aria-label={path.name}>{path.name}</Link>))
        .reduce((acc, cur) => (acc.length === 0 ? [cur] : [...acc, <NavSeparator key={'sep' + (acc.length + 1)} />, cur]), [])}
    </nav>
  )
}

export default SiteNav 
