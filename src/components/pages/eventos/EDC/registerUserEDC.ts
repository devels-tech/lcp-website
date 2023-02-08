import { addDoc } from 'firebase/firestore'
import { EDC_DB_REF } from '@/lib/services/firebase/utils/refs'
import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'

interface IDataFormReservation {
  fullName: string
  email: string
  ci: string
  levelEDC: string
  phone: string
}

export const registerUserEDC = async (reservation: IDataFormReservation) => {
  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    ci: reservation.ci,
    fullName: reservation.fullName,
    email: reservation.email,
    levelEDC: reservation.levelEDC,
    phone: reservation.phone
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
