import { toast } from 'react-toastify'
import { useForm, SubmitHandler } from 'react-hook-form'
import { rules } from './formConfig'

import { Button } from '@/components/common/Button'

type TFormContactData = {
  fullName: string
  email: string
  message: string
}

export const EmailContact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TFormContactData>()

  const onSubmit: SubmitHandler<TFormContactData> = (data) => {
    const dataNormalize = {
      fullName: data.fullName,
      email: data.email,
      message: data.message
    }

    fetch('https://eott4hh0u1tstx2.m.pipedream.net', {
      method: 'POST',
      body: JSON.stringify(dataNormalize)
    }).then(() => {
      toast('¡Mensaje enviado!', { type: 'success' })
      reset()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center text-center'>
      <h3 className='text-4xl text-secondary-500 font-black xl:text-5xl 3xl:text-6xl'>Contáctanos</h3>
      <br />
      <p className='font-medium'>Para información o petición de oración</p>
      <br />

      <section className='max-w-2xl'>
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
        {errors.fullName && <p className='text-sm text-red-400'>{errors.fullName.message}</p>}

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
          tabIndex={3}
          placeholder='Correo Electrónico'
          aria-autocomplete='list'
        />
        {errors.email && <p className='text-sm text-red-400'>{errors.email.message}</p>}

        <textarea
          className='inputText'
          aria-label='Mensaje'
          name='message'
          {...register('message', rules.message)}
          autoCapitalize='none'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          tabIndex={4}
          placeholder='Mensaje'
          aria-autocomplete='list'
          rows={10}
        />
        {errors.message && <p className='text-sm text-red-400'>{errors.message.message}</p>}
      </section>

      <br />

      <section>
        <Button classes='py-1.5' tabIndex={7} type='submit'>
          Enviar
        </Button>
      </section>

      <br />

      <section>
        <p className='text-xs font-medium md:text-sm xl:text-base'>
          Edf. Santa Fe. Nivel Mezzanina. Av. Sur 21. Entre Av. México Este 2. La Candelaria - Caracas <br />
          (A media cuadra de la Estación Bellas Artes) <br />
          Telf.: 0212-578-5969 / 0424-149-8800
        </p>
      </section>

      <br />

      <section>
        <a className='bg-secondary-500 filter hover:brightness-125 focus:brightness-125 text-white py-1.5 px-10 rounded-3xl min-w-176px font-bold xl:text-lg 4xl:text-xl xl:px-11 disabled:opacity-50 disabled:cursor-not-allowed'
          href="https://goo.gl/maps/5PxnmWpDuxjNG3f49" target="_blank" rel="noopener noreferrer"
        >
          Cómo Llegar
        </a>
      </section>
    </form>
  )
}
