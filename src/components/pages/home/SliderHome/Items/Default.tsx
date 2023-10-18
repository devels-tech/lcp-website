import { Button } from '@/components/common/Button'
import Image from 'next/image'
import Link from 'next/link'

// import headerHomeDefault from 'public/img/headerHomeDefault.webp'
// import headerHomeMobileDefault from 'public/img/headerHomeMobileDefault.webp'
// import ddddSrcDesktop from 'public/img/ddddBg-desktop.webp'
// import ddddSrcMobile from 'public/img/ddddBg-mobile.webp'
import emprendidentroSrcDesktop from 'public/img/emprendidentro-desktop.webp'
import emprendidentroSrcMobile from 'public/img/emprendidentro-mobile.webp'

const ButtonEmprendidentro = () => (
  <Button classes='w-100 h-100 bg-white absolute top-3/4 left-1/2 transform -translate-x-1/2 shadow-lg'>
    <h1 className='text-emprendidentro'>¡Inscríbite aquí!</h1>
  </Button>
)

export const DefaultItem = () => (
  <div className='h-full'>
    <div className='hidden sm:block'>
      {/* <Image
        src={headerHomeDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
      />
    </div>

    <div className='sm:hidden'>
      <Image
        src={headerHomeMobileDefault}
        alt='La Casa de mi Padre'
        placeholder='blur'
        className='w-full h-full object-cover'
        quality={100}
      />
    </div> */}

      {/* <Image
        src={ddddSrcDesktop}
        alt='Dentro Del Diseño Divino'
        placeholder='blur'
        className='w-full h-full object-cover full-image'
        quality={100}
      /> */}

      <Link href="https://forms.gle/eYv1E8qWYmFTSTA48" target='_blank'>
        <Image
          src={emprendidentroSrcDesktop}
          alt='Emprendidentro'
          placeholder='blur'
          className='w-full h-full object-cover full-image'
          quality={100}
        />
      </Link>
      <ButtonEmprendidentro />
    </div>

    <div className='sm:hidden'>
      <Link href="https://forms.gle/eYv1E8qWYmFTSTA48" target='_blank'>
        <Image
          src={emprendidentroSrcMobile}
          alt='Emprendidentro'
          placeholder='blur'
          className='w-full h-full object-cover full-image'
          quality={100}
        />
        <ButtonEmprendidentro />
      </Link>
    </div>

    {/* <div css={titleWrapper}>
      <div css={titleContainer}>
        <span>BIENVENIDOS A</span> <br />
        <span>LA CASA DE MI PADRE</span> <br />

        <div css={slogan}>
          <span>DONDE TODOS <Br Hidden='md' /> TIENEN UN LUGAR</span>
        </div>
      </div>
    </div> */}
  </div>
)
