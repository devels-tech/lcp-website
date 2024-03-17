import { create } from 'zustand'

import { IAuth } from '@/lib/schema/auth'

interface AuthStore {
  auth: IAuth
  setAuth: (auth: IAuth) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  auth: null,
  setAuth: (auth) => set(() => ({ auth }))
}))
