import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useState } from 'react'

import { handleOnlyNumbers } from '@/lib/utils/only-numbers'
import { registerInstituteBible } from './register'
import { rules } from './form-rules'

import { Button } from '@/components/common/Button'
import { Loading } from '@/components/common/Loaders/global-loading'

interface IntituteBibleData {
  fullName: string
  ci: string
  phone: string
  email: string
  modality: string
  file: FileList
}

const BancaryData = ({ close }) => {
  return (
    <div className='w-screen h-screen bg-zinc-800/50 fixed top-0 left-0 flex flex-col justify-center items-center z-50'>
      <div className='max-w-xs w-full bg-white rounded-md p-4 flex flex-col justify-center items-center'>
        <div className='pt-2 text-center'>
          <div className='w-full text-left text-sm'>
            <span className='font-bold text-2xl'>Datos Bancarios</span> <br />
            <span className='font-bold'>Transferencia</span>
          </div>

          <div className='text-left mt-4'>
            <p>Banesco Cta. Cte.</p>
            <p>0134-0366-0136-6129-0259</p>
            <p>La Casa de mi Padre</p>
            <p>Rif. J-29453414-7</p>
          </div>
        </div>

        <div className='w-full flex justify-end items-end'>
          <button
            className='bg-primary-500 text-white text-xs rounded-full px-10 py-2 mt-2 w-fit font-bold'
            onClick={close}
            type='button'
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export const IntituteBibleFrom = () => {
  const { handleSubmit, register, formState: { errors }, reset, watch } = useForm<IntituteBibleData>({
    defaultValues: { modality: 'Presencial' }
  })

  const [showBancaryData, setShowBancaryData] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const modalityWatch = watch('modality')
  const fileWatch = watch('file')

  const handleOpenBancaryData = () => setShowBancaryData(true)
  const handleCloseBancaryData = () => setShowBancaryData(false)

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
      { loading && <Loading title='Cargando Inscripción' /> }

      { !loading && showBancaryData && <BancaryData close={handleCloseBancaryData} /> }

      <form onSubmit={onSubmit} className='w-full lg:w-1/2 mt-4  top-0 left-0 pt-24 lg:pt-24'>
        <div className='w-full h-full p-6 bg-white rounded-xl'>
          <span className='font-bold text-base'>Requisitos</span>
          <p className='text-sm mt-1 lg:mt-0'>
            <span className='font-bold'>1.</span> Haber concluido los 4 niveles de la EDC
          </p>

          <p className='text-sm mt-1 lg:mt-0'>
            <span className='font-bold'>2.</span> Haber realizado el pago de la matrícula: <span className='font-bold'>$10 tasa BCV</span>
          </p>

          <button
            className='bg-primary-500 text-white text-xs rounded-full px-4 py-2 mt-2 w-full font-bold'
            onClick={handleOpenBancaryData}
            type='button'
          >
            Ver Datos Bancarios
          </button>
        </div>

        <div className='w-full h-full p-6 bg-white rounded-xl mt-4'>
          <span className='font-bold text-base'>Modalidades</span>
          <p className='text-sm mt-1 lg:mt-0'>
            <span className='font-bold'>Presencial: </span> <br className='lg:hidden' /> Sábados de 9:00 am a 11:00 am
          </p>

          <p className='text-sm mt-1 lg:mt-0'>
            <span className='font-bold'>Online: </span> <br className='lg:hidden' /> Jueves de 7:30 pm a 9:00 pm
          </p>
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
                /> Presencial <span className='text-xs font-bold'>{ modalityWatch === 'Presencial' && '(Sábados de 9:00 am a 11:00 am)' }</span>
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
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
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
