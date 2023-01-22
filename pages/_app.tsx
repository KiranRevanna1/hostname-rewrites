import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout
      title={pageProps.name}
      description={pageProps.description}
      path="edge-functions/hostname-rewrites"
    >
      <Component {...pageProps} />
    </Layout>
  )
}
