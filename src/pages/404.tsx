import Head from 'next/head'
import Link from 'next/link'

import { PAGE_INFO } from '@/config'

const { SEO } = PAGE_INFO

export default function Custom404 () {
  return (
    <>
      <Head>
        <title>{SEO.TITLE} - 404</title>
        <meta name='googlebot' content='noindex' />
      </Head>

      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div>
          <span className='text-4xl font-black xl:text-5xl'>Pagina no existente</span>
        </div>

        <br />

        <div>
          <Link href='/' className='text-lg text-secondary-500 xl:text-xl'>
            Ir al inicio
          </Link>
        </div>
      </div>
    </>
  )
}
