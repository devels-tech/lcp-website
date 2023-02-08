
import { useState } from 'react'
import Image from 'next/image'
import usePortal from 'react-cool-portal'

import { SkeletonImage } from '@/components/common/Loaders/Skeletons/Products/SkeletonImage'

// <Link href={`/productos/${product.id}`}>
//   <a className='relative z-0 block'>
//    </a>
//  </Link>

interface IProduct {
  description: string
  id: string
  imageRef: string
  imageSrc: string
  price: string
  stock: string
  title: string
}

export const Product = ({ product }: { product: IProduct }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const { Portal, show, hide } = usePortal({ defaultShow: false })

  return (
    <>
      <Portal>
        <div className='fixed inset-0 w-full h-full z-50 flex justify-center items-center px-4' style={{ backgroundColor: 'rgba(0,0,0,.6)' }}>
          <div className='bg-white p-3 rounded-md text-left w-fit relative' style={{ minWidth: 250, maxWidth: 600 }}>
            <button
              onClick={hide}
              className='absolute top-2 right-2'
            >
              X
            </button>

            <div className='w-full h-full flex flex-col sm:flex-row gap-x-4'>
              <img
                src={product.imageSrc}
                alt={product.title}
                className='w-1/2 h-full object-cover'
              />

              <div className='w-1/2 h-full flex flex-col items-between'>
                <div className='h-full'>
                  <span className='font-black text-gray-900 text-3xl'>{product.title}</span>
                  <br />
                  <span>{product.price}</span>
                </div>

                <div className='h-full'>
                  <button className='w-full border-2 border-solid border-black rounded-sm hover:bg-black hover:text-white transition-colors ease-in-out'>
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Portal>

      <article className='w-full relative overflow-hidden rounded group'>
        <div className='relative z-0 block'>
          {!isImageLoaded && <SkeletonImage classes='absolute' />}
          <picture>
            <Image
              src={product.imageSrc}
              alt={product.title}
              width={300}
              height={300}
              onLoadingComplete={() => setIsImageLoaded(true)}
              onClick={show}
              className={
                `cursor-pointer absolute top-0 bottom-0 left-0 right-0 object-cover w-full rounded transform transition-transform md:hover:scale-110 z-10 
                ${isImageLoaded ? 'block' : 'hidden'}`
              }
            />
          </picture>
        </div>

        <section className='p-2 text-left'>
          <h2 className='text-gray-900 hover:text-secondary-500 xs:truncate font-bold text-lg cursor-pointer' onClick={show}>{product.title}</h2>
          <span className='pt-2 text-black'>
            ${ String(product.price) }
          </span>
        </section>
      </article>
    </>
  )
}
