import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../client'

export const uploadImage = async (file: File, path, filename: string) => {
  try {
    const storageRef = ref(storage, `${path}${filename}`)

    const res = await uploadBytes(storageRef, file)

    return res
  } catch (error) {
    return null
  }
}
