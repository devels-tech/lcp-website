import Head from 'next/head'
import Image from 'next/image'

import { Page, ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import MainLayout from '@/layouts/Main'
import { EmailContact } from '@/components/pages/contactanos/FormContact'

import contactanosBg from 'public/img/contactanosBg.webp'

const { SEO } = PAGE_INFO

export const ContactanosPage: Page = () => {
  return (
    <>
      <div className='min-h-screen-14 w-full'>
        <Image
          src={contactanosBg}
          placeholder='blur'
          quality={100}
          alt='LCP Contactanos'
          className='w-full h-[140vh] object-cover'
        />

        <div className='w-full h-full flex justify-center items-center absolute top-0 text-white pt-20 md:pt-16'>
          <section className='w-4/5 max-w-3xl 3xl:max-w-5xl'>
            <EmailContact />
          </section>
        </div>
      </div>
    </>
  )
}

ContactanosPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - Contáctanos</title>
      <meta name='description' content='Contacta a La Casa de mi Padre' />
    </Head>

    {page}
  </MainLayout>
)

export default ContactanosPage
