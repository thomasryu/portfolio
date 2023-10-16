import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/data'

import { Container } from '@/components/Container'

export default function Projects() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1 className="text-3xl lg:text-4xl font-bold">Projects</h1>

        <div className="mt-5 lg:mt-6">
          {projects.map((project) => (
            <div key={project.name}>
              {/* Label, Title, Date */}
              <span className="text-xs font-serif font-bold uppercase">{project.label}</span>
              <Link href={project.href}>
                <h1>{project.name}</h1>
              </Link>
              <div className="">
                {typeof project.date === 'string' ? (
                  <span>{project.date}</span>
                ) : (
                  <>
                    <span>{project.date.start}</span>
                    {' - '}
                    <span>{project.date.end}</span>
                  </>
                )}
              </div>

              {/* Images */}
              <div>
                {[project.image].flat().map((image) => (
                  <Image
                    className="w-48 lg:w-56"
                    src={image.src}
                    alt={image.alt}
                    width={image.type === 'mobile' ? 390 : 1536}
                    height={image.type === 'mobile' ? 844 : 864}
                  />
                ))}
              </div>

              {/* Description */}
              <p>{project.description}</p>

              {/* Tags */}
              <div>
                {project.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
