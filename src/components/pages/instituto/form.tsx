import { useForm } from 'react-hook-form'
import { rules } from './form-rules'
import { handleOnlyNumbers } from '@/lib/utils/only-numbers'
import { Button } from '@/components/common/Button'
import { registerInstituteBible } from './register'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface IntituteBibleData {
  fullName: string
  ci: string
  phone: string
  email: string
  modality: string
}

export const IntituteBibleFrom = () => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<IntituteBibleData>()
  const router = useRouter()

  const onSubmit = handleSubmit(async (data: IntituteBibleData) => {
    const { data: resData } = await registerInstituteBible(data)

    if (!resData) {
      toast('¡Hubo un error!', { type: 'error' })
    }

    toast('¡Inscripccion Exitosa!', { type: 'success' })
    reset()

    router.push('/')
  })

  return (
    <form onSubmit={onSubmit} className='w-full lg:w-1/2 mt-4 lg:sticky top-0 left-0 pt-20'>
      <h6 className='font-bold text-xl lg:hidden'>Instituto Bíblico - Inscripciones</h6>
      <h6 className='font-bold text-xl hidden lg:inline-block '>Formulario</h6>

      
      <div>
        <label
          className='font-bold text-sm'
          htmlFor='fullName'
        >
          Nombre y Apellido
        </label>
        {errors.fullName && <p className='text-red-600 text-sm'>{errors.fullName.message}</p> }

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

        {errors.ci && <p className='text-red-600 text-sm'>{errors.ci.message}</p>}

          <input
            className='inputText mt-2'
            aria-label='ci'
            name='ci'
            {...register('ci', rules.ci)}
            maxLength={9}
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
        {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p> }

        <input
          className='inputText mt-2'
          aria-label='Teléfono'
          name='phone'
          {...register('phone', rules.phone)}
          onKeyPress={handleOnlyNumbers}
          type='tel'
          maxLength={11}
          tabIndex={5}
          placeholder='0412000000'
        />
      </div>

      <div className='mt-1 mb-4'>
        <label
          className='font-bold text-sm'
          htmlFor='modality'
        >
          Modalidad
        </label>

        {errors.modality && <p className='text-sm text-red-600'>{errors.modality.message}</p>}

        <select
          id='modality'
          name='modality'
          tabIndex={6}
          className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
          defaultValue='Presencial'
          placeholder='Online'
          {...register('modality', rules.modality)}
        >
          <option className='text-black' value='Presencial'>Presencial</option>
          <option className='text-black' value='Online'>Online</option>
        </select>
      </div>

      <Button classes='w-full' type='submit'>
        Enviar
      </Button>
    </form>
  )
}