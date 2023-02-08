import { increment, updateDoc } from 'firebase/firestore'
import { RESERVATION_FIRST_WORSHIP_REF, RESERVATION_SECOND_WORSHIP_REF } from '@/lib/services/firebase/utils/refs'
import { TWorshipId } from '@/lib/types'

export const TotalReservationsUpdateIncrement = async (worship: TWorshipId, chairs: number, kidChairs?: number) => {
  if (!kidChairs) {
    if (worship === 'FIRST_WORSHIP') {
      updateDoc(RESERVATION_FIRST_WORSHIP_REF, { total: increment(chairs) })
        .then(() => console.log(`Sumando: ${chairs} sillas`))
    }

    if (worship === 'SECOND_WORSHIP') {
      updateDoc(RESERVATION_SECOND_WORSHIP_REF, { total: increment(chairs) })
        .then(() => console.log(`Sumando: ${chairs} sillas`))
    }
  } else if (kidChairs) {
    if (worship === 'FIRST_WORSHIP') {
      updateDoc(RESERVATION_FIRST_WORSHIP_REF, { total: increment(chairs), totalKids: increment(kidChairs) })
        .then(() => console.log(`Sumando: ${chairs} sillas + ${kidChairs} Niños`))
    }

    if (worship === 'SECOND_WORSHIP') {
      updateDoc(RESERVATION_SECOND_WORSHIP_REF, { total: increment(chairs), totalKids: increment(kidChairs) })
        .then(() => console.log(`Sumando: ${chairs} sillas + ${kidChairs} Niños`))
    }
  }
}
