import { AppProps } from 'next/app'
import '../styles/index.css'
import "../styles/syntax-hl.css"
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
