import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from '@/lib/services/firebase/client'

export const getAllBannerImages = async () => {
  const topicOfTheMonthImgRef = ref(storage, 'banner/topicOfTheMonth')
  const eventsImgRef = ref(storage, 'banner/events')

  const topicOfTheMonthListRef = await listAll(topicOfTheMonthImgRef)
  const eventsListRef = await listAll(eventsImgRef)

  const eventsImgMobile: string[] = []
  const eventsImgDesktop: string[] = []
  const topicOfTheMonthImgMobile: string[] = []
  const topicOfTheMonthImgDesktop: string[] = []

  console.log('eventsListRef', eventsListRef)
  console.log('topicOfTheMonthListRef', topicOfTheMonthListRef)

  const eventListPromises = eventsListRef.items.map(async (eventImgRef) => {
    const imgName = eventImgRef.name.toLowerCase().trim()
    const imgFullPathRef = ref(storage, eventImgRef.fullPath)
    const imgSrc = await getDownloadURL(imgFullPathRef)

    if (imgName.includes('mobile')) eventsImgMobile.push(imgSrc)
    if (imgName.includes('desktop')) eventsImgDesktop.push(imgSrc)
    else;
  })

  const topicOfTheMonthListPromises = topicOfTheMonthListRef.items.map(async (topicOfTheMonthImgRef) => {
    const imgName = topicOfTheMonthImgRef.name.toLowerCase().trim()
    const imgFullPathRef = ref(storage, topicOfTheMonthImgRef.fullPath)
    const imgSrc = await getDownloadURL(imgFullPathRef)

    if (imgName.includes('mobile')) topicOfTheMonthImgMobile.push(imgSrc)
    if (imgName.includes('desktop')) topicOfTheMonthImgDesktop.push(imgSrc)
    else;
  })

  await Promise.all(topicOfTheMonthListPromises)
  await Promise.all(eventListPromises)

  return {
    topicOfTheMonth: {
      mobile: [...topicOfTheMonthImgMobile],
      desktop: [...topicOfTheMonthImgDesktop]
    },

    events: {
      mobile: [...eventsImgMobile],
      desktop: [...eventsImgDesktop]
    }
  }
}
