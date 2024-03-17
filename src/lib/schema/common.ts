import z from 'zod'

export const COMMON_SCHEMA = {
  STRING: z.string({ invalid_type_error: 'Debe ser un texto', required_error: '* Requerido' }),
  BOOLEAN: z.boolean({ invalid_type_error: 'Debe ser un booleano', required_error: '* Requerido' }),
  NUMBER: z.number({ invalid_type_error: 'Debe ser un numero', required_error: '* Requerido' })
}
