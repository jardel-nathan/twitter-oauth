import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';



export default  function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}