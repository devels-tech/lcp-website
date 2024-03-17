/* eslint-disable no-unused-vars */
import { z } from 'zod'

import { COMMON_SCHEMA } from './common'

const { STRING } = COMMON_SCHEMA

export enum USER_ROLE {
  MEMBER = 'Miembro',
  MODERATOR = 'Moderador'
}

export const userRole = z.nativeEnum(USER_ROLE)

export const authSchema = z.object({
  firstName: STRING,
  lastName: STRING,
  email: STRING,
  phone: STRING,
  role: userRole
})

export const loginSchema = z.object({
  email: STRING,
  password: STRING
})

export interface IAuth extends z.infer<typeof authSchema> {}
export interface ILogin extends z.infer<typeof loginSchema> {}
