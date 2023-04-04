import { addDoc } from 'firebase/firestore'
import { CASTING_DB_REF } from '@/lib/services/firebase/utils/refs'
import { getNormalizeLocalDate } from '@/lib/utils/getLocalDate'

interface IDataFormCasting {
  firstName: string
  lastName: string
  phone: string
  email: string
  address: string
  typeCasting: 'SINGING' | 'PIANIST' | 'GUITARIST' | 'BASSIST' | 'DRUMMER' | 'TRUMPET' | 'TROMBONE' | 'SAXOPHONE' | 'OTHER'
}
export const registerUserCasting = async (casting: IDataFormCasting) => {
  const dateLocal = getNormalizeLocalDate()

  const reservationToSend = {
    date: dateLocal,
    address: casting.address,
    firstName: casting.firstName,
    lastName: casting.lastName,
    email: casting.email,
    phone: casting.phone,
    typeCasting: casting.typeCasting
  }

  const resSaveReservation = await addDoc(CASTING_DB_REF, reservationToSend)
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
