import { initializeApp, FirebaseApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'

import { PAGE_INFO } from '@/config'
export { uploadBytes, uploadString, getDownloadURL, uploadBytesResumable, deleteObject, listAll } from 'firebase/storage'

const { FIREBASE } = PAGE_INFO

let firebaseApp: FirebaseApp | undefined

if (!getApps().length) {
  firebaseApp = initializeApp(FIREBASE.INIT_APP)
}

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)
