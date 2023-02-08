import Head from 'next/head'
import Link from 'next/link'

export const DisabledReservations = () => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>

    <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
      <span className='text-4xl md:text-7xl font-black text-gray-900 uppercase'>Reservaciones <br /> Deshabilitadas</span>
      <br />
      <Link href='/' className='text-lg text-secondary-500 xl:text-xl underline underline-offset-1'>
        Ir al inicio
      </Link>
    </div>
  </>
)
