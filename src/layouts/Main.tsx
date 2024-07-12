import { ReactNode } from '@/lib/types'

import { Navbar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className='w-full relative min-h-screen bg-zinc-50'>
        <Navbar />
        {children}
      </main>

      <Footer/>
    </>
  )
}

export const getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>
export default MainLayout
