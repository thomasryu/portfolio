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
      {/* <Container className="flex flex-col items-center justify-between"></Container> */}
    </main>
  )
}
