import Image from 'next/image'

import Img1 from 'public/img/about-us/vision-mision1.webp'
import Img2 from 'public/img/about-us/vision-mision2.webp'
import Img3 from 'public/img/about-us/vision-mision3.webp'
import Img4 from 'public/img/about-us/vision-mision4.webp'

export const MisionAndVision = () => (
  <section className='w-full py-16 overflow-x-hidden' style={{ background: 'linear-gradient(0deg, rgba(52,109,191, .9) 0%, rgba(30, 71, 141, 1) 100%)' }}>
    <div className='text-white w-full flex flex-col justify-evenly px-4 md:flex-row'>
      <div className='text-center mb-8 md:mb-0' style={{ minWidth: '300px', maxWidth: '500px' }}>
        <h5 className='text-5xl font-black' style={{ letterSpacing: '-0.1rem' }}>Misión</h5> <br /> <br />
        <p className='text-xl font-bold'>
          Predicar el evangelio de nuestro Señor Jesucristo y establecer iglesias hermanas en el territorio nacional.
          Para que muchos acepten a Jesús  como su Salvador y vivan enmarcados en Su propósito.
        </p>
      </div>

      <div className='text-center mb-8 md:mb-0' style={{ minWidth: '300px', maxWidth: '500px' }}>
        <h5 className='text-5xl font-black' style={{ letterSpacing: '-0.1rem' }}>Visión</h5> <br /> <br />
        <p className='text-xl font-bold'>
          Ser lo que Señor ha dicho en su Palabra que es una Iglesia. Y que este
          modelo se replique a nivel nacional en cada iglesia que fundemos o
          adoptemos.
        </p>
      </div>
    </div>

    <div className='imagesGrid'>
      <Image
        src={Img1}
        alt="Mision y Vision de La Casa de mi Padre"
        placeholder="blur"
        width={526}
        height={382}
      />
      <Image
        src={Img2}
        alt="Mision y Vision de La Casa de mi Padre"
        placeholder="blur"
        width={526}
        height={382}
      />
      <Image
        src={Img3}
        alt="Mision y Vision de La Casa de mi Padre"
        placeholder="blur"
        width={526}
        height={382}
      />
      <Image
        src={Img4}
        alt="Mision y Vision de La Casa de mi Padre"
        placeholder="blur"
        width={526}
        height={382}
      />
    </div>
  </section>
)
