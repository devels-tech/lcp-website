import Head from 'next/head'

import { PAGE_INFO } from '@/config'

import { FormCasting } from '@/components/pages/eventos/alabanzas/FormCasting'

const { SEO } = PAGE_INFO

export default function AlabanzasCastingPage () {
  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Bautizos</title>
      </Head>

      <div className='w-full py-10 min-h-screen flex flex-col justify-center items-center text-center'>
        <FormCasting />
      </div>
    </>
  )
}
