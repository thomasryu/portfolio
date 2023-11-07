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
}

export default function HomePage() {
  return (
    <main className="h-full pt-16 lg:pt-32">
      <Container className="flex flex-col items-center justify-between">
        {/* Title and description */}
        <h1 className="text-center font-bold">
          Hi, my name is{' '}
          <mark className="inline-block bg-yellow rounded px-1.5 pt-1 lg:px-2 lg:pt-1.5 lg:pb-0.5">Thomas</mark>
        </h1>
        <p className="text-xl lg:text-2xl text-center mt-2 lg:mt-3 w-auto lg:w-1/2 max-w-xl lg:max-w-2xl ">
          I&apos;m a frontend developer with over 6 years of experience, specializing in performance and scalability
          {/* <Link className="relative font-semibold hover:underline" href="/articles/growth-hacking">
            growth hacking <span className="absolute inline-block font-extrabold text-xs lg:text-sm">(?)</span>
          </Link> */}
        </p>
      </Container>
    </main>
  )
}
