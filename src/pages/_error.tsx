import Image from 'next/image'
import { NextPage } from 'next'

import Head from 'next/head'

type Props = {
  statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error Inesperado</title>
        <meta name='googlebot' content='noindex' />
      </Head>

      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <Image
          src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1610722602/next.egghead.io/pages/broken-eggo.png"
          width={691}
          height={493}
          alt='Hubo un Error!'
        />

        <div className="flex flex-col max-w-md">
          <h1 className="font-extrabold text-9xl">
            {statusCode ? `Hubo un error inesperado en el servidor: ${statusCode}` : 'Hubo un error inesperado en el cliente!'}
          </h1>

          <p>
            An error has occurred and it is entirely our fault. Can you please
            click the feedback above and give us any details about what you were
            trying to view. Sorry for the hassle :/
          </p>
        </div>
      </div>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
