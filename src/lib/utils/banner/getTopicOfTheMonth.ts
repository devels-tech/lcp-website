import { getImageSrc } from '@/lib/services/firebase/utils/getImageSrc'

export const getTopicOfTheMonth = async () => {
  const imageDesktop = await getImageSrc('/banner/topicOfTheMonth/topicOfTheMonth-desktop.webp')
  const imageMobile = await getImageSrc('/banner/topicOfTheMonth/topicOfTheMonth-mobile.webp')

  return {
    imageDesktop,
    imageMobile
  }
}
