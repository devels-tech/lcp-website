import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/common/Button'

import oracionBg from 'public/img/oracionBg.webp'

export const PrayRequest = () => {
  const router = useRouter()

  return (
    <section className='prayRequestWrapper'>
      <Image
        src={oracionBg}
        placeholder='blur'
        className='w-full h-screen object-cover'
        quality={100}
        alt='Peticion de Oracion'
      />

      <div className='absolute top-0 w-full h-full text-center py-4 px-3 flex flex-col justify-center items-center'>
        <div>
          <h5 className='text-4xl font-blck text-white md:text-6xl'>Estamos</h5>
          <span className='text-5xl font-bold text-secondary-500 md:text-6xl mb-12'> Orando por ti</span>
        </div>

        <br />
        <br />

        <div>
          <Button onClick={() => router.push('/contactanos')}>
            Petición de Oración
          </Button>
        </div>

        <br />
        <br />

        <div>
          <blockquote className='text-white font-medium md:mt-12'>
            &quot;Y esta es la confianza que tenemos en él, <br className='tabletmin:hidden block' />
            que si pedimos alguna cosa conforme <br className='lg:hidden' />a su voluntad, él nos oye&quot;.<em className='text-secondary-500'>1Jn. 5:14</em>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
