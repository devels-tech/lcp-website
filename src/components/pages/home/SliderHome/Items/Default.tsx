import Image from 'next/image'

import headerHomeDefault from 'public/img/headerHomeDefault.webp'
import headerHomeMobileDefault from 'public/img/headerHomeMobileDefault.webp'

export const DefaultItem = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={headerHomeDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
        priority
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={headerHomeMobileDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
        priority
      />
    </div>
  </div>
)
