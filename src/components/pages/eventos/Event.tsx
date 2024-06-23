import Image from 'next/image'
import Link from 'next/link'
import { StaticImageData } from 'react-dom'

interface IEventProps {
  imgSrc?: string | StaticImageData
  title?: string
  description?: string
  redirectTo?: string
  redirectLabel?: string
  date?: string
  imageRef?: StaticImageData
  localImage?: any
  schedule?: string
  id?: string
}

export const Event = ({ imgSrc, localImage, title, description, redirectTo, redirectLabel, schedule, date }: IEventProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <article className='event_item aspect-square max-w-xs'>
        <div className={`event_content ${redirectTo ? 'cursor-default' : 'cursor-pointer'}`}>
          <Image
            src={imgSrc || localImage}
            alt={title || 'Evento LCP'}
            placeholder='blur'
            className='w-full h-full object-cover'
          />

          {/* {
            (redirectTo && redirectLabel) && (
              <Link href={redirectTo}>
                {redirectLabel}
              </Link>
            )
          } */}
          {/* <div className='event_overlay'></div>

        <div className='event_content--text'>
          { title && <h5 className='font-bold text-xl text-secondary-500'>{title}</h5> }

          { description && <p>{description}</p> }

          { title && <span className=' font-bold text-secondary-500'>{date} | {schedule} </span> }

          {
            (redirectTo && redirectLabel) && (
              <Link href={redirectTo}>
                {redirectLabel}
              </Link>
            )
          }
        </div>
      */}
        </div>
      </article>

      <Link href={redirectTo} className='mt-3 w-full block py-2 border border-secondary-500 rounded-md text-center hover:bg-secondary-500 hover:text-white'>
        <span className='text-lg font-bold'>
          {redirectLabel}
        </span>
      </Link>
    </div>
  )
}
