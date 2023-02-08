import { useEffect, useState, createContext } from 'react'
import { firebaseAuth } from '@/lib/services/firebase/client'
import { onAuthStateChanged, User } from 'firebase/auth'

interface TCurrentUserFirebaseAuth extends User {}

export type TUserDataFirebaseAuth = {
  providerId: string | null
  firebaseUserUID: string | null
  dbUID: string | null
  displayName: string | null
  name: string | null
  lastname: string | null
  email: string | null
  phoneNumber: string | null
  photoURL: string | null
  roles: any[] | []
  shops: any[] | []
  createdAt: string | null
  updatedAt: string | null
} | null

interface UserFirebaseAuthContext {
  currentUser: TCurrentUserFirebaseAuth | null
  userData: TUserDataFirebaseAuth | null
}

export const AuthContext = createContext<UserFirebaseAuthContext | null>(null)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<TCurrentUserFirebaseAuth | null>(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState<boolean>(true)

  const formatAndUpdateUser = async (user: User) => {
    setUserData(user)
  }

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        setCurrentUser(user)

        if (userData === null) {
          formatAndUpdateUser(user)
        }
      } else {
        setCurrentUser(null)
        setUserData(null)
      }

      setLoading(false)
    })
  }, [userData])

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <div>
          <span className='text-2xl font-bold'>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ currentUser, userData }}>
      {children}
    </AuthContext.Provider>
  )
}
