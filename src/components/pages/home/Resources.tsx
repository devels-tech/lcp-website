import Image from 'next/image'
import Link from 'next/link'

import almaImg from 'public/img/alma.webp'
import cuerpoImg from 'public/img/cuerpo.webp'
import espirituImg from 'public/img/espiritu.webp'

const resources = [
  { label: 'Espíritu', img: espirituImg, tag: 'Rio Orinoco', to: '/recursos/espiritu' },
  { label: 'Alma', img: almaImg, tag: 'Rio Orinoco', to: '/recursos/alma' },
  { label: 'Cuerpo', img: cuerpoImg, tag: 'Rio Orinoco', to: '/recursos/cuerpo' }
]

export const Resources = () => (
  <section className='w-full flex flex-col justify-center items-center md:flex-row' style={{ minHeight: '85vh' }}>
    {
      resources.map(resource => (
        <Link href={resource.to} key={resource.to} className='resourceLinkWrapper'>
          <figure key={resource.label} className='resourceImgWrapper'>
            <span className='type-articles-img-wrapper'>
              <Image src={resource.img} placeholder='blur' className='w-full object-cover type-articles' alt={resource.label} />
            </span>

            <div className='w-full h-full absolute top-0 right-0 flex justify-center items-center' style={{ letterSpacing: '.65rem' }}>
              <span className='resourceTitle font-extralight select-none uppercase text-4xl md:text-5xl 4xl:text-6xl'>{resource.label}</span>
            </div>
          </figure>
        </Link>
      ))
    }
  </section>
)
