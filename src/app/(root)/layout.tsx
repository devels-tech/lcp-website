import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Casa de mi Padre',
  description: 'La Casa de mi Padre - Donde todos tienen un lugar'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  )
}
