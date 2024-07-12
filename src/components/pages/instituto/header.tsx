import Image from 'next/image'
import imageSrc from 'public/img/local-events/bible-institute.jpg'

export const IntituteBibleHeader = () => {
  return (
    <div className='-mb-20'>
      <Image
        alt='Instituto Bíblico - LCP'
        src={imageSrc}
        className='w-full object-cover rounded-lg h-96'
      />
    </div>
  )
}