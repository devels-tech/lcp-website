import Head from 'next/head'
// import Link from 'next/link'

// import { useEvents } from '@/lib/hooks/useEvents'
import { Page, ReactNode } from '@/lib/types'
import MainLayout from '@/layouts/Main'
import { PAGE_INFO } from '@/config'
import { Event } from '@/components/pages/eventos/Event'
// import { Event } from '@/components/pages/eventos/Event'
import bautizosImgSrc from 'public/img/local-events/bautizoBg.webp'
import edcImgSrc from 'public/img/local-events/edc.webp'
// import { Event } from '@/components/pages/eventos/Event'

const { SEO } = PAGE_INFO

export const EventosPage: Page = () => {
  // const { events } = useEvents()

  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Eventos</title>
        <meta name='description' content='Eventos de La Casa de mi Padre' />
      </Head>

      <div className='h-screen-15 w-full'>
        <div className='w-full h-full flex flex-col justify-center items-center pt-32'>
          <span className='text-4xl md:text-7xl font-black text-gray-900'>Eventos</span>
          <br />

          <ul className='flex flex-wrap justify-center items-center max-w-5xl gap-x-2'>
            {/* <li>
              <Event
                localImage={edcImgSrc}
                title='Inscripciones EDC'
                redirectTo='/eventos/edc'
                redirectLabel='Inscripciones EDC'
              />
            </li> */}

            <li>
              <Event
                imgSrc={bautizosImgSrc}
                title='Bautizos'
                redirectTo='/eventos/bautizos'
                redirectLabel='Inscripción de Bautizos'
              />
            </li>
          </ul>

          {/* <Link href='/'>
            <a className='text-lg text-secondary-500 xl:text-xl underline underline-offset-1'>Ir al inicio</a>
          </Link> */}
          {/* <span className='text-3xl md:text-5xl font-black text-gray-900'>Eventos</span>
          <br /> */}

          {/* <ul className='flex flex-wrap justify-center items-center max-w-5xl mx-auto gap-x-2'> */}

          {/* </ul> */}

          {/* {
            events.length !== 0
              ? <>
                <span className='text-3xl md:text-5xl font-black text-gray-900'>Eventos</span>
                <br />

                <ul className='flex flex-wrap justify-center items-center max-w-5xl gap-x-2'>
                  {
                    events.map(event => (
                      <li key={event.id}>
                        <Event
                          key={event.title}
                          imgSrc={event.imgSrc}
                          title={event.title}
                          description={event.description}
                          redirectTo={event.redirectTo}
                          redirectLabel={event.redirectLabel}
                          date={event.date}
                          schedule={event.schedule}
                        />
                      </li>
                    ))
                  }
                </ul>
              </>
              : <div className='pt-20 text-center'>
                <span className='text-4xl md:text-7xl font-black text-gray-900'>Sin Eventos</span>
                <br />
                <Link href='/'>
                  <a className='text-lg text-secondary-500 xl:text-xl underline underline-offset-1'>Ir al inicio</a>
                </Link>
              </div>
          } */}
        </div>
      </div>
    </>
  )
}

EventosPage.getLayout = (page: ReactNode) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default EventosPage
