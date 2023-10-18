import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'

import './globals.css'

import { Navbar } from '@/components/Navbar'

// Adding font variables to be used in tailwind.config.ts
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const nunito_sans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito-sans' })

export const metadata: Metadata = {
  title: 'Thomas | Frontend Developer',
  description: "I'm a frontend developer with over 6 years of experience, specializing in growth marketing.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunito_sans.variable}`}>
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
