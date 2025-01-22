import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { registerUserEDC } from './registerUserEDC'
import { rules } from './formConfig'

import { Button } from '@/components/common/Button'
import { handleOnlyNumbers } from '@/lib/utils/only-numbers'
import { useState } from 'react'
import { Loading } from '@/components/common/Loaders/global-loading'
import { useRouter } from 'next/router'

enum EdcLevel {
  LEVEL_1 = 'Nivel 1',
  LEVEL_2 = 'Nivel 2',
  LEVEL_3 = 'Nivel 3',
  LEVEL_4 = 'Nivel 4',
}

const edcLevel = {
  [EdcLevel.LEVEL_1]: { label: 'Nivel 1', value: EdcLevel.LEVEL_1 },
  [EdcLevel.LEVEL_2]: { label: 'Nivel 2', value: EdcLevel.LEVEL_2 },
  [EdcLevel.LEVEL_3]: { label: 'Nivel 3', value: EdcLevel.LEVEL_3 },
  [EdcLevel.LEVEL_4]: { label: 'Nivel 4', value: EdcLevel.LEVEL_4 }
}

interface IDataFormReservation {
  fullName: string
  ci: string
  level: string
  email: string
  phone: string
  dateBirth: string
  zone: string
  placeOfBaptism: string
}

export const FormEDCReservations = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataFormReservation>()
  const [isLoading, setIsLoading] = useState(false)
  const router =useRouter()

  const onSubmit = async (data: IDataFormReservation) => {
    setIsLoading(true)
    const { data: resData } = await registerUserEDC(data)

    if (!resData) {
      toast('¡Hubo un error!', { type: 'error' })
      setIsLoading(false)
    }

    setIsLoading(false)
    toast('¡Inscripción Exitosa!', { type: 'success' })
    reset()
    router.push('/')
  }

  return (
    <>
        { isLoading && <Loading title='Cargando Inscripción' /> }
    
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
                Nivel
              </label>
              {errors.level && <p className='text-red-600'>{errors.level.message}</p> }

              <select
                id='level'
                name='level'
                tabIndex={1}
                placeholder='Nivel'
                defaultValue={EdcLevel.LEVEL_1}
                {...register('level', rules.level)}
                className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
              >
                <option className='text-black' value={edcLevel[EdcLevel.LEVEL_1].value}>{edcLevel[EdcLevel.LEVEL_1].label}</option>
                <option className='text-black' value={edcLevel[EdcLevel.LEVEL_2].value}>{edcLevel[EdcLevel.LEVEL_2].label}</option>
                <option className='text-black' value={edcLevel[EdcLevel.LEVEL_3].value}>{edcLevel[EdcLevel.LEVEL_3].label}</option>
                <option className='text-black' value={edcLevel[EdcLevel.LEVEL_4].value}>{edcLevel[EdcLevel.LEVEL_4].label}</option>
              </select>
            </div>

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
                type='text'
                autoCapitalize='word'
                autoComplete='on'
                tabIndex={2}
                placeholder='Nombre y Apellido'
                {...register('fullName', rules.fullName)}
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
                onKeyPress={handleOnlyNumbers}
                tabIndex={3}
                placeholder='00.000.000'
              />
            </div>

            <div>
              <label
                className='font-bold text-sm'
                htmlFor='email'
              >
                Correo Electrónico
              </label>
              {errors.email && <p className='text-red-600'>{errors.email.message}</p> }

              <input
                className='inputText'
                aria-label='Correo Electrónico'
                name='email'
                {...register('email', rules.email)}
                type='email'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                spellCheck='false'
                tabIndex={4}
                placeholder='Correo Electrónico'
                aria-autocomplete='list'
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
                onKeyPress={handleOnlyNumbers}
                type="tel"
                maxLength={11}
                tabIndex={5}
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
                tabIndex={6}
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
                tabIndex={7}
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
                tabIndex={8}
              />
            </div>
          </div>

          <Button classes='py-1 mt-4' tabIndex={9} type='submit'>
            Registrar
          </Button>
        </form>
    </>
  )
}
