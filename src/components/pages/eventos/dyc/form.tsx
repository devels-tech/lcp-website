import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { useState } from 'react'

import { registerUserDyc } from './registerUserDyc'
import { handleOnlyNumbers } from '@/lib/utils/only-numbers'
import { rules } from './formConfig'

import { Loading } from '@/components/common/Loaders/global-loading'
import { Button } from '@/components/common/Button'

export enum LcpHeadQuarters {
  LCP_CARACAS = 'LCP - Caracas',
  LCP_SJM = 'LCP - San Juan de los Morros',
  LCP_LA_PASTORA = 'LCP - La Pastora',
  LCP_CHARALLAVE = 'LCP - Charallave',
  LCP_ALTAMIRA = 'LCP - Altamira',
  LCP_GUAIRA = 'LCP - La Guaira',
  LCP_MARACAY = 'LCP - Maracay'
}

export interface IDataFormDyc {
  fullName: string
  phone: string
  email: string
  dateBirth: string
  ci: string
  headquarters: LcpHeadQuarters
}

export const FormDyc = () => {
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataFormDyc>({
    defaultValues: {
      headquarters: LcpHeadQuarters.LCP_CARACAS
    }
  })
  const router = useRouter()

  const onSubmit = async (data: IDataFormDyc) => {
    setLoading(true)

    const { data: resData } = await registerUserDyc(data)

    if (!resData) {
      toast('¡Hubo un error!', { type: 'error' })
      reset()
      setLoading(false)
      router.push('/')
      return
    }

    toast('¡Inscripción Exitosa!', { type: 'success' })
    reset()
    setLoading(false)
    router.push('/')
  }

  return (
    <>
      { loading && <Loading title='Cargando Inscripción' /> }

      <form className='w-full mx-auto text-center px-4 mt-4' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-4xl text-secondary-500 font-black xl:text-5xl 3xl:text-6xl'>Congreso de Danza</h3>
        <span className='font-black text-primary-400 text-xl'>Hacia aguas mas profundas</span> <br />
        <span className='text-sm'>Sabado 19 de Octubre de 10am a 5pm</span>

        <div className='text-left mt-6'>
          <label
            className='font-bold'
            htmlFor='level'
          >
            Sede LCP
          </label>

          <p className='text-xs'>Seleccione la sede a la que pertenece</p>

          <select
            id='headquarters'
            name='headquarters'
            tabIndex={1}
            className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
            placeholder='Sede LCP'
            {...register('headquarters', rules.headquarters)}
          >
            <option className='text-black' value={LcpHeadQuarters.LCP_CARACAS}>{LcpHeadQuarters.LCP_CARACAS}</option>
            <option className='text-black' value={LcpHeadQuarters.LCP_GUAIRA}>{LcpHeadQuarters.LCP_GUAIRA}</option>
            <option className='text-black' value={LcpHeadQuarters.LCP_LA_PASTORA}>{LcpHeadQuarters.LCP_LA_PASTORA}</option>
            <option className='text-black' value={LcpHeadQuarters.LCP_ALTAMIRA}>{LcpHeadQuarters.LCP_ALTAMIRA}</option>
            <option className='text-black' value={LcpHeadQuarters.LCP_CHARALLAVE}>{LcpHeadQuarters.LCP_CHARALLAVE}</option>
            <option className='text-black' value={LcpHeadQuarters.LCP_SJM}>{LcpHeadQuarters.LCP_SJM}</option>
            <option className='text-black' value={LcpHeadQuarters.LCP_MARACAY}>{LcpHeadQuarters.LCP_MARACAY}</option>
          </select>
          {errors?.headquarters && <p className='text-sm text-red-600'>{errors?.headquarters.message}</p>}
        </div>

        <div className='text-left'>
          <div className='w-full'>
            <label
              className='font-bold text-sm'
              htmlFor='fullName'
            >
              Nombre completo {errors?.fullName && <span className='text-xs text-red-600 font-bold'>{errors?.fullName.message}</span> }
            </label>

            <input
              aria-label='fullName'
              name='fullName'
              {...register('fullName', rules.fullName)}
              type='text'
              autoCapitalize='word'
              className='inputText mt-1'
              autoComplete='on'
              tabIndex={2}
              placeholder='Nombre y Apellido'
            />
          </div>

          <div className='w-full mt-1'>
            <label
              className='font-bold text-sm'
              htmlFor='fullName'
            >
               Cédula {errors?.fullName && <span className='text-xs text-red-600 font-bold'>{errors?.fullName.message}</span> }
            </label>

            <input
              className='inputText mt-1'
              aria-label='ci'
              name='ci'
              {...register('ci', rules.ci)}
              type='text'
              autoCapitalize='word'
              onKeyPress={handleOnlyNumbers}
              autoComplete='on'
              maxLength={8}
              tabIndex={3}
              placeholder='00000000'
            />
          </div>

          <div className='w-full mt-1'>
            <label
              className='font-bold text-sm'
              htmlFor='phone'
            >
              Teléfono {errors?.phone && <span className='text-xs text-red-600 font-bold'>{errors?.phone.message}</span>}
            </label>

            <input
              className='inputText mt-1'
              aria-label='Teléfono'
              name='phone'
              {...register('phone', rules.phone)}
              maxLength={11}
              onKeyPress={handleOnlyNumbers}
              type='tel'
              tabIndex={4}
              placeholder='04120000000'
            />
          </div>

          <div className='w-full mt-1'>
            <label
              className='font-bold text-sm'
              htmlFor='email'
            >
              Correo electrónico {errors?.email && <span className='text-xs text-red-600 font-bold'>{errors?.email.message}</span>}
            </label>

            <input
              className='inputText mt-1'
              aria-label='Correo Electrónico'
              name='email'
              {...register('email', rules.email)}
              type='email'
              autoComplete='on'
              spellCheck='false'
              tabIndex={5}
              placeholder='usuario@email.com'
            />
          </div>

          <div className='mt-1'>
            <label
              className='font-bold text-sm'
              htmlFor='dateBirth'
            >
              Fecha de nacimiento {errors?.dateBirth && <span className='text-xs text-red-600 font-bold'>{errors?.dateBirth.message}</span>}
            </label>

            <input
              type='date'
              id='dateBirth'
              name='dateBirth'
              min='1960-01-01'
              max='2018-12-31'
              {...register('dateBirth', rules.dateBirth)}
              className='inputText mt-1'
              tabIndex={6}
            />
          </div>
        </div>

        <Button
          classes='bg-primary-500 text-white text-xs rounded-full px-4 py-2 mt-2 w-full font-bold'
          tabIndex={7} type='submit'
        >
          Registrar
        </Button>
      </form>
    </>
  )
}
