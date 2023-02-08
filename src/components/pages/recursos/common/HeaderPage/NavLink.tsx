import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavLink = ({ href, label, classes = '' }) => {
  const router = useRouter()

  return (
    <Link
      href={`/recursos${href}`}
      className={`font-bold ${router.asPath === `/recursos${href}` ? 'text-secondary-500' : 'text-white hover:text-secondary-500'} ${classes}`}
    >
      {label}
    </Link>
  )
}
