import { useState, useEffect } from 'react'
import { getAllBannerImages } from '@/lib/utils/banner/getAllBannerImages'

export const useBanner = () => {
  const [bannerImages, setBannerImages] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      const bannerImages = await getAllBannerImages()
        .catch(() => setError('Hubo un error en los Eventos'))

      setIsLoading(false)
      setBannerImages(bannerImages)
    })()
  }, [])

  return {
    bannerImages,
    bannerIsLoading: isLoading,
    bannerError: error
  }
}
