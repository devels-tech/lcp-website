import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import usePortal from 'react-cool-portal'
import { toast } from 'react-toastify'

import { IDataFormReservation, TFormReservationsProps } from '@/lib/types'
import { saveUsersReservations } from '@/lib/utils/reservations/saveUsersReservations'

import { Spinner } from '@/components/common/Loaders/Spinner'
import { IconWarning } from '@/components/common/Icons'
import { Button } from '@/components/common/Button'
import { TicketReservation } from './TicketReservation'
import { SelectWorship } from './SelectWorship'
import { SelectChairs } from './SelectChairs'
import { BasicUserInputs } from './BasicUserInputs'

export const NewFormReservation = ({ reservations }: TFormReservationsProps) => {
  const { register, handleSubmit, formState: { errors }, reset, control, setValue, getValues } = useForm<IDataFormReservation>()
  const watchWorship = useWatch({ control, name: 'worship' })
  const { Portal, hide, show } = usePortal({ defaultShow: false })
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)

  const onSubmit = async (data: IDataFormReservation) => {
    setIsLoadingSubmit(true)
    // const phoneIsDuplicated = reservations.usersReservation.some(({ phone }) => phone === data.phone)

    // if (phoneIsDuplicated) {
    //   toast('¡Teléfono ya Registrado!', { type: 'error' })
    //   setIsLoadingSubmit(false)
    //   return
    // }

    const { data: resultReservation } = await saveUsersReservations(data)

    if (!resultReservation) {
      toast('¡Ha Ocurrido un Error con la Reservación!', { type: 'error' })
      setIsLoadingSubmit(false)
    }

    setIsLoadingSubmit(false)
    toast('¡Reservación Exitosa!', { type: 'success' })
    show()
  }

  if (isLoadingSubmit) return <Spinner />

  return (
    <>
      <Portal>
        <TicketReservation
          reservations={reservations}
          ticketData={getValues()}
          closeTicket={() => { hide(); reset() }}
        />
      </Portal>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ backdropFilter: 'saturate(180%) blur(5px)', backgroundColor: '#5488ff2e' }}
        className='w-full max-w-md rounded-md text-black'
      >
        <div className='w-full flex flex-col justify-center items-center text-center p-4'>
          <h3 className='text-4xl text-secondary-500 font-black xl:text-5xl 3xl:text-6xl'>Reservaciones</h3>
          <br />

          <div className='w-full py-0.5 px-2 rounded-full bg-secondary-500 flex justify-center items-center max-w-md mx-auto'>
            <IconWarning width={28} height={28} classes="mr-2 mt-1" />
            <span className='text-xs xs:text-sm md:text-xs font-bold text-white'>SE REQUIERE EL USO DE DOBLE MASCARILLAS</span>
          </div>
          <br />

          <section className='w-full max-w-md mx-auto'>
            <BasicUserInputs
              usersReservation={reservations.usersReservation}
              registerInputForm={register}
              errorsInputForm={errors}
            />
          </section>
          <br />

          <section className='text-center max-w-xl mx-auto'>
            <span className='font-bold 3xl:text-xl'>Por favor seleccione el horario al que desea asistir</span>
            <SelectWorship
              setValueFormInput={setValue}
              reservations={reservations}
              registerInputForm={register}
              errorsInputForm={errors}
            />
          </section>

          <section className='w-full max-w-md mx-auto mt-4'>
            <SelectChairs
              reservations={reservations}
              currentWorshipId={watchWorship}
              registerInputForm={register}
              errorsInputForm={errors}
            />
          </section>
          <br />

          <Button classes='py-1' tabIndex={9} type='submit'>
          Reservar
          </Button>
        </div>
      </form>
    </>
  )
}
