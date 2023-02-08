import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'

import { configSwiper } from './config'

import { ButtonScroll } from '@/components/common/ButtonScroll'
import { DefaultItem } from './Items'

import 'swiper/css/bundle'
import 'swiper/css/pagination'
import { useEffect, useState } from 'react'
import { getAllBanners } from '@/lib/services/banners'
import { handleFetchErrors } from '@/lib/utils/handleFetchErrors'
import { Banner } from './Items/Banner'
// import { LocalEvent2 } from './Items/LocalEvent'

SwiperCore.use([Pagination, Autoplay])

export const Slider = () => {
  const [banners, setBanners] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
    <section className='w-full relative mt-20 h-[calc(100vh-4rem)]'>
      <div className='h-full'>
        <ButtonScroll />

        <Swiper
          {...configSwiper}
          className='h-full'
        >
          <SwiperSlide>
            <DefaultItem />
          </SwiperSlide>

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

          {/* <SwiperSlide>
            <LocalEvent2 />
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <LocalEvent />
          </SwiperSlide> */}

          {/* {
            (topicOfTheMonth?.desktop?.length >= 1 || topicOfTheMonth?.mobile?.length >= 1) && (
              <SwiperSlide>
                <TopicOfTheMonth topicOfTheMonth={topicOfTheMonth} />
              </SwiperSlide>
            )
          }

          {
            (events?.desktop?.length >= 1 || events?.mobile?.length >= 1) && (
              <SwiperSlide>
                <Events events={events} />
              </SwiperSlide>
            )
          } */}
        </Swiper>
      </div>
    </section>
  )
}
