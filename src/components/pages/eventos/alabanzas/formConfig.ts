// Casting {
//   firstName: string
//   lastName: string
//   phone: string
//   email: string
//   address: string
//   typeCasting: 'SINGING' | 'PIANIST' | 'GUITARIST' | 'BASSIST' | 'DRUMMER' | 'TRUMPET' | 'TROMBONE' | 'SAXOPHONE' | 'OTHER'
// }

export const rules = {
  firstName: {
    required: { value: true, message: 'Nombre obligatorio' },
    maxLength: { value: 50, message: 'Maximo 50 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Nombre no permitido' }
  },

  lastName: {
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
    required: { value: true, message: 'Correo obligatorio' },
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Coloque un correo valido'
    }
  },

  address: {
    required: { value: true, message: 'Campo Requerido' },
    maxLength: { value: 100, message: 'Maximo 100 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' }
  },

  typeCasting: {
    required: { value: true, message: 'Campo Requerido' }
  }
}
