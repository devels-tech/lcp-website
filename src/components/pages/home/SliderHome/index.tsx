import SwiperCore, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { handleFetchErrors } from '@/lib/utils/handleFetchErrors'
import { getAllBanners } from '@/lib/services/banners'
import { configSwiper } from './config'

import { ButtonScroll } from '@/components/common/ButtonScroll'
import { Banner } from './Items/Banner'
import { DefaultItem } from './Items'

import dycImage from 'public/img/banner/dyc.jpg'
import a20Desktop from 'public/img/banner/a20-desktop.jpg'
import a20Mobile from 'public/img/banner/a20-mobile.jpg'
import dycImageMobile from 'public/img/banner/dyc-mobile.jpg'

import 'swiper/css/bundle'
import 'swiper/css/pagination'

SwiperCore.use([Pagination, Autoplay])

export const Slider = () => {
  const [banners, setBanners] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const isDesktop = useMediaQuery('(min-width: 960px)')

  useEffect(() => {
    (async () => {
      const { data, error } = await getAllBanners()

      if (error) {
        handleFetchErrors(error.status, error.message)
        setIsLoading(false)
        return
      }

      setBanners(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <section className='w-full relative mt-20 sm:mt-0'>
      <div className='h-full'>
        <ButtonScroll />

        <Swiper {...configSwiper} className='h-full'>
          <SwiperSlide>
            <div className='h-full'>
              <div className='hidden sm:block'>
                <Image
                  src={dycImage}
                  alt='La Casa de mi Padre'
                  placeholder='blur'
                  className='w-full h-full object-cover 2xl:-mt-36'
                  quality={100}
                  priority
                />
              </div>

              <div className='sm:hidden'>
                <Image
                  src={dycImageMobile}
                  alt='La Casa de mi Padre'
                  placeholder='blur'
                  className='w-full h-full object-cover'
                  quality={100}
                  priority
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <DefaultItem />
          </SwiperSlide>

          <SwiperSlide>
            <div className='h-full'>
              <div className='hidden sm:block'>
                <Image
                  src={a20Desktop}
                  alt='La Casa de mi Padre'
                  placeholder='blur'
                  className='w-full h-full object-cover'
                  quality={100}
                  priority
                />
              </div>

              <div className='sm:hidden'>
                <Image
                  src={a20Mobile}
                  alt='La Casa de mi Padre'
                  placeholder='blur'
                  className='w-full h-full object-cover'
                  quality={100}
                  priority
                />
              </div>
            </div>
          </SwiperSlide>

          {
            isDesktop && (
              <>
                {/* <SwiperSlide>
                  <div className='w-full hidden sm:block'>
                    <Image
                      src={banner3}
                      alt='La Casa de mi Padre'
                      placeholder='blur'
                      className='w-full h-full object-cover'
                      quality={100}
                      priority
                    />
                  </div>
                </SwiperSlide> */}

                {/* <SwiperSlide>
                  <div className='w-full hidden sm:block'>
                    <Image
                      src={banner4}
                      alt='La Casa de mi Padre'
                      placeholder='blur'
                      className='w-full h-full object-cover'
                      quality={100}
                      priority
                    />
                  </div>
                </SwiperSlide> */}
              </>
            )
          }

          {
            !isLoading
              ? banners?.map(banner => (
                <SwiperSlide key={banner.id}>
                  <Banner {...banner} />
                </SwiperSlide>
              )
              )
              : null
          }
        </Swiper>
      </div>
    </section>
  )
}
