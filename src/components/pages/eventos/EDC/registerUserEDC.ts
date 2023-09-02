import { addDoc } from 'firebase/firestore'
import { EDC_DB_REF } from '@/lib/services/firebase/utils/refs'
import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'

interface IDataFormReservation {
  fullName: string
  ci: string
  phone: string
  dateBirth: string
  zone: string
  placeOfBaptism: string
}

export const registerUserEDC = async (reservation: IDataFormReservation) => {
  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    fullName: reservation.fullName,
    ci: reservation.ci,
    phone: reservation.phone,
    dateBirth: reservation.dateBirth,
    zone: reservation.zone,
    placeOfBaptism: reservation.placeOfBaptism
  }

  console.log('saveUsersReservations => reservationToSend', reservationToSend)

  const resSaveReservation = await addDoc(EDC_DB_REF, reservationToSend)
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
