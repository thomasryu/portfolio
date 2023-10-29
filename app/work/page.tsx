import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { articles, projects } from '@/data'

import { Container } from '@/components/Container'
import { Tag } from '@/components/Tag'

export const metadata: Metadata = {
  title: 'Thomas | Work',
  description: "Some of the projects I've worked on and articlesover the years as a frontend developer.",
}

export default function ProjectsPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-bold">Projects</h2>

        <div className="mt-10 lg:mt-14 space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div key={project.name}>
              {/* Label, Title, Date */}
              <span className="text-xs font-serif font-bold uppercase">{project.label}</span>
              <div className="flex flex-row items-end">
                <Link href={project.href} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-4xl lg:text-5xl mt-1">{project.name}</h2>
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
                {[project.images].flat().map((image) => (
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
                      className="bg-light-gray animate-fade-in"
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
              <p
                className={`text-lg lg:text-xl max-w-2xl mt-7 lg:mt-9 ${
                  [project.images].flat().length > 1 ? 'lg:max-w-5xl' : 'lg:max-w-3xl'
                }`}
              >
                {project.description}
              </p>
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

        <span className="block bg-gray w-2/5 h-[1px] mt-16 mb-14 lg:mt-24 lg:mb-20" aria-hidden="true"></span>

        <h2 className="text-3xl lg:text-4xl font-bold">Articles</h2>
        <ul className="p-0 mt-10 lg:mt-14 space-y-5 lg:space-y-6 list-none">
          {articles.map((article) => (
            <li key={article.href}>
              <Link
                className="flex items-start text-lg lg:text-xl font-semibold hover:underline"
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <article.icon className="shrink-0 w-6 h-6 mt-0.5 mr-3" /> {article.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}