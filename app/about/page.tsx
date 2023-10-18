import { Container } from '@/components/Container'
import { Gallery } from '@/components/Gallery'

export default function About() {
  const images = [
    {
      src: '/images/projects/cobli-mobile.png',
      alt: '',
      size: {
        width: 390,
        height: 840,
      },
    },
    {
      src: '/images/projects/cobli-desktop.png',
      alt: '',
      size: {
        width: 1366,
        height: 840,
      },
    },
  ]
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>About</h1>

        <Gallery className="w-full h-48" images={images} />
      </Container>
    </main>
  )
}
