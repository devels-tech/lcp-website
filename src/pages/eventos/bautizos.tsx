import Head from 'next/head'
import { PAGE_INFO } from '@/config'

import { FormBautizos } from '@/components/pages/eventos/bautizos/FormBautizos'

const { SEO } = PAGE_INFO

export default function BautizosPage () {
  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Bautizos</title>
      </Head>

      <div className='w-full py-10 min-h-screen flex flex-col justify-center items-center text-center'>
        <FormBautizos />
      </div>
    </>
  )
}
