import { addDoc } from 'firebase/firestore'

import { INSTITUTE_DB_REF } from '@/lib/services/firebase/utils/refs'
import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'

interface IntituteBibleData {
  fullName: string
  ci: string
  phone: string
  email: string
  modality: string
}

export const registerInstituteBible = async (reservation: IntituteBibleData) => {
  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    fullName: reservation.fullName,
    ci: reservation.ci,
    email: reservation.email,
    modality: reservation.modality,
    phone: reservation.phone,
  }

  console.log('registerInstituteBible', reservationToSend)

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
