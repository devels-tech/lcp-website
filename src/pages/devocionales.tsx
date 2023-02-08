import Head from 'next/head'
import Link from 'next/link'
// import { useEffect, useState } from 'react'

// import { Spinner } from '@/components/common/Loaders'
// import { IconPDF } from '@/components/common/Icons'

import { Page, ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'

const { SEO } = PAGE_INFO

const DevocionalesPage: Page = () => {
  // const [devotionals, setDevotionals] = useState([])
  // const [loading, setLoading] = useState(false)

  // const getFiles = async () => {
  //   const res = await fetch('/api/devotionals')
  //   const { data } = await res.json()

  //   setDevotionals(data)
  // }

  // useEffect(() => {
  //   setLoading(true)
  //   getFiles().then(() => setLoading(false))
  // }, [])

  // if (loading) {
  //   return (
  //     <div className='w-full h-[80vh] flex justify-center items-center'>
  //       <Spinner />
  //     </div>
  //   )
  // }

  // if (devotionals.length === 0 && !loading) {
  //   return (
  //     <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
  //       <p className='text-5xl font-black'>Sin Devocionales</p>

  //       <Link href='/'>
  //         <a className='text-lg text-secondary-500 xl:text-xl'>Ir al inicio</a>
  //       </Link>
  //     </div>
  //   )
  // }

  return (
  // <div className='w-full h-full mt-36 text-center px-4'>
  //   <h3 className='font-black text-5xl text-secondary-500'>Devocionales</h3>
  //   <span>Descarga los devocionales de La Casa de mi Padre haciendo click sobre ellas</span>

  //   <ul className='grid grid-cols-3 gap-x-10 grid-flow-row max-w-7xl mx-auto mt-4'>
  //     {
  //       devotionals.map((file, idx) => (
  //         <li key={idx}>
  //           <a href={file.url} download className='h-24 w-full bg-[#F7F7F7] rounded shadow-sm flex items-center justify-start px-4 hover:bg-secondary-500 hover:bg-opacity-40 border-2 border-secondary-500 border-opacity-25'>
  //             <IconPDF classes='h-7 w-7 mr-2' />
  //             <h1 className='text-lg text-left'>{file.title}</h1>
  //           </a>
  //         </li>
  //       ))
  //     }
  //   </ul>
  // </div>

    <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
      <p className='text-5xl font-black'>Sin Devocionales</p>

      <Link href='/' className='text-lg text-secondary-500 xl:text-xl'>
        Ir al inicio
      </Link>
    </div>
  )
}

DevocionalesPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - Devocionales</title>
      <meta name='description' content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.' />
    </Head>

    {page}
  </MainLayout>
)

export default DevocionalesPage
