import { useRef, useState } from 'react'

import { IconYoutube, IconBurger } from '@/components/common/Icons'
import { Drawer } from '@/components/layout/Drawer'

import { Logo } from '@/components/common/Logo'
import Link from 'next/link'

export const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const { current: routes } = useRef({
    leftItems: [
      { to: '/', label: 'Inicio' },
      { to: '/nosotros', label: 'Nosotros' },
      { to: '/devocionales', label: 'Devocionales' },
      { to: '/eventos/alabanza-casting', label: 'Audiciones' }
    ],
    centerItem: <Logo />,
    rightItems: [
      { to: '/recursos/espiritu', label: 'Recursos' },
      { to: '/contactanos', label: 'Contáctanos' },
      { to: '/eventos', label: 'Eventos' }
    ]
  })

  return (
    <>
      <header className='w-full h-16 lg:h-20 z-50 fixed top-0 bg-transparent'>
        <div className='bg-[rgba(255,255,255,.8)]'>
          <div className='lg:hidden flex justify-between items-center w-full px-6 h-16 lg:h-20'>
            <div className='transform translate-y-10'>{routes.centerItem}</div>

            <div>
              <IconBurger classes='cursor-pointer' onClick={() => setShowDrawer(true)} />
            </div>
          </div>

          <div className='hidden lg:flex justify-center items-center w-full px-6 h-16 lg:h-20'>
            <ul className='w-full flex justify-end items-center'>
              {
                routes.leftItems.map(route => {
                  if (route.label === 'Tienda') {
                    return (
                      <li key={route.label} className='tooltip__wrapper'>
                        {route.label}
                        <span className='tooltip__content'>¡Próximamente!</span>
                      </li>
                    )
                  } else {
                    return (
                      <li key={route.label} className='mx-5 3xl:mx-7'>
                        <Link href={route.to} className='font-bold text-primary-500 select-none hover:text-secondary-500'>
                          {route.label}
                        </Link>
                      </li>
                    )
                  }
                })
              }
            </ul>

            <div className='transform -translate-y-3'>
              <div className='logo__container'>
                {routes.centerItem}
              </div>
            </div>

            <ul className='w-full flex justify-start items-center'>
              {
                routes.rightItems.map(route => {
                  if (route.label === 'Tienda') {
                    return (
                      <li key={route.label} className='tooltip__wrapper'>
                        {route.label}
                        <span className='tooltip__content'>¡Próximamente!</span>
                      </li>
                    )
                  } else {
                    return (
                      <li key={route.label} className='mx-5 3xl:mx-7'>
                        <Link href={route.to} className='font-bold text-primary-500 select-none hover:text-secondary-500'>
                          {route.label}
                        </Link>
                      </li>
                    )
                  }
                })
              }

              <li className='mx-5 3xl:mx-7'>
                <a href='https://www.youtube.com/channel/UCtttlnW0skxAug4MOo7CaeQ' target="_blank" rel="noopener noreferrer">
                  <IconYoutube classes='fill-primary-500 hover:fill-secondary-500' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Drawer
        isOpen={showDrawer}
        closeDrawer={() => setShowDrawer(false)}
      />
    </>
  )
}
