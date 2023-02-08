import { getDownloadURL, ref } from 'firebase/storage'

import { getEventsDB } from '@/lib/services/firebase/utils/getData'
import { storage } from '@/lib/services/firebase/client'
import { TEvent } from '@/lib/types'

export const getEvents = async () => {
  const data = await getEventsDB()

  if (data.empty) return null

  const eventsPromises = data.docs.map(async (doc) => {
    // const imgRef: string = doc.data().imageRef.toLowerCase().trim()
    const imgURL = await getDownloadURL(ref(storage, doc.data().imageRef))
    // const imageMobile = imgRef.includes('mobile') ? imgURL : ''
    // const imageDesktop = imgRef.includes('desktop') ? imgURL : ''

    return JSON.parse(JSON.stringify({
      id: doc.id,
      imgSrc: imgURL,
      ...doc.data()
    }))
  })

  const events: TEvent[] = await Promise.all(eventsPromises)
    .then(results => results)

  return events
}
