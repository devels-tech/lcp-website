import { addDoc } from 'firebase/firestore'

import { INSTITUTE_DB_REF } from '@/lib/services/firebase/utils/refs'
import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'
import { storage } from '@/lib/services/firebase/client'
import { uploadImage } from '@/lib/services/firebase/utils/upload-image'
import { slugify } from '@/lib/utils/slugify'
import { toast } from 'react-toastify'

interface IntituteBibleData {
  fullName: string
  ci: string
  phone: string
  email: string
  modality: string
  file: FileList
}

export const registerInstituteBible = async (reservation: IntituteBibleData) => {
  const filename = `${slugify(reservation.fullName)}-${reservation?.ci?.trim()}`

  const resImage = await uploadImage(reservation.file[0], 'bible-institute/', filename)

  if (!resImage?.metadata?.fullPath) {
    toast.error('Error al cargar el adjunto')
  }

  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    fullName: reservation.fullName,
    ci: reservation.ci,
    email: reservation.email,
    modality: reservation.modality,
    phone: reservation.phone,
    paymentImagePath: resImage?.metadata?.fullPath
  }

  const resSaveReservation = await addDoc(INSTITUTE_DB_REF, reservationToSend)
    .then((docRef) => ({
      data: `Reservación ${docRef.id} registrada con exito`,
      error: null
    }))
    .catch((error) => {
      console.error('Error usersReservations adding document: ', error)

      return {
        data: null,
        error: `Hubo un eror al registrar la reservación ${JSON.stringify(
          error
        )}`
      }
    })

  return resSaveReservation
}
