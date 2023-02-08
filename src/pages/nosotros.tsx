import Head from 'next/head'

import { Page, ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { Header, Logos, AboutUs, OurFivePurposes, MisionAndVision, OurPastor, Video16Anniversary } from '@/components/pages/nosotros'

const { SEO } = PAGE_INFO

export const NosotrosPage: Page = () => {
  return (
    <>
      <Header />
      <OurPastor />
      <Video16Anniversary />
      <AboutUs />
      <Logos />
      <MisionAndVision />
      <OurFivePurposes />
    </>
  )
}

NosotrosPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - Nosotros</title>
      <meta name='description' content='Conoce a La Casa de mi Padre' />
    </Head>

    {page}
  </MainLayout>
)

export default NosotrosPage
