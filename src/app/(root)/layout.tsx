import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import '@/styles/globals.css'
import { NavBar } from '@/components/layout/nav-bar'
import { ThemeProvider } from '@/lib/providers/theme'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Casa de mi Padre',
  description: 'La Casa de mi Padre - Donde todos tienen un lugar'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={`${inter.className} relative bg-zinc-50 dark:bg-zinc-900`} suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>

      <Toaster />

      <Footer />
    </html>
  )
}
