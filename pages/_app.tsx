import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import { wrapper } from "../redux/store"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default wrapper.withRedux(MyApp)
