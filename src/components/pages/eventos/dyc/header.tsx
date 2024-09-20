import Image from 'next/image'
import imageSrc from 'public/img/local-events/dyc.jpg'

export const DycEventHeader = () => {
  return (
    <div className='mt-20 w-full px-4'>
      <Image
        alt='Instituto Bíblico - LCP'
        src={imageSrc}
        className='w-full object-cover rounded-lg h-52 md:h-96'
      />
    </div>
  )
}
