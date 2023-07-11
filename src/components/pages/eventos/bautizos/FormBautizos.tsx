import { rules } from './formConfig'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '@/components/common/Button'
import { registerUserBautizos } from './registerUserBautizos'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

interface IDataFormReservation {
  fullName: string
  phone: string
  email: string
  zone: string
  dateBirth: string
  civilState: string
  profestion: string
  timeConverted: string
  lcpAsisted: string
}

export const FormBautizos = () => {
  const router = useRouter()
  const [showGuide, setShowGuide] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IDataFormReservation>()

  const onSubmit = async (data: IDataFormReservation) => {
    const { data: resData } = await registerUserBautizos(data)

    if (!resData) {
      toast('¡Hubo un error!', { type: 'error' })
    }

    toast('¡Inscripccion Exitosa!', { type: 'success' })
    reset()
    setShowGuide(true)
  }

  if (showGuide) {
    return (
      <div className='text-center'>
        <span className='text-5xl font-black'>Guia Un Nuevo Comienzo</span>
        <br /><br />
        <span class="text-3xl">Las clases comenzarán el domingo 6 de agosto en LCP</span>
        <br /><br />
        <span class="text-3xl">Para más información contactar con Grismeda Ortiz (04142142517)</span>
        <a
          href='https://drive.google.com/file/d/1VlImZmqdX3oRZhdiiq-GTht85WUgKSA5/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => router.push('/')}
          className='bg-secondary-500 filter hover:brightness-125 focus:brightness-125 text-white py-1 px-10 rounded-3xl min-w-176px font-bold xl:text-lg 4xl:text-xl xl:px-11 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          Descargar Guia
        </a>

        <br /><br />

        <Link href='/' className='text-lg underline text-secondary-500 xl:text-xl'>
          Ir al inicio
        </Link>
      </div>
    )
  }

  return (
    <form className='w-full max-w-lg mx-auto text-center px-4' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='text-4xl text-secondary-500 font-black xl:text-5xl 3xl:text-6xl'>Inscripciones de <br /> Bautizos</h3>
      {/* <span className='text-red-500'>Inscripciones solo para bautizados</span> */}
      {/* <br /> */}
      <br />

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
          aria-label='Teléfono'
          name='phone'
          {...register('phone', rules.phone)}
          type='tel'
          tabIndex={2}
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
          tabIndex={3}
          placeholder='Correo Electrónico'
        />
        {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}

        <input
          className='inputText'
          aria-label='zone'
          name='zone'
          {...register('zone', rules.zone)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={4}
          placeholder='Zona donde vivo'
        />
        {errors.zone && <p className='text-red-600'>{errors.zone.message}</p> }

        <div className='mt-4'>
          <label
            className='font-bold'
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

          {errors.dateBirth && <p className='text-sm text-red-600'>{errors.dateBirth.message}</p>}
        </div>

        <div className='mt-1 mb-4'>
          <label
            className='font-bold'
            htmlFor='civilState'
          >
            Estado Civil
          </label>

          <select
            id='civilState'
            name='civilState'
            tabIndex={6}
            className='relative w-full px-3 py-1.5 my-2 bg-[rgba(255,255,255,.13)] rounded-2xl border border-solid border-black outline-none appearance-none leading-8'
            defaultValue='Soltero/a'
            placeholder='Soltero/a'
            {...register('civilState', rules.civilState)}
          >
            <option className='text-black' value='Soltero/a'>Soltero/a</option>
            <option className='text-black' value='Casado/a'>Casado/a</option>
            <option className='text-black' value='Divorsiado/a'>Divorsiado/a</option>
            <option className='text-black' value='Divorsiado/a'>Viudo/a</option>
          </select>
          {errors.civilState && <p className='text-sm text-red-600'>{errors.civilState.message}</p>}
        </div>

        <input
          className='inputText'
          aria-label='profestion'
          name='profestion'
          {...register('profestion', rules.profestion)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={7}
          placeholder='Profesion u Oficio'
        />
        {errors.profestion && <p className='text-red-600'>{errors.profestion.message}</p> }

        <input
          className='inputText'
          aria-label='timeConverted'
          name='timeConverted'
          {...register('timeConverted', rules.timeConverted)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={8}
          placeholder='Tiempo de Convertido'
        />
        {errors.timeConverted && <p className='text-red-600'>{errors.timeConverted.message}</p> }

        <input
          className='inputText'
          aria-label='lcpAsisted'
          name='lcpAsisted'
          {...register('lcpAsisted', rules.lcpAsisted)}
          type='text'
          autoCapitalize='word'
          autoComplete='on'
          tabIndex={9}
          placeholder='¿Desde cuando asiste a LCP?'
        />
        {errors.lcpAsisted && <p className='text-red-600'>{errors.lcpAsisted.message}</p> }
      </div>

      <Button disabled={showGuide} classes='py-1 mt-4' tabIndex={10} type='submit'>
        Registrar
      </Button>
    </form>
  )
}
