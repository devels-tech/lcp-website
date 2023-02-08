import Image from 'next/image'

import oldLogo from 'public/img/logoOld 1.webp'
import currentLogo from 'public/img/current-logo.webp'

export const Logos = () => (
  <article className='w-full my-16 px-4'>
    <h5 className='text-center text-secondary-500 font-black text-5xl' style={{ letterSpacing: '-0.1rem' }}>Nuestro Logo</h5>
    <p className='text-center text-primary-500 text-4xl font-medium my-4' style={{ letterSpacing: '0.10rem' }}>Ahora tenemos una nueva imagen, pero somos la misma iglesia.</p>
    <div className='flex flex-col justify-center items-center md:flex-row'>
      <figure className='mb-8 md:mb-0 md:mr-16'>
        <Image
          src={oldLogo}
          alt="Logo anterior."
          placeholder="blur"
          width={450}
          height={450}
        />
        <figcaption className='text-center font-semibold text-primary-500 text-3xl'>2005 - 2020</figcaption>
      </figure>

      <figure>
        <Image
          src={currentLogo}
          alt="Logo actual."
          placeholder="blur"
          width={387}
          height={450}
          className='actualLogo'
        />
        <figcaption className='mt-2 text-center font-semibold text-primary-500 text-3xl'>2021</figcaption>
      </figure>
    </div>
  </article>
)
