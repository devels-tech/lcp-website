import Head from 'next/head'
// import Link from 'next/link'

// import { useEvents } from '@/lib/hooks/useEvents'
import { Event } from '@/components/pages/eventos/Event'
import { Page, ReactNode } from '@/lib/types'
import MainLayout from '@/layouts/Main'
import { PAGE_INFO } from '@/config'
import Link from 'next/link'
// import { Event } from '@/components/pages/eventos/Event'
// import audicionesSrc from 'public/img/local-events/audiciones.png'
import bautizosImgSrc from 'public/img/local-events/bautizoBg.webp'
// import edcImgSrc from 'public/img/local-events/edc.webp'
// import ebdvImgSrc from 'public/img/local-events/ebdv.jpeg'
import dycImage from 'public/img/local-events/dyc.jpg'
// import { Event } from '@/components/pages/eventos/Event'

const { SEO } = PAGE_INFO

const EmptyEvents = () => {
  return (
    <div className='pt-20 text-center'>
      <span className='text-4xl md:text-7xl font-black text-gray-900'>Sin Eventos</span>

      <br />

      <Link href='/' className='text-lg text-secondary-500 xl:text-xl underline underline-offset-1'>
        Ir al inicio
      </Link>
    </div>
  )
}

export const EventosPage: Page = () => {
  // const { events } = useEvents()

  return (
    <>
      <Head>
        <title>{SEO.TITLE} - Eventos</title>
        <meta name='description' content='Eventos de La Casa de mi Padre' />
      </Head>

      <div className='min-h-screen md:min-h-0 w-full pb-4 px-4'>
        <div className='w-full h-full flex flex-col justify-center items-center pt-32 md:pt-32'>
          {/* <EmptyEvents /> */}

          <span className='text-4xl md:text-7xl font-black text-gray-900'>Eventos</span>
          <br />

          <ul className='flex flex-wrap justify-center items-center max-w-5xl gap-6'>
            {/* <li>
              <Event
                imgSrc={dycImage}
                title='Congreso de danza'
                redirectTo='/eventos/dyc'
                redirectLabel='Registrarse'
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

            {/* <li>
              <Event
                localImage={ebdvImgSrc}
                title='Inscripciones EBDV'
                redirectTo='https://forms.gle/3uwbrvjrWhHseT9h8'
                redirectLabel='Inscripciones EBDV'
              />
            </li>

            <li>
              <Event
                localImage={edcImgSrc}
                title='Inscripciones EDC'
                redirectTo='/eventos/edc'
                redirectLabel='Inscripciones EDC'
              />
            </li>

 */}

            {/* <li>
              <Event
                imgSrc={audicionesSrc}
                title='Alabanza'
                redirectTo='/eventos/alabanza-casting'
                redirectLabel='Ministerio de Alabanza - Audiciones'
              />
            </li> */}
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
