import { getDownloadURL, ref } from 'firebase/storage'

import { gerProductsDB } from '@/lib/services/firebase/utils/getData'
import { storage } from '@/lib/services/firebase/client'

export const getProducts = async () => {
  const data = await gerProductsDB()

  const eventsPromises = data.docs.map(async (doc) => {
    const imageURL = await getDownloadURL(ref(storage, doc.data().imageRef))

    return JSON.parse(JSON.stringify({
      id: doc.id,
      imageSrc: imageURL,
      ...doc.data()
    }))
  })

  const events = await Promise.all(eventsPromises)
    .then(results => results)

  return events
}
