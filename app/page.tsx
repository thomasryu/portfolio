import GitHub from '@/icons/github.svg'
import LinkedIn from '@/icons/linkedin.svg'
import Image from 'next/image'
import Link from 'next/link'

import { url } from '@/data'

import { Container } from '@/components/Container'
import { Tooltip } from '@/components/Tooltip'

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
    label: 'Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'WordPress'],
  },
  {
    label: 'Tools',
    tags: [
      'GitHub',
      'Figma',
      'Jira',
      'Google Tag Manager',
      'Google Analytics',
      'HubSpot',
      'Hotjar',
      'Microsoft Clarity',
    ],
  },
  { label: 'Growth', tags: ['Technical SEO', 'A/B Testing'] },
]

export default function Home() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container className="flex flex-col items-center justify-between">
        {/* Main image */}
        <Image
          className="bg-gradient-to-b from-transparent to-yellow to-70% rounded-full w-48 lg:w-56"
          src="/images/portraits/thomas-transparent.png"
          alt="Thomas"
          width={320}
          height={320}
          priority
        />

        {/* Title and description */}
        <h1 className="text-3xl lg:text-4xl text-center font-bold mt-12 lg:mt-20">
          Hi, my name is <mark className="inline-block bg-yellow rounded px-1 pt-1">Thomas</mark>
        </h1>
        <p className="text-xl lg:text-2xl text-center mt-2 lg:mt-3 w-auto lg:w-1/2 max-w-xl lg:max-w-2xl ">
          I&apos;m a frontend developer with over 6 years of experience, specializing in growth marketing.
        </p>

        {/* Skills */}
        <h2 className="text-2xl lg:text-3xl text-center font-bold mt-16 lg:mt-20">Skills:</h2>
        <div className="flex flex-col items-center mt-4 lg:mt-5 space-y-5 lg:space-y-6">
          {skills.map((skill) => (
            <div className="flex flex-col items-center" key={skill.label}>
              <h3 className="text-lg lg:text-xl text-center font-bold">{skill.label}</h3>
              <div className="flex flex-row justify-center flex-wrap max-w-lg -m-1 mt-0">
                {skill.tags.map((tag) => (
                  <span className="text-white bg-black px-2 py-1 rounded m-1" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Socials */}
        <h2 className="text-2xl lg:text-3xl text-center font-bold mt-16 lg:mt-24">Socials:</h2>
        <div className="flex flex-row mt-5 lg:mt-6 space-x-5 lg:space-x-8">
          {socials.map((social) => (
            <Link
              className="flex flex-row items-center hover:underline"
              href={social.href}
              rel="noopener noreferrer"
              key={social.label}
            >
              <social.icon className="h-6 w-6" /> <span className="text-md lg:text-lg ml-2">{social.label}</span>
            </Link>
          ))}
        </div>

        {/* Tooltip */}
        <Tooltip className="w-64">
          <span className="block text-sm lg:text-md font-bold pr-6">
            This website was built with the following stack:
          </span>
          <ul className="list-disc mt-3 space-y-2">
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
        </Tooltip>
      </Container>
    </main>
  )
}
