import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="kluften">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
