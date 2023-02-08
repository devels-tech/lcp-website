import Head from 'next/head'
import Image from 'next/image'

import MainLayout from '@/layouts/Main'
import { useReservations } from '@/lib/hooks/useReservations'
import { Page, ReactNode } from '@/lib/types'
import { PAGE_INFO } from '@/config'

import { Spinner } from '@/components/common/Loaders/Spinner'
import { NewFormReservation } from '@/components/pages/reservaciones/FormReservation'
import { DisabledReservations } from '@/components/pages/reservaciones/DisabledReservations'
import { FullReservations } from '@/components/pages/reservaciones/FullReservations'

import reservacionesBgDesktop from 'public/img/reservacionesBg-desktop.webp'
import reservacionesBgMobile from 'public/img/reservacionesBg-mobile.webp'

const { SEO } = PAGE_INFO

export const ReservacionesPage: Page = () => {
  const { reservations, reservationsIsLoading } = useReservations()

  if (!reservations.status && !reservationsIsLoading) return <DisabledReservations />

  if (
    !reservationsIsLoading &&
    reservations.FIRST_WORSHIP.total >= reservations.MAX_RESERVATIONS &&
    reservations.SECOND_WORSHIP.total >= reservations.MAX_RESERVATIONS
  ) return <FullReservations />

  return (
    <>
      <div className='min-h-screen-14 w-full flex flex-col sm:flex-row justify-center items-center relative'>
        <div className='max-w-4xl w-full px-4 mx-auto hidden sm:block'>
          <Image
            src={reservacionesBgDesktop}
            placeholder='blur'
            objectFit='cover'
            quality={100}
            priority
            alt='Reservaciones LCP'
          />
        </div>
        <div className='sm:hidden w-3/4 max-w-[280px] h-fit -z-10 absolute inset-0 m-auto transform -rotate-180'>
          <Image
            src={reservacionesBgMobile}
            alt='La Casa de mi Padre'
            placeholder='blur'
            objectFit="cover"
            priority
            quality={100}
          />
        </div>

        <div className='w-full h-full flex justify-center items-center absolute text-white px-4 pt-20 md:pt-16 gap-x-16'>
          {
            reservationsIsLoading
              ? <Spinner />
              : <NewFormReservation reservations={reservations} />
          }
        </div>
      </div>
    </>
  )
}

ReservacionesPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    <Head>
      <title>{SEO.TITLE} - Reservaciones</title>
      <meta name='description' content='Reserva en los servicios de La Casa de mi Padre' />
    </Head>

    {page}
  </MainLayout>
)

export default ReservacionesPage
