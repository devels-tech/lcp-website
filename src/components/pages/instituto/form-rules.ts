export const rules = {
  fullName: {
    required: { value: true, message: 'Nombre y Apellido obligatorio' },
    maxLength: { value: 70, message: 'Maximo 70 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Nombre o Apellido no permitido' }
  },

  ci: {
    required: { value: true, message: 'Cédula obligatoria' },
    maxLength: { value: 10, message: 'Maximo 8 numeros' },
    pattern: { value: /^[0-9.]*$/i, message: 'Solo Numeros' }
  },

  email: {
    required: { value: true, message: 'Correo obligatorio' },
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Coloque un correo valido'
    }
  },

  phone: {
    required: { value: true, message: 'Telefono obligatorio' },
    maxLength: { value: 15, message: 'Maximo 15 numeros' },
    minLength: { value: 10, message: 'Minimo 10 numeros' },
    pattern: { value: /^[0-9]*$/i, message: 'Solo Numeros' }
  },

  modality: {
    required: { value: true, message: 'Modalidad obligatoria' }
  }
}
