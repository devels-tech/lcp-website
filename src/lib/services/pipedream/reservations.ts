export const submitReservation = async (reservation) => {
  console.log(reservation.scheduleWorship, reservation.totalReservations)

  if (!reservation.email || reservation.email === ' ') reservation.email = 'Sin Correo'

  const date = new Date()
  const dateLocal = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
  reservation.reservationDate = dateLocal

  const res = await fetch('https://enzlo4djpfd3xq0.m.pipedream.net', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(reservation),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })

  if (!res.ok) {
    return {
      data: null,
      error: `${res.status} No se pudo realizar la reservación!`
    }
  }

  console.log('submitReservation', res)

  return {
    data: `${res.status} Reservación Exitosa!`,
    error: null
  }
}
