import { rules } from './formConfig'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '@/components/common/Button'
import { useState } from 'react'
import { registerUserEDC } from './registerUserEDC'

interface IDataFormReservation {
  fullName: string
  email: string
  ci: string
  levelEDC: string
  phone: string
}

export const FormEDCReservations = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataFormReservation>()
  const [inputCI, setInputCI] = useState('')

  const onSubmit = async (data: IDataFormReservation) => {
    const { data: resData } = await registerUserEDC(data)

    if (!resData) {
      toast('¡Hubo un error!', { type: 'error' })
    }

    toast('¡Inscripccion Exitosa!', { type: 'success' })
    setInputCI('')
    reset()
  }

  const handleInputRegex = (evt) => {
    const value = evt.target.value.replace(/[^0-9.]/g, '')
    setInputCI(value)
  }

  return (
    <form className='w-full max-w-lg mx-auto text-center' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='text-4xl text-secondary-500 font-black xl:text-5xl 3xl:text-6xl'>Escuela de Crecimiento <br /> Inscripciones</h3>
      <span className='text-red-500'>Inscripciones solo para bautizados</span>
      <br /><br />

      <div className='text-left'>
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
        {errors.fullName && <p className='text-red-600'>{errors.fullName.message}</p> }

        <input
          className='inputText mt-2'
          aria-label='ci'
          name='ci'
          {...register('ci', rules.ci)}
          maxLength={10}
          minLength={7}
          type='text'
          tabIndex={2}
          placeholder='Cédula de Identidad'
          onInput={e => handleInputRegex(e)} value={inputCI}
        />
        {errors.ci && <p className='text-red-600'>{errors.ci.message}</p>}

        <input
          className='inputText mt-2'
          aria-label="Teléfono"
          name="phone"
          {...register('phone', rules.phone)}
          type="tel"
          tabIndex={2}
          placeholder="Teléfono"
        />
        {errors.phone && <p className='text-red-600'>{errors.phone.message}</p> }

        <input
          className='inputText mt-2'
          aria-label='Correo Electrónico'
          name='email'
          {...register('email', rules.email)}
          type='email'
          autoComplete='on'
          spellCheck='false'
          tabIndex={4}
          placeholder='Correo Electrónico'
        />
        {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}

        <select
          id='levelEDC'
          name='levelEDC'
          tabIndex={5}
          className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
          defaultValue={1}
          {...register('levelEDC', rules.levelEDC)}
        >
          <option className='text-black' value={1}>Nivel 1</option>
          <option className='text-black' value={2}>Nivel 2</option>
          <option className='text-black' value={3}>Nivel 3</option>
          <option className='text-black' value={4}>Nivel 4</option>
        </select>
        {errors.levelEDC && <p className='text-sm text-red-600'>{errors.levelEDC.message}</p>}
      </div>

      <Button classes='py-1 mt-4' tabIndex={6} type='submit'>
        Registrar
      </Button>
    </form>
  )
}
