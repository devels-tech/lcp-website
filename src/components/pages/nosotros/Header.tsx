import { ButtonScroll } from '@/components/common/ButtonScroll'
import Image from 'next/image'

import headerBgImg from 'public/img/nosotrosBg.webp'

export const Header = () => (
  <section className='w-full h-screen flex justify-center items-center relative' style={{ backgroundColor: '#dddddd' }}>
    <ButtonScroll />
    <Image
      src={headerBgImg}
      className='headerPage__nosotros--BgImg w-full h-full object-cover'
      placeholder='blur'
      quality={100}
      alt='La Casa de mi Padre - Nosotros'
    />

    <div className='absolute w-full h-full flex justify-center items-center px-4'>
      <div className='text-8xl relative mt-8 text-white text-center mx-auto md:text-12xl' style={{ maxWidth: '800px' }}>
        <h4 className='text-5xl font-black uppercase text-secondary-500'>¿Quiénes Somos?</h4>
        <p className='font-bold mt-4 text-base'>
          La Iglesia Cristiana La Casa de mi Padre, en Caracas Venezuela; nació “en el corazón Dios”. <br className='max-md:hidden' />
          Luego la visión fue dada a nuestro Pastor Frankie Tovar un jueves 9 de diciembre de 2.004. <br className='max-md:hidden' />
          Como él mismo lo dice: “Ese día supe, de manera evidente y firme <br className='max-md:hidden' />
          que Dios me estaba llamando a fundar una nueva Iglesia”.
        </p>
      </div>
    </div>
  </section>
)
