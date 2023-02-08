import Image from 'next/image'
import { IBanner } from '@/lib/types/banner'

export const Banner = ({ title, image }: IBanner) => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      <Image
        src={image.desktop.url}
        alt={title}
        width={image.desktop.width}
        height={image.desktop.height}
        className='w-full h-full object-cover full-image'
        quality={100}
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={image.mobile.url}
        alt={title}
        height={image.mobile.height}
        width={image.mobile.width}
        className='w-full h-full object-cover full-image'
        quality={100}
      />
    </div>
  </div>
)
