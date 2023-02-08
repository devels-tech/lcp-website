import { useRef } from 'react'
import Image from 'next/image'

import { IconFacebook, IconInstagram, IconYoutube } from '@/components/common/Icons'

import logoImg from 'public/img/logo.webp'

export const Footer = () => {
  const { current: rrss } = useRef([
    {
      link: 'https://www.youtube.com/channel/UCtttlnW0skxAug4MOo7CaeQ',
      icon: <IconYoutube classes='fill-white hover:fill-secondary-500' />
    },
    {
      link: 'https://www.instagram.com/lcpcaracas',
      icon: <IconInstagram classes='fill-white hover:fill-secondary-500' />
    },
    {
      link: 'https://www.facebook.com/lacasademipadrevenezuela',
      icon: <IconFacebook classes='fill-white hover:fill-secondary-500' />
    }
  ])

  return (
    <footer className='w-full h-full text-white py-10 bg-gradient-to-t from-primary-400 to-primary-500'>
      <div className='flex flex-col justify-between items-center px-4 relative md:flex-row'>
        <section className='font-bold'>LCP Caracas - 2021 ©</section>

        <section className='md:absolute footerLogo'>
          <div className='my-6' style={{ width: '4.5rem' }}>
            <Image src={logoImg} placeholder='blur' alt='La Casa de mi Padre' />
          </div>
        </section>

        <section className='flex justify-center items-center font-bold'>
          <p className='mr-4'>Síguenos En</p>

          {rrss.map((social) => (
            <div className='footer__socialMedia mx-4' key={social.link}>
              <a
                href={social.link}
                target='_blank'
                rel='noreferrer external author'
              >
                {social.icon}
              </a>
            </div>
          ))}
        </section>
      </div>
    </footer>
  )
}
