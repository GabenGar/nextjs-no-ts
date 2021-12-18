import '#styles/globals.css'

import { DefaultLayout } from "#components/layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
  return getLayout(
    <Component {...pageProps} />
  )
}

export default MyApp
