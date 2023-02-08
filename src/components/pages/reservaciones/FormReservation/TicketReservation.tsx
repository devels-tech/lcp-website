import Image from 'next/image'
import Link from 'next/link'

import { IDataFormReservation, IReservations } from '@/lib/types'
import { Button } from '@/components/common/Button'
import currentLogo from 'public/img/current-logo.webp'

interface ITicketReservationProps {
  reservations: IReservations
  ticketData: IDataFormReservation
  closeTicket: () => void
}

export const TicketReservation = ({ reservations, ticketData, closeTicket }: ITicketReservationProps) => {
  return (
    <div className='fixed inset-0 w-full h-full z-50 flex justify-center items-center px-4' style={{ backgroundColor: 'rgba(0,0,0,.6)' }}>
      <div className='bg-white p-3 rounded-md text-center w-fit' style={{ minWidth: 250 }}>
        <header>
          <figure className='h-fit w-fit mx-auto'>
            <Image
              src={currentLogo}
              placeholder='blur'
              alt='La Casa de mi Padre Logo Actual'
              width={90}
              height={110}
            />
          </figure>

          <span className='font-bold'>TICKET DE RESERVACIÓN</span>
        </header>

        <section className='mt-4'>
          <p>Fecha: 10 de Abril 2022</p>
          <p>Nombre: {ticketData.fullName.trim()}</p>
          <p>Hora: {reservations[ticketData.worship].hour}</p>
          <p>Asientos: {ticketData.chairs}</p>
          {!!Number(ticketData.kidChairs) && <p>Niños por asistir: {ticketData.kidChairs}</p>}
        </section>

        <br />

        <section className='flex flex-col gap-y-3 sm:flex-row items-center'>
          <Link href='/' className='bg-secondary-500 mr-2 filter hover:brightness-125 focus:brightness-125 text-white py-1 px-10 rounded-3xl min-w-176px font-bold xl:text-lg 4xl:text-xl xl:px-11 disabled:opacity-50 disabled:cursor-not-allowed'>
            Volver al inicio
          </Link>
          <Button onClick={closeTicket}>Cerrar</Button>
        </section>
      </div>
    </div>
  )
}
