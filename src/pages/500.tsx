import Head from 'next/head'
import Link from 'next/link'

import { PAGE_INFO } from '@/config'

const { SEO } = PAGE_INFO

export default function Custom500 () {
  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Server Error</title>
        <meta name='googlebot' content='noindex' />
      </Head>

      <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
        <div>
          <span className='text-4xl font-black xl:text-5xl'>Hubo un error <br /> inesperado</span>
        </div>

        <br />

        <div>
          <Link href='/'>
            <a className='text-lg text-secondary-500 xl:text-xl'>Ir al inicio</a>
          </Link>
        </div>
      </div>
    </>
  )
}
