import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Header from './../components/header/Header'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
