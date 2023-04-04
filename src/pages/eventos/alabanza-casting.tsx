import Head from 'next/head'

import { PAGE_INFO } from '@/config'

import { FormCasting } from '@/components/pages/eventos/alabanzas/FormCasting'
import MainLayout from '@/layouts/Main'
import { ReactNode } from 'react'

const { SEO } = PAGE_INFO

const AlabanzasCastingPage = () => {
  return (
    <div className='w-full max-w-6xl m-auto pb-10 pt-28 px-6 min-h-screen flex flex-col lg:flex-row justify-center items-center text-center'>
      <div
        className='hidden lg:block h-screen bg-no-repeat lg:h-screen rounded-lg w-full max-w-4xl mr-0 lg:mr-4 mb-8 lg:mb-0'
        style={{
          backgroundImage: "url('/img/casting-bg.jpg')",
          backgroundPositionX: '26%',
          backgroundPositionY: 'top'
        }}
      >
        {/* <img
          src='/img/casting-bg.jpg'
          alt='Casting Ministerio de Alabanza'
          width={1500}
          height={1100}
          className='rounded-lg w-full max-w-4xl mr-0 lg:mr-4 mb-8 lg:mb-0'
        /> */}
      </div>

      <div className='lg:hidden'>
        <img
          src='/img/casting-bg.jpg'
          alt='Casting Ministerio de Alabanza'
          width={1500}
          height={1100}
          className='rounded-lg w-full max-w-4xl mr-0 lg:mr-4 mb-8 lg:mb-0'
        />
      </div>
      <FormCasting />
    </div>
  )
}

AlabanzasCastingPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - Bautizos</title>
    </Head>

    {page}
  </MainLayout>
)

export default AlabanzasCastingPage
