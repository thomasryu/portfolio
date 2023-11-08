import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { url } from '@/data'
import { contact } from '@/data/contact'

import { Container } from '@/components/Container'
import { Tag } from '@/components/Tag'
import { Tooltip } from '@/components/Tooltip'

import Cloud from '@/icons/cloud-download.svg'
import GitHub from '@/icons/github.svg'
import LinkedIn from '@/icons/linkedin.svg'
import Location from '@/icons/location.svg'
import Mail from '@/icons/mail.svg'

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
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Three.js', 'WordPress'],
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
  { label: 'Growth', tags: ['Technical SEO', 'A/B Testing', 'Performance Optimization'] },
]

export const metadata: Metadata = {
  title: 'Thomas | About me',
  description: 'A little about me as a professional',
}

export default function HomePage() {
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
          About <mark className="inline-block bg-yellow rounded px-1.5 pt-1 lg:px-2 lg:pt-1.5 lg:pb-0.5">me</mark>
        </h1>
        <p className="text-xl lg:text-2xl text-center mt-2 lg:mt-3 w-auto lg:w-3/5 max-w-xl lg:max-w-2xl ">
          As a developer, React and Next.js are my bread and butter. As a professional, I also have extensive experience
          with <strong className="font-bold">Growth Hacking</strong>, which entails subjects such as web analytics, SEO,
          and A/B testing
        </p>

        <div className="relative z-0 text-md lg:text-lg mt-4 lg:mt-5 text-gray">
          <span className="flex items-center">
            <Location className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
            São Paulo, Brazil
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
        <h2 className="text-center mt-14 lg:mt-20">Skills:</h2>
        <div className="flex flex-col items-center mt-5 lg:mt-6 space-y-6 lg:space-y-7">
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

        <h2 className="text-center mt-16 lg:mt-24">Contact:</h2>
        <div className="flex flex-col items-center mt-7 lg:mt-8">
          <div className="flex items-center space-x-5">
            <Link
              className="inline-flex flex-row items-center hover:underline"
              href={url.social.linkedin}
              rel="noopener noreferrer"
            >
              <LinkedIn className="w-6 h-6 lg:w-7 lg:h-7" />
              <span className="text-lg lg:text-xl ml-3">LinkedIn</span>
            </Link>

            <Link
              className="inline-flex flex-row items-center hover:underline"
              href={url.social.github}
              rel="noopener noreferrer"
            >
              <GitHub className="w-6 h-6 lg:w-7 lg:h-7" /> <span className="text-lg lg:text-xl ml-3">GitHub</span>
            </Link>
          </div>

          <span className="block bg-gray w-36 lg:w-44 h-[1px] my-5 lg:my-7" aria-hidden="true"></span>

          <Link className="inline-flex flex-row items-center hover:underline" href={`mailto:${contact.email}`}>
            <Mail className="w-6 h-6 lg:w-7 lg:h-7" /> <span className="text-lg lg:text-xl ml-3">{contact.email}</span>
          </Link>

          <Link
            className="inline-flex flex-row items-center hover:underline mt-4 lg:mt-5"
            href="/documents/thomas-cv.pdf"
            download
          >
            <Cloud className="w-6 h-6 lg:w-7 lg:h-7" /> <span className="text-lg lg:text-xl ml-3">Download CV</span>
          </Link>
        </div>

        {/* Socials */}
        {/* <h2 className="text-center mt-16 lg:mt-24">Socials:</h2>
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
        </div> */}

        {/* Tooltip */}
        {/* <Tooltip className="hidden lg:block w-64">
          <span className="block text-sm lg:text-md font-bold pr-6">
            This website was built with the following stack:
          </span>
          <ul className="mt-3 space-y-2">
            <li className="text-sm lg:text-md">React</li>
            <li className="text-sm lg:text-md">TypeScript</li>
            <li className="text-sm lg:text-md">Next.js</li>
            <li className="text-sm lg:text-md">Tailwind CSS</li>
          </ul>
          <span className="block text-sm lg:text-md font-bold mt-3">
            Source code can be found{' '}
            <Link className="underline" href={`${url.social.github}/portfolio`} rel="noopener noreferrer">
              here
            </Link>
          </span>
        </Tooltip> */}
      </Container>
    </main>
  )
}
