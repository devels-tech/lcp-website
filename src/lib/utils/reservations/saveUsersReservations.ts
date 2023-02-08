import { addDoc } from 'firebase/firestore'

import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'
import { USERS_RESERVATION_DB_REF } from '@/lib/services/firebase/utils/refs'
import { IDataFormReservation } from '@/lib/types'
import { TotalReservationsUpdateIncrement } from './incrementReservations'

export const saveUsersReservations = async (reservation: IDataFormReservation) => {
  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    fullName: `${reservation.fullName}`,
    phone: reservation.phone,
    email: reservation.email || 'Sin correo',
    reservations: Number(reservation.chairs),
    kidsReservations: Number(reservation.kidChairs),
    worship: reservation.worship
  }

  console.log('saveUsersReservations => reservationToSend', reservationToSend)

  const resSaveReservation = await addDoc(USERS_RESERVATION_DB_REF, reservationToSend)
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

  if (resSaveReservation.data) {
    TotalReservationsUpdateIncrement(reservation.worship, Number(reservation.chairs), Number(reservation.kidChairs))
  }

  return resSaveReservation
}
