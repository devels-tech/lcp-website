import Image from 'next/image'

import { NavLink } from './NavLink'
import { ButtonScroll } from '@/components/common/ButtonScroll'

type HeaderPageProps = {
  title: string
  img: any
}

export const HeaderPage = ({ title, img }: HeaderPageProps) => {
  return (
    <section className='relative h-screen w-full'>
      <ButtonScroll />

      <Image
        src={img}
        placeholder='blur'
        quality={100}
        alt={title}
        className='w-full h-full object-cover'
      />

      <div className='absolute w-full h-full flex justify-center items-center'>
        <div className='headerPage__titleContent'>
          <h4>{title}</h4>
        </div>
      </div>

      <div className='absolute bottom-8 w-full flex justify-center items-center'>
        <ul className='flex justify-center items-center'>
          <li>
            <NavLink href='/espiritu' label='Espíritu' />
          </li>

          <li>
            <NavLink classes='mx-4' href='/alma' label='Alma' />
          </li>

          <li>
            <NavLink href='/cuerpo' label='Cuerpo' />
          </li>
        </ul>
      </div>
    </section>
  )
}
