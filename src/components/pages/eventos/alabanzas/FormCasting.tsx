import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/common/Button'

import { rules } from './formConfig'
import { registerUserCasting } from './registerUserCasting'
import { useState } from 'react'
import { Spinner } from '@/components/common/Loaders'

interface IDataFormCasting {
  firstName: string
  lastName: string
  phone: string
  email: string
  address: string
  typeCasting: 'SINGING' | 'PIANIST' | 'GUITARIST' | 'BASSIST' | 'DRUMMER' | 'TRUMPET' | 'TROMBONE' | 'SAXOPHONE' | 'OTHER'
}

export const FormCasting = () => {
  const router = useRouter()
  const [isLoading, setIsloading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataFormCasting>()

  const onSubmit = async (data: IDataFormCasting) => {
    setIsloading(true)

    const { data: resData } = await registerUserCasting(data)

    if (!resData) {
      toast('¡Hubo un error!', { type: 'error' })
      setIsloading(false)
      return
    }

    toast('¡Inscripcción Exitosa! Pronto contactaremos contigo', { type: 'success' })
    reset()

    setIsloading(false)
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className='w-full flex flex-col justify-center items-center'>
        <span className='text-2xl font-bold mb-3'>Cargando Informacion</span>
        <Spinner />
      </div>
    )
  }

  return (
    <form className='w-full max-w-lg mx-auto text-center pr-4 pl-8' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='text-4xl text-secondary-500 font-black xl:text-5xl 3xl:text-6xl'>
        Ministerio de Alabanza<br /> Audiciones
      </h3>

      <div className='mt-4'>
        <span>
          <strong>Lugar:</strong> Iglesia La Casa de mi Padre <br />
          <strong>Fecha:</strong> Sabado 22/04/2023 <br />
          <strong>Hora:</strong> 11:00 am
        </span>
      </div>

      <div className='text-left mt-2'>
        <input
          className='inputText'
          aria-label='firstName'
          name='firstName'
          {...register('firstName', rules.firstName)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={1}
          placeholder='Nombre'
        />
        {errors.firstName && <p className='text-red-600'>{errors.firstName.message}</p> }

        <input
          className='inputText'
          aria-label='lastName'
          name='lastName'
          {...register('lastName', rules.lastName)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={2}
          placeholder='Apellido'
        />
        {errors.lastName && <p className='text-red-600'>{errors.lastName.message}</p> }

        <input
          className='inputText mt-2'
          aria-label='Teléfono'
          name='phone'
          {...register('phone', rules.phone)}
          type='tel'
          tabIndex={3}
          placeholder='Teléfono'
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

        <input
          className='inputText'
          aria-label='zone'
          name='zone'
          {...register('address', rules.address)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={5}
          placeholder='Zona donde vivo'
        />
        {errors.address && <p className='text-red-600'>{errors.address.message}</p> }

        <div className='mt-1 mb-4'>
          <label
            className='font-bold'
            htmlFor='typeCasting'
          >
            ¿Instrumento a audicionar?
          </label>

          <select
            id='typeCasting'
            name='typeCasting'
            tabIndex={6}
            className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
            defaultValue='SINGING'
            placeholder='SINGING'
            {...register('typeCasting', rules.typeCasting)}
          >
            <option className='text-black' value='PIANIST'>Piano</option>
            <option className='text-black' value='SINGING'>Canto</option>
            <option className='text-black' value='GUITARIST'>Guitarra</option>
            <option className='text-black' value='BASSIST'>Bajo</option>
            <option className='text-black' value='DRUMMER'>Bateria</option>
            <option className='text-black' value='TRUMPET'>Trompeta</option>
            <option className='text-black' value='TROMBONE'>Trombon</option>
            <option className='text-black' value='SAXOPHONE'>Saxofon</option>
            <option className='text-black' value='PERCUSION'>Percusión</option>
            <option className='text-black' value='OTHER'>Otro</option>
          </select>
          {errors.typeCasting && <p className='text-sm text-red-600'>{errors.typeCasting.message}</p>}
        </div>
      </div>

      <Button classes='py-1 mt-2 w-full' tabIndex={10} type='submit'>
        Registrar
      </Button>
    </form>
  )
}
