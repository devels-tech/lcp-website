import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLink = ({ children, href }) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        'block w-full px-4 py-2 text-2xl font-bold rounded-md relative overflow-clip',
        'hover:text-blue-500 hover:bg-blue-500/20',
        pathname === href
          ? 'before:h-12 before:w-1 before:block before:absolute before:left-0 before:top-0 before:content-[""] before:bg-blue-500 text-blue-500 bg-blue-500/20'
          : ''
      )}
    >
      {children}
    </Link>
  )
}
