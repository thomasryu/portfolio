import type { Metadata } from 'next'

import { url } from '@/data'

import { Container } from '@/components/Container'

import GitHub from '@/icons/github.svg'
import LinkedIn from '@/icons/linkedin.svg'

export const metadata: Metadata = {
  title: 'Thomas | Frontend Developer',
  description: "I'm a frontend developer with over 6 years of experience, specializing in growth hacking.",
}

export default function HomePage() {
  return (
    <main className="relative">
      <Container className="mt-[8vh] lg:mt-[5vh] 2xl:mt-[12vh] flex flex-col items-center">
        <h1 className="text-center">
          Hi, my name is <mark className="inline-block bg-yellow rounded pt-1.5 px-2 pb-0.5">Thomas</mark>
        </h1>
        <p className="text-xl lg:text-2xl text-center mt-2 lg:mt-3 w-auto lg:w-3/5 max-w-xl lg:max-w-2xl">
          I&apos;m a frontend developer with over 6 years of experience, specializing in performance and scalability
        </p>
      </Container>
    </main>
  )
}
