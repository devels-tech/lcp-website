import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '@/lib/services/firebase/client'

export const getImageSrc = async (pathRef: string) => {
  try {
    const imageURL = await getDownloadURL(ref(storage, pathRef))
    return imageURL
  } catch (err) {
    console.error('getImageSrc error', err)
  }
}
