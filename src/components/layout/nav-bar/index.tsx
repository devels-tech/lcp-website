import { DrawerMenu } from './drawer-menu'
import { Logo } from './logo'

export const NavBar = () => {
  return (
    <header className='z-20 sticky top-0 left-0 w-full py-2'>
      <nav className='w-full flex items-center justify-between max-w-6xl px-6 mx-auto'>
        <Logo />
        <DrawerMenu />
      </nav>
    </header>
  )
}
