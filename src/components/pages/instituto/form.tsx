import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useState } from 'react'

import { handleOnlyNumbers } from '@/lib/utils/only-numbers'
import { registerInstituteBible } from './register'
import { rules } from './form-rules'

import { Button } from '@/components/common/Button'

interface IntituteBibleData {
  fullName: string
  ci: string
  phone: string
  email: string
  modality: string
  file: FileList
}

const Loading = () => {
  return (
    <div className='w-screen h-screen bg-zinc-800/50 fixed top-0 left-0 flex flex-col justify-center items-center z-50'>
      <div className='max-w-md w-full bg-white rounded-md p-4 flex flex-col justify-center items-center'>
        <svg className='text-primary-400 animate-spin h-20 w-20 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
          <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
        </svg>

        <div className='mt-2 text-center'>
          <span className='font-bold text-2xl'>Cargando Inscripción</span> <br />
          <small>Por favor, espere.</small>
        </div>
      </div>
    </div>
  )
}

export const IntituteBibleFrom = () => {
  const { handleSubmit, register, formState: { errors }, reset, watch } = useForm<IntituteBibleData>({ 
    defaultValues: { modality: 'Presencial' }
  })

  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const fileWatch = watch('file')
  const modalityWatch = watch('modality')

  const onSubmit = handleSubmit(async (data: IntituteBibleData) => {
    setLoading(true)

    const { data: resData } = await registerInstituteBible(data)

    if (!resData) {
      setLoading(false)
      toast('¡Hubo un error!', { type: 'error' })
    }

    toast('¡Inscripción Exitosa!', { type: 'success' })
    reset()

    setLoading(false)
    router.push('/')
  })

  return (
    <>
      {
        loading && <Loading />
      }

      <form onSubmit={onSubmit} className='w-full lg:w-1/2 mt-4 lg:sticky top-0 left-0 pt-24 lg:pt-24'>
        <div className='w-full h-full p-6 bg-white rounded-xl'>
          <span className='font-bold text-base'>Requisitos:</span>
          <p className='text-sm'>
            <span className='font-bold'>1.</span> Haber concluido los 4 niveles de la EDC
          </p>

          <p className='text-sm'>
            <span className='font-bold'>2.</span> Haber realizado el pago de la matrícula: <span className='font-bold'>$5 taza BCV</span>
          </p>

          {/* <span className='font-bold text-base inline-block mt-2'>Horarios:</span>

          <p className='text-sm'>
            <span className='font-bold'>Presencial: </span> Sabados de 9:00 am a 11:00 am
          </p>

          <p className='text-sm'>
            <span className='font-bold'>Online: </span>Jueves de 7:30 pm a 9:00 pm
          </p> */}
        </div>

        <div className='w-full h-full p-6 bg-white rounded-xl mt-4'>
          <h6 className='font-bold text-xl lg:hidden'>Instituto Bíblico - Inscripciones</h6>
          <h6 className='font-bold text-xl hidden lg:inline-block '>Formulario de inscripción</h6>

          <p className='text-xs'>
            Los cursos serán ofrecidos en la Iglesia <span className='font-bold'>La Casa de mi Padre</span>
          </p>  

          <div className='mt-1'>
            <label
              className='font-bold text-sm'
              htmlFor='fullName'
            >
              Nombre y Apellido
            </label>
            {errors.fullName && <p className='text-red-600 text-sm'>{errors.fullName.message}</p> }

            <input
              className='inputText'
              disabled={loading}
              aria-label='fullName'
              name='fullName'
              maxLength={50}
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

            {errors.ci && <p className='text-red-600 text-sm'>{errors.ci.message}</p>}

            <input
              className='inputText mt-2'
              aria-label='ci'
              name='ci'
              {...register('ci', rules.ci)}
              maxLength={9}
              disabled={loading}
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
            {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p> }

            <input
              className='inputText'
              aria-label='Correo Electrónico'
              name='email'
              {...register('email', rules.email)}
              type='email'
              autoCapitalize='none'
              disabled={loading}
              autoComplete='off'
              autoCorrect='off'
              spellCheck='false'
              maxLength={50}
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
            {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p> }

            <input
              className='inputText mt-2'
              aria-label='Teléfono'
              disabled={loading}
              name='phone'
              {...register('phone', rules.phone)}
              onKeyPress={handleOnlyNumbers}
              type='tel'
              maxLength={11}
              tabIndex={5}
              placeholder='0412000000'
            />
          </div>

          <div className='mt-1'>
            <label
              className='font-bold text-sm'
              htmlFor='modality'
            >
              Modalidad
            </label> <br />

            <div className='flex flex-col w-full'>
              <label>
                <input
                  {...register('modality', rules.modality)}
                  className='accent-primary-400'
                  name='modality'
                  type='radio'
                  value='Presencial'
                /> Presencial <span className='text-xs font-bold'>{ modalityWatch === 'Presencial' && '(Sabados de 9:00 am a 11:00 am)' }</span>
              </label>

              <label>
                <input
                  {...register('modality', rules.modality)}
                  className='accent-primary-400'
                  name='modality'
                  type='radio'
                  value='Online'
                /> Online <span className='text-xs font-bold'>{ modalityWatch === 'Online' && '(Jueves de 7:30 pm a 9:00 pm)' }</span>
              </label>
            </div>

            {errors.modality && <p className='text-sm text-red-600'>{errors.modality.message}</p>}
          </div>

          <div className='mt-2'>
            <span className='font-bold text-sm'>Adjunto del pago de la matrícula</span> <br />
            { fileWatch?.length ? <span className='font-medium text-sm text-green-600'>Archivo cargado</span> : null }

            {errors.file && <p className='text-sm text-red-600'>{errors.file.message as string}</p>}

            <label className='block mt-2'>
              <input
                {...register('file', { required: { value: true, message: 'Adjunto requerido' } })}
                id='file'
                tabIndex={7}
                name='file'
                type='file'
                accept='.jpg, .jpeg, .png .webp'
                className='block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
              '/>
            </label>
          </div>

          <Button classes='w-full mt-4' type='submit' tabIndex={8} disabled={loading}>
            Enviar
          </Button>
        </div>
      </form>
    </>
  )
}
