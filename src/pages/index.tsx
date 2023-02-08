import Head from 'next/head'

import { ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { Slider, WorshipSchedule, Resources, Devotionals, PrayRequest } from '@/components/pages/home'

const { SEO } = PAGE_INFO

export const Home = () => {
  return (
    <>
      <Slider />
      <WorshipSchedule />
      <Resources />
      <Devotionals />
      <PrayRequest />
    </>
  )
}

Home.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE}</title>
      <meta name='description' content={SEO.DESCRIPTION} />
    </Head>

    {page}
  </MainLayout>
)

export default Home
