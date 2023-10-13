import { Tooltip } from '@/components/Tooltip'
import Image from 'next/image'

import LinkedIn from '@/icons/linkedin.svg'
import GitHub from '@/icons/github.svg'
import { url } from '@/data'

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
    <main className="flex flex-col items-center justify-between px-12 py-16 lg:p-20">
      <Image
        className="rounded-full w-36 lg:w-48"
        src="/images/portraits/thomas.jpeg"
        alt="Thomas"
        width={200}
        height={200}
        priority
      />

      {/* Title and description */}
      <h1 className="text-2xl lg:text-3xl text-center font-bold mt-12 lg:mt-20">Hi, my name is Thomas</h1>
      <p className="text-xl lg:text-2xl text-center mt-5 lg:mt-6 w-auto lg:w-1/2 max-w-xl lg:max-w-2xl ">
        I&apos;m a frontend developer with over 6 years of experience, and over 4 working with Growth Marketing.
      </p>

      {/* Skills */}
      <h2 className="text-2xl lg:text-3xl text-center font-bold mt-12 lg:mt-20">Skills:</h2>
      <div className="flex flex-col items-center mt-5 lg:mt-6 space-y-5">
        {skills.map((skill) => (
          <div className="flex flex-col items-center" key={skill.label}>
            <h3 className="text-lg lg:text-xl text-center font-bold">{skill.label}</h3>
            <div className="flex flex-row justify-center flex-wrap max-w-lg -mb-1">
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
      <h2 className="text-2xl lg:text-3xl text-center font-bold mt-12 lg:mt-20">Socials:</h2>
      <div className="flex flex-row mt-5 lg:mt-6 space-x-5 lg:space-x-8">
        {socials.map((social) => (
          <a
            className="flex flex-row items-center hover:underline"
            href={social.href}
            rel="noopener noreferrer"
            target="_blank"
            key={social.label}
          >
            <social.icon className="h-6 w-6 fill-black" />{' '}
            <span className="text-md lg:text-lg ml-2">{social.label}</span>
          </a>
        ))}
      </div>

      {/* Tooltip */}
      <Tooltip className="w-48 lg:w-52">
        <h5 className="text-sm lg:text-md font-bold">This page is built with the following stack:</h5>
        <ul className="list-disc mt-3 space-y-2">
          <li className="text-sm lg:text-md">React</li>
          <li className="text-sm lg:text-md">TypeScript</li>
          <li className="text-sm lg:text-md">Next.js</li>
          <li className="text-sm lg:text-md">Tailwind CSS</li>
        </ul>
      </Tooltip>
    </main>
  )
}
