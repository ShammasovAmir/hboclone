import HBOProvider from '../components/HBOProvider'
import '../styles/styles.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <HBOProvider>
      <Component {...pageProps} />
    </HBOProvider>
  )
}
