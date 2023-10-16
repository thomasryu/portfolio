import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/data'

import { Container } from '@/components/Container'

export default function Projects() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1 className="text-3xl lg:text-4xl font-bold">Projects</h1>

        <div className="mt-10 lg:mt-12">
          {projects.map((project) => (
            <div key={project.name}>
              {/* Label, Title, Date */}
              <span className="text-xs font-serif font-bold uppercase">{project.label}</span>
              <div className="flex flex-row items-end">
                <Link href={project.href}>
                  <h1 className="text-4xl lg:text-5xl mt-1">{project.name}</h1>
                </Link>
                <div className="text-xs lg:text-lg text-gray mb-1.5 ml-2 lg:mb-0.5 lg:ml-3">
                  (
                  {typeof project.date === 'string' ? (
                    <span>{project.date}</span>
                  ) : (
                    <>
                      <span>{project.date.start}</span>
                      {'-'}
                      <span>{project.date.end}</span>
                    </>
                  )}
                  )
                </div>
              </div>

              {/* Images */}
              <div className="flex flex-row items-center space-x-2 lg:space-x-5 mt-5">
                {[project.image].flat().map((image) => (
                  <Image
                    className={`block shrink min-w-0 ${
                      image.type === 'mobile' ? 'w-mobile' : 'w-desktop'
                    } rounded shadow-md`}
                    src={image.src}
                    alt={image.alt}
                    width={image.type === 'mobile' ? 390 : 1366}
                    height={840}
                    key={image.src}
                  />
                ))}
              </div>

              {/* Description */}
              <p className="text-lg mt-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-row justify-start flex-wrap max-w-lg -m-1 mt-6">
                {project.tags.map((tag) => (
                  <span className="text-white bg-black px-2 py-1 rounded m-1" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
