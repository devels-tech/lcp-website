import { addDoc } from 'firebase/firestore'
import { BAUTIZOS_DB_REF } from '@/lib/services/firebase/utils/refs'
import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'

interface IDataFormReservation {
  fullName: string
  phone: string
  email: string
  zone: string
  dateBirth: string
  civilState: string
  profestion: string
  timeConverted: string
  lcpAsisted: string
}
export const registerUserBautizos = async (reservation: IDataFormReservation) => {
  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    fullName: reservation.fullName,
    email: reservation.email,
    phone: reservation.phone,
    civilState: reservation.civilState,
    dateBirth: reservation.dateBirth,
    lcpAsisted: reservation.lcpAsisted,
    zone: reservation.zone,
    timeConverted: reservation.timeConverted,
    profestion: reservation.profestion
  }

  console.log('saveUsersReservations => reservationToSend', reservationToSend)

  const resSaveReservation = await addDoc(BAUTIZOS_DB_REF, reservationToSend)
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
