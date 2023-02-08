import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '@/lib/contexts/UserFirebaseAuth'

export const AuthRequired = ({ children }) => {
  const authFirebase = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    !authFirebase?.currentUser && router.push('/login')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authFirebase?.currentUser])

  if (authFirebase?.currentUser) {
    return <>{children}</>
  } else {
    return <></>
  }
}
