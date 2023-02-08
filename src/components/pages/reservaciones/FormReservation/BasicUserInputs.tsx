import { IDataFormReservation } from '@/lib/types'
import { UseFormRegister } from 'react-hook-form'
import { rules } from './formConfig'

interface IBasicUserInputsProps {
  registerInputForm: UseFormRegister<IDataFormReservation>
  usersReservation: any[]
  errorsInputForm: {
    [x: string]: any
  }
}

export const BasicUserInputs = ({ usersReservation, errorsInputForm, registerInputForm }: IBasicUserInputsProps) => {
  return (
    <div className='w-full text-left'>
      <input
        className='inputText'
        aria-label="fullName"
        name="fullName"
        {...registerInputForm('fullName', rules.fullName)}
        type="text"
        autoCapitalize="word"
        autoComplete="on"
        tabIndex={1}
        placeholder="Nombre y Apellido"
      />
      {errorsInputForm.fullName && <p className='text-red-600'>{errorsInputForm.fullName.message}</p> }

      <input
        className='inputText mt-2'
        aria-label="Teléfono"
        name="phone"
        {...registerInputForm('phone', rules.phone)}
        type="tel"
        tabIndex={2}
        placeholder="Teléfono"
      />
      {errorsInputForm.phone && <p className='text-red-600'>{errorsInputForm.phone.message}</p>}

      <input
        className='inputText mt-2'
        aria-label="Correo Electrónico"
        name="email"
        {...registerInputForm('email', rules.email)}
        type="email"
        autoComplete="on"
        spellCheck="false"
        tabIndex={3}
        placeholder="Correo Electrónico (Opcional)"
      />
      {errorsInputForm.email && <p className="text-sm text-red-600">{errorsInputForm.email.message}</p>}
    </div>
  )
}
