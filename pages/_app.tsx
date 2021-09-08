import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log('debug ~ file: _app.js ~ line 4 ~ MyApp ~ pageProps', pageProps);
  return <Component {...pageProps} />
}

export default MyApp
