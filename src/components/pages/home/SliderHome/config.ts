import { SwiperProps } from 'swiper/react'

export const configSwiper: SwiperProps = {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true,
    bulletActiveClass: 'swiper-pagination-active' // Clase de CSS para la paginacion cuando esta activada (puedes encontrar los estilos en styles/components/swiper.css)
  }
}
