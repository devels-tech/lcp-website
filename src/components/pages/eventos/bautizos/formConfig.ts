export const rules = {
  fullName: {
    required: { value: true, message: 'Nombre y Apellido obligatorio' },
    maxLength: { value: 50, message: 'Maximo 50 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Nombre o Apellido no permitido' }
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

  civilState: {
    required: { value: true, message: 'Campo Requerido' }
  },

  dateBirth: {
    required: { value: true, message: 'Campo Requerido' }
  },

  lcpAsisted: {
    required: { value: true, message: 'Campo Requerido' },
    maxLength: { value: 100, message: 'Maximo 100 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' }
  },

  zone: {
    required: { value: true, message: 'Campo Requerido' },
    maxLength: { value: 100, message: 'Maximo 100 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' }
  },

  profestion: {
    required: { value: true, message: 'Campo Requerido' },
    maxLength: { value: 100, message: 'Maximo 100 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' }
  },

  timeConverted: {
    required: { value: true, message: 'Campo Requerido' },
    maxLength: { value: 100, message: 'Maximo 100 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' }
  }
}
