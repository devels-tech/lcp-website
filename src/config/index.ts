import { USER_ROLE } from '@/lib/schema/auth'

export const APP_CONFIG = {
  USER: {
    ROLES: {
      [USER_ROLE.MEMBER]: { label: 'Miembro', value: USER_ROLE.MEMBER },
      [USER_ROLE.MODERATOR]: { label: 'Moderador', value: USER_ROLE.MODERATOR }
    }
  }
}
