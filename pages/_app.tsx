import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navigation/>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
