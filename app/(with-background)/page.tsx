import type { Metadata } from 'next'

import { url } from '@/data'

import GitHub from '@/icons/github.svg'
import LinkedIn from '@/icons/linkedin.svg'

export const metadata: Metadata = {
  title: 'Thomas | Frontend Developer',
  description: "I'm a frontend developer with over 6 years of experience, specializing in growth hacking.",
}

export default function HomePage() {
  return (
    <main className="h-full pt-16 lg:pt-32">
      {/* <Container className="flex flex-col items-center justify-between"></Container> */}
    </main>
  )
}
