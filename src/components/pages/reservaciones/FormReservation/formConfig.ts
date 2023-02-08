import { IFormReservationRules } from '@/lib/types'

export const rules: IFormReservationRules = {
  name: {
    required: { value: true, message: 'Nombre obligatorio' },
    maxLength: { value: 50, message: 'Maximo 50 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Nombre no permitido' }
  },

  fullName: {
    required: { value: true, message: 'Apellido obligatorio' },
    maxLength: { value: 50, message: 'Maximo 50 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Apellido no permitido' }
  },

  phone: {
    required: { value: true, message: 'Telefono obligatorio' },
    maxLength: { value: 15, message: 'Maximo 15 numeros' },
    minLength: { value: 10, message: 'Minimo 10 numeros' },
    pattern: { value: /^[0-9]*$/i, message: 'Solo Numeros' }
  },

  email: {
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Coloque un correo valido'
    }
  },

  chairs: {
    required: { value: true, message: 'Elija el numero de reservaciones' }
  },

  kidChairs: {
    required: { value: true, message: 'Elija el numero de reservaciones' }
  },

  worship: {
    required: { value: true, message: 'Elija un horario' }
  }
}
