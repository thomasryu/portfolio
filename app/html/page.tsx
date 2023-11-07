import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { url } from '@/data'

import { Container } from '@/components/Container'
import { Tag } from '@/components/Tag'
import { Tooltip } from '@/components/Tooltip'

import GitHub from '@/icons/github.svg'
import LinkedIn from '@/icons/linkedin.svg'
import Location from '@/icons/location.svg'

const socials = [
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    href: url.social.linkedin,
  },
  {
    icon: GitHub,
    label: 'GitHub',
    href: url.social.github,
  },
]

const skills = [
  {
    label: 'Languages / Frameworks',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'WordPress'],
  },
  {
    label: 'Tools',
    tags: [
      'GitHub',
      'Figma',
      'Jira',
      'Vercel',
      'Segment',
      'Google Tag Manager',
      'Google Analytics 4',
      'HubSpot',
      'Hotjar',
      'Microsoft Clarity',
      'Contentful CMS',
    ],
  },
  { label: 'Growth', tags: ['Technical SEO', 'A/B Testing'] },
]

export const metadata: Metadata = {
  title: 'Thomas | Frontend Developer',
  description: "I'm a frontend developer with over 6 years of experience, specializing in growth hacking.",
  robots: {
    index: false,
  },
}

export default function HTMLPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container className="flex flex-col items-center justify-between">
        {/* Main image */}
        <Image
          className="bg-gradient-to-b from-transparent to-yellow to-70% rounded-full w-48 lg:w-56 animate-fade-in"
          src="/images/portraits/thomas-transparent.png"
          alt="Thomas"
          width={320}
          height={320}
          priority
        />

        {/* Title and description */}
        <h1 className="text-center font-bold mt-12 lg:mt-20">
          Hi, my name is{' '}
          <mark className="inline-block bg-yellow rounded px-1.5 pt-1 lg:px-2 lg:pt-1.5 lg:pb-0.5">Thomas</mark>
        </h1>
        <p className="text-xl lg:text-2xl text-center mt-2 lg:mt-3 w-auto lg:w-1/2 max-w-xl lg:max-w-2xl ">
          I&apos;m a frontend developer with over 6 years of experience, specializing in performance and scalability
          {/* <Link className="relative font-semibold hover:underline" href="/articles/growth-hacking">
            growth hacking <span className="absolute inline-block font-extrabold text-xs lg:text-sm">(?)</span>
          </Link> */}
        </p>

        <div className="relative z-0 text-md lg:text-lg mt-4 lg:mt-5 text-gray">
          <span className="flex items-center">
            <Location className="w-4 h-4 lg:w-5 lg:h-5 mr-2" /> São Paulo, Brazil
          </span>
          <div
            className="absolute top-1/2 right-full transform -translate-y-1/2 -z-10 w-3 h-[1px] mr-1 lg:mr-2 bg-gray"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-full transform -translate-y-1/2 -z-10 w-3 h-[1px] ml-1 lg:ml-2 bg-gray"
            aria-hidden="true"
          />
        </div>

        {/* Skills */}
        <h2 className="text-center mt-16 lg:mt-20">Skills:</h2>
        <div className="flex flex-col items-center mt-4 lg:mt-5 space-y-6 lg:space-y-7">
          {skills.map((skill) => (
            <div className="flex flex-col items-center" key={skill.label}>
              <h3 className="text-center">{skill.label}</h3>
              <div className="flex flex-row justify-center flex-wrap max-w-lg -m-1 mt-1">
                {skill.tags.map((tag) => (
                  <Tag className="m-1" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Socials */}
        <h2 className="text-center mt-16 lg:mt-24">Socials:</h2>
        <div className="flex flex-row mt-5 lg:mt-6 space-x-5 lg:space-x-8">
          {socials.map((social) => (
            <Link
              className="flex flex-row items-center hover:underline"
              href={social.href}
              rel="noopener noreferrer"
              key={social.label}
            >
              <social.icon className="w-6 h-6" /> <span className="text-md lg:text-lg ml-2">{social.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  )
}