import Image from 'next/image'

import { Container } from '@/components/Container'

export default function About() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>About</h1>

        <div className="flex min-h-screen items-center justify-center">
          <div className="flex items-center justify-center gap-20 [filter:url(#gooey)]">
            <div className="animate-movealt h-60 w-60 rounded-full bg-zinc-300 bg-gradient-to-br from-white to-zinc-400 shadow-inner shadow-white"></div>

            <div className="animate-move h-40 w-40 rounded-full bg-zinc-300 bg-gradient-to-br from-white to-zinc-400 shadow-inner shadow-white"></div>
          </div>
        </div>

        <svg>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            <feColorMatrix
              values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 90 -25"
            />
          </filter>
        </svg>
      </Container>
    </main>
  )
}
