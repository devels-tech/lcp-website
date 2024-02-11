import Image from 'next/image'

import banner1 from 'public/img/banner/banner1.jpg'
import banner2 from 'public/img/banner/banner2.jpg'
import banner3 from 'public/img/banner/banner3.jpg'
import banner4 from 'public/img/banner/banner4.jpg'

export const LocalEvent = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={banner1}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
        priority
      />
    </div>

    <div className='hidden sm:block'>
      <Image
        src={banner2}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
        priority
      />
    </div>

    <div className='hidden sm:block'>
      <Image
        src={banner3}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
        priority
      />
    </div>

    <div className='hidden sm:block'>
      <Image
        src={banner4}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
        priority
      />
    </div>
  </div>
)
