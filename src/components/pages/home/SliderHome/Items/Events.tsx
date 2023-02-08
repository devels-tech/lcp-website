import Image from 'next/image'

export const Events = ({ events }: { events: { mobile: string[], desktop: string[] } }) => (
  <div className='h-full'>
    {
      events.desktop.map(eventImgSrc => (
        <div key={eventImgSrc} className='hidden sm:block'>
          <Image
            src={eventImgSrc}
            alt='La Casa de mi Padre'
            className='w-full h-full object-cover'
            quality={100}
          />
        </div>
      ))
    }
    {
      events.mobile.map(eventImgSrc => (
        <div key={eventImgSrc} className='sm:hidden'>
          <Image
            src={eventImgSrc}
            alt='La Casa de mi Padre'
            className='w-full h-full object-cover'
            quality={100}
          />
        </div>
      ))
    }
  </div>
)
