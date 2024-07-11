import Head from 'next/head'

import { Page, ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { IntituteBibleHeader } from '@/components/pages/instituto/header'
import { IntituteBibleFrom } from '@/components/pages/instituto/form'
import { IntituteBibleInfo } from '@/components/pages/instituto/info'

const { SEO } = PAGE_INFO

export const BibleInstitute: Page = () => {
  return (
    <div className='max-w-7xl w-full mx-auto mt-36 px-4 pb-10'>
      <IntituteBibleHeader />

      <div className='w-full h-full flex flex-col-reverse lg:flex-row justify-between items-start gap-4 relative'>
        <IntituteBibleInfo />
        <IntituteBibleFrom />
      </div>
    </div>
  )
}

BibleInstitute.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - Instituto Bíblico</title>
      <meta name='description' content='Instituto bìblico de La Casa de mi Padre' />
    </Head>

    {page}
  </MainLayout>
)

export default BibleInstitute
