import Image from 'next/image'
import Link from 'next/link'

import { projects } from '@/data'

import { Container } from '@/components/Container'
import { Tag } from '@/components/Tag'

export default function Projects() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1 className="text-3xl lg:text-4xl font-bold">Projects</h1>

        <div className="mt-10 lg:mt-14 space-y-4">
          {projects.map((project, index) => (
            <div key={project.name}>
              {/* Label, Title, Date */}
              <span className="text-xs font-serif font-bold uppercase">{project.label}</span>
              <div className="flex flex-row items-end">
                <Link href={project.href} target="_blank" rel="noopener noreferrer">
                  <h1 className="text-4xl lg:text-5xl mt-1">{project.name}</h1>
                </Link>
                <div className="text-xs lg:text-lg text-gray mb-1.5 ml-2 lg:mb-0.5 lg:ml-3">
                  (
                  {typeof project.date === 'string' ? (
                    <span>{project.date}</span>
                  ) : (
                    <>
                      <span>{project.date.start}</span>
                      {' - '}
                      <span>{project.date.end}</span>
                    </>
                  )}
                  )
                </div>
              </div>

              {/* Images */}
              <div className="flex flex-row items-center space-x-2 lg:space-x-5 mt-8">
                {[project.image].flat().map((image) => (
                  <Link
                    className={`block shrink min-w-0 ${
                      image.type === 'mobile' ? 'w-mobile' : 'w-desktop'
                    } rounded overflow-hidden shadow lg:shadow-lg lg:hover:shadow transition-shadow`}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={image.src}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.type === 'mobile' ? 390 : 1366}
                      height={840}
                      priority={index === 0}
                    />
                  </Link>
                ))}
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl max-w-2xl lg:max-w-5xl mt-7 lg:mt-9">{project.description}</p>
              {project.items && (
                <ul className="text-lg mt-5 lg:mt-6 space-y-2 lg:space-y-1">
                  {project.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="flex flex-row justify-start flex-wrap max-w-2xl -m-1 mt-6 lg:mt-7">
                {project.tags.map((tag) => (
                  <Tag className="m-1" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}
