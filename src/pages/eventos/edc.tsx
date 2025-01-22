import Head from 'next/head'

import { Page, ReactNode } from '@/lib/types'

import MainLayout from '@/layouts/Main'
import { PAGE_INFO } from '@/config'
import { FormEDCReservations } from '@/components/pages/eventos/EDC/FormReservations'

export const EDCPage: Page = () => {
  return (
    <>
      <Head>
        <title>{PAGE_INFO.SEO.TITLE} - EDC</title>
      </Head>

      <div className='min-h-screen-14 max-w-7xl mx-auto w-full flex flex-col justify-center items-center px-4 gap-5'>
        <div className='md:mt-20'>
          <img
            src='/img/local-events/edc.webp'
            className='rounded-md max-w-lg w-full'
            alt='Escuela de Crecimiento'
          />
        </div>

        <FormEDCReservations />
      </div>
    </>
  )
}

EDCPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default EDCPage
