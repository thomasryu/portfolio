import { gallery } from '@/data'

import { Container } from '@/components/Container'
import { Gallery } from '@/components/Gallery'

export default function GalleryPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>Gallery</h1>

        <p className="text-lg lg:text-xl max-w-xl lg:max-w-4xl mt-10 lg:mt-14">
          Since 2021 during the pandemic, I&apos;ve started doing digital illustrations (and some 3D modeling) as a
          hobby to de-stress and pass the time. These are some of the pieces I&apos;ve created :)
        </p>

        <Gallery className="mt-7 lg:mt-9 w-full" images={gallery} />
      </Container>
    </main>
  )
}
