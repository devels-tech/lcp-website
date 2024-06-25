import Image from 'next/image'

import headerHomeDefault from 'public/img/banner/default.jpeg'

export const DefaultItem = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={headerHomeDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover 2xl:-mt-36'
        quality={100}
        priority
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={headerHomeDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
        priority
      />
    </div>
  </div>
)
