import Image from 'next/image'

export const ImagesGrid = ({ src = [], classes = '' }) => (
  <div className={`imagesWrapper ${classes}`}>
    <Image
      src={src[0]}
      placeholder="blur"
      alt="Inicios de La Casa de mi Padre"
      width={550}
      height={350}
      className='w-full h-full object-cover'
    />

    <div className='flex mt-2'>
      <span className='type-articles-img-wrapper'>
        <Image
          src={src[1]}
          placeholder="blur"
          alt="Inicios de La Casa de mi Padre"
          width={550}
          height={350}
        />
      </span>

      <span className='type-articles-img-wrapper'>
        <Image
          src={src[2]}
          placeholder="blur"
          alt="Inicios de La Casa de mi Padre"
          width={550}
          height={350}
        />
      </span>
    </div>
  </div>
)
