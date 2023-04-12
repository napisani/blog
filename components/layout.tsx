import Head from 'next/head'
import Container from './container'
import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <main>
          <Head>
            <title>Nick&apos;s Blog</title>
          </Head>
          <Header></Header>
          <Container>
            {children}
          </Container>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
