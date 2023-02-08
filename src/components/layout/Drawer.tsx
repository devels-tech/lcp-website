import { useRef } from 'react'
import Image from 'next/image'

import { IconCancel } from '@/components/common/Icons'
import LogoImg from 'public/img/logo.webp'
import Link from 'next/link'

export const Drawer = ({ isOpen, closeDrawer }: { isOpen: boolean, closeDrawer: () => void }) => {
  const { current: routesMobile } = useRef([
    { to: '/', label: 'Inicio' },
    { to: '/nosotros', label: 'Nosotros' },
    // { to: '/reservaciones', label: 'Reservaciones' },
    { to: '/devocionales', label: 'Devocionales' },
    { to: '/recursos/espiritu', label: 'Recursos' },
    { to: '/eventos', label: 'Eventos' },
    { to: '/contactanos', label: 'Contáctanos' },
    { to: 'https://www.youtube.com/channel/UCtttlnW0skxAug4MOo7CaeQ', label: 'Canal de Youtube' }
  ])

  return (
    <section className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className='w-full h-screen bg-primary-500 flex flex-col justify-center items-center fixed top-0 z-60 py-12 px-4'>
        <button className='flex justify-center items-center absolute top-8 right-8'>
          <IconCancel onClick={closeDrawer} />
        </button>

        <div className='w-20'>
          <Image
            src={LogoImg}
            alt='La Casa de mi Padre'
            placeholder='blur'
          />
        </div>

        <nav>
          <ul className='text-center overflow-y-scroll h-screen-8 m-auto'>
            {
              routesMobile.map(route =>
                <li key={route.label} className='mx-5 my-6 3xl:mx-7 font-extralight border border-solid border-secondary-500 rounded-2xl py-2 px-10 text-sm text-white'>
                  <Link href={route.to} onClick={closeDrawer}>
                    {route.label}
                  </Link>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    </section>
  )
}
