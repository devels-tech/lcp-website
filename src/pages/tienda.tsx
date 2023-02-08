import Head from 'next/head'
import Link from 'next/link'

import { useProducts } from '@/lib/hooks/useProducts'
import { Page, ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { Product } from '@/components/common/Product'

const { SEO } = PAGE_INFO

export const TiendaPage: Page = () => {
  const { products } = useProducts()

  return (
    <>
      <div className='min-h-screen w-full text-center pt-36 px-4'>
        {
          products.length !== 0
            ? <>
              <h5 className='text-5xl font-black text-gray-900'>Tienda LCP</h5>

              <ul className='flex flex-wrap w-full h-full max-w-5xl mx-auto'>
                {
                  products.map(product => (
                    <>
                      <li className='max-w-xs w-full mr-6 my-4'>
                        <Product product={product} />
                      </li>
                      <li className='max-w-xs w-full mr-6 my-4'>
                        <Product product={product} />
                      </li>
                    </>
                  ))
                }
              </ul>
            </>
            : <div className='pt-20 text-center'>
              <span className='text-3xl font-black'>Sin Productos</span>
              <br />
              <Link href='/' className='text-lg text-secondary-500 xl:text-xl'>
                Ir al inicio
              </Link>
            </div>
        }
      </div>
    </>
  )
}

TiendaPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - Tienda</title>
      <meta name='description' content='Tienda de La Casa de mi Padre' />
    </Head>

    {page}
  </MainLayout>
)

export default TiendaPage
