import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { registerUserEDC } from './registerUserEDC'
import { rules } from './formConfig'

import { Button } from '@/components/common/Button'

interface IDataFormReservation {
  fullName: string
  ci: string
  phone: string
  dateBirth: string
  zone: string
  placeOfBaptism: string
}

export const FormEDCReservations = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataFormReservation>()

  const onSubmit = async (data: IDataFormReservation) => {
    const { data: resData } = await registerUserEDC(data)

    if (!resData) {
      toast('¡Hubo un error!', { type: 'error' })
    }

    toast('¡Inscripccion Exitosa!', { type: 'success' })
    reset()
  }

  return (
    <form className='w-full max-w-lg mx-auto text-center' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='text-4xl text-secondary-500 font-black xl:text-5xl 3xl:text-6xl'>Escuela de Crecimiento <br /> Inscripciones</h3>
      <span className='text-red-500'>Inscripciones solo para bautizados</span>
      <br /><br />

      <div className='text-left'>

        <div>
          <label
            className='font-bold text-sm'
            htmlFor='fullName'
          >
            Nombre y Apellido
          </label>
          {errors.fullName && <p className='text-red-600'>{errors.fullName.message}</p> }

          <input
            className='inputText'
            aria-label='fullName'
            name='fullName'
            {...register('fullName', rules.fullName)}
            type='text'
            autoCapitalize='word'
            autoComplete='on'
            tabIndex={1}
            placeholder='Nombre y Apellido'
          />
        </div>

        <div>
          <label
            className='font-bold text-sm'
            htmlFor='ci'
          >
            Cédula de Identidad
          </label>
          {errors.ci && <p className='text-red-600'>{errors.ci.message}</p>}

          <input
            className='inputText mt-2'
            aria-label='ci'
            name='ci'
            {...register('ci', rules.ci)}
            maxLength={10}
            minLength={7}
            type='text'
            tabIndex={2}
            placeholder='00.000.000'
          />
        </div>

        <div>
          <label
            className='font-bold text-sm'
            htmlFor='phone'
          >
            Teléfono
          </label>
          {errors.phone && <p className='text-red-600'>{errors.phone.message}</p> }

          <input
            className='inputText mt-2'
            aria-label="Teléfono"
            name="phone"
            {...register('phone', rules.phone)}
            type="tel"
            tabIndex={2}
            placeholder="0412000000"
          />
        </div>

        <div>
          <label
            className='font-bold text-sm'
            htmlFor='zone'
          >
            Zona donde vive
          </label>
          {errors.zone && <p className='text-red-600'>{errors.zone.message}</p> }

          <input
            className='inputText'
            aria-label='zone'
            name='zone'
            {...register('zone', rules.zone)}
            type='text'
            autoCapitalize='word'
            autoComplete='on'
            tabIndex={3}
            placeholder='Catia / El Hatillo / etc...'
          />
        </div>

        <div className='mt-2'>
          <label
            className='font-bold text-sm'
            htmlFor='placeOfBaptism'
          >
            Dónde fue bautizado
          </label>

          <input
            type='text'
            id='placeOfBaptism'
            name='placeOfBaptism'
            {...register('placeOfBaptism', rules.placeOfBaptism)}
            className='inputText'
            tabIndex={4}
            placeholder='LCP/Otro'
          />
        </div>

        <div className='mt-2'>
          <label
            className='font-bold text-sm'
            htmlFor='dateBirth'
          >
            Fecha de nacimiento
          </label>

          <input
            type='date'
            id='dateBirth'
            name='dateBirth'
            min='1960-01-01'
            max='2018-12-31'
            {...register('dateBirth', rules.dateBirth)}
            className='inputText'
            tabIndex={5}
          />
        </div>
      </div>

      <Button classes='py-1 mt-4' tabIndex={6} type='submit'>
        Registrar
      </Button>
    </form>
  )
}
