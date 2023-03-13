import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './footer'
import Navigation from './navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navigation/>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
