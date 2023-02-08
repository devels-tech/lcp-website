import Image from 'next/image'

import ImgBg from 'public/img/about-us/pastor-bg.webp'
import pastorFrankie from 'public/img/about-us/pastor-frankie2.webp'

export const OurPastor = () => (
  <section className='relative w-full min-h-screen-10 md:min-h-screen'>
    <Image
      src={ImgBg}
      placeholder='blur'
      className='w-full h-screen object-cover'
      quality={100}
      alt='Pastor Frankie Tovar Background'
    />

    <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center py-8 md:flex-row'>
      <div className='w-full h-full md:h-screen text-center px-4 mt-4 flex flex-col justify-center items-center py-8 md:flex-row'>
        <span className='type-articles-img-wrapper'>
          <Image
            src={pastorFrankie}
            placeholder='blur'
            height={550}
            width={550}
            alt='Pastor Frankie Tovar'
            quality={100}
          />
        </span>

        <div className='mt-4 sm:mt-0 z-10'>
          <p className='pastorPhrase'><span className='text-secondary-500'>&quot;</span>Cada vez<br className='max-md:hidden' /></p>
          <p className='pastorPhrase'>que te veas en<br className='max-md:hidden' /></p>
          <p className='pastorPhrase'>el espejo, debes<br className='max-md:hidden' /></p>
          <p className='pastorPhrase'>ver a alguien<br className='max-md:hidden' /></p>
          <p className='pastorPhrase'>realmente<br className='max-md:hidden' /></p>
          <p className='pastorPhrase'><span className='text-secondary-500'>comprometido</span> <br className='max-md:hidden' /></p>
          <p className='pastorPhrase'>con Dios<span className='text-secondary-500'>&quot;</span></p>
        </div>
      </div>
    </div>
  </section>
)
