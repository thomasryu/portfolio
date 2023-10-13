import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import './globals.css'

import { Navbar } from '@/components/Navbar'

// Adding font variables to be used in tailwind.config.ts
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const nunito_sans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' })

export const metadata: Metadata = {
  title: 'Thomas Sameshima | Frontend Developer',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunito_sans.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
