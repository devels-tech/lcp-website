import { ReactNode } from 'react'
import Head from 'next/head'

import MainLayout from '@/layouts/Main'
import { PAGE_INFO } from '@/config'
import { Page } from '@/lib/types'

import { FormDyc } from '@/components/pages/eventos/dyc/form'
import { DycEventHeader } from '@/components/pages/eventos/dyc/header'

const { SEO } = PAGE_INFO

export const DycPage: Page = () => {
  return (
    <div className='max-w-xl mx-auto w-full py-10 min-h-screen h-full flex flex-col justify-center items-center text-center'>
      <DycEventHeader />
      <FormDyc />
    </div>
  )
}

DycPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - DyC</title>
      <meta name='description' content='Congreso de danza de La Casa de mi Padre' />
    </Head>

    {page}
  </MainLayout>
)

export default DycPage
