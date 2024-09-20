export const rules = {
  fullName: {
    required: { value: true, message: '* Requerido' },
    maxLength: { value: 50, message: '* Maximo 50 letras' },
    minLength: { value: 3, message: '* Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: '* Nombre o apellido no permitido' }
  },

  ci: {
    required: { value: true, message: '* Requerido' },
    maxLength: { value: 8, message: '* Maximo 8 caracteres' },
    minLength: { value: 7, message: '* Minimo 7 caracteres' },
  },

  phone: {
    required: { value: true, message: '* Requerido' },
    maxLength: { value: 15, message: '* Maximo 15 numeros' },
    minLength: { value: 10, message: '* Minimo 10 numeros' },
    pattern: { value: /^[0-9]*$/i, message: '* Solo Numeros' }
  },

  email: {
    required: { value: true, message: '* Requerido' },
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: '* Coloque un correo valido'
    }
  },

  headquarters: {
    required: { value: true, message: '* Requerido' }
  },

  dateBirth: {
    required: { value: true, message: '* Requerido' }
  },
}
