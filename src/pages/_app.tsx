import Head from 'next/head'
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { PAGE_INFO } from '@/config'
import { ReactNode, NextComponentType } from '@/lib/types'
import { useLoadingPage } from '@/lib/hooks/useLoadingPage'

import { LoadingPage } from '@/components/layout/LoadingPage'

import '@/styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.min.css'

const { SEO } = PAGE_INFO

const LcpApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({ Component, pageProps }: AppLayoutProps) => {
  const { isRouteChanging, loadingKey } = useLoadingPage()
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
        <title>{SEO.TITLE}</title>
      </Head>

      <LoadingPage isRouteChanging={isRouteChanging} key={loadingKey} />

      {getLayout(<Component {...pageProps} />)}

      <ToastContainer
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

export default LcpApp
