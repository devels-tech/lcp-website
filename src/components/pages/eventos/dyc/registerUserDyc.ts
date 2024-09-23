import { addDoc } from 'firebase/firestore'

import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'
import { DYC_DB_REF } from '@/lib/services/firebase/utils/refs'
import { IDataFormDyc } from './form'

export const registerUserDyc = async (reservation: IDataFormDyc) => {
  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    fullName: reservation.fullName,
    email: reservation.email,
    phone: reservation.phone,
    dateBirth: reservation.dateBirth,
    ci: reservation.ci,
    headquarters: reservation.headquarters
  }

  console.log('saveUsersReservations => reservationToSend', reservationToSend)

  const resSaveReservation = await addDoc(DYC_DB_REF, reservationToSend)
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
