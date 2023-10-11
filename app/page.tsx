import { Tooltip } from '@/components/Tooltip'
import Image from 'next/image'

import LinkedIn from '@/icons/linkedin.svg'
import GitHub from '@/icons/github.svg'
import { url } from '@/data'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image
        className="rounded-full"
        src="/images/portraits/thomas.jpeg"
        alt="Thomas"
        width={200}
        height={200}
        priority
      />

      <h1 className="text-2xl lg:text-3xl text-center font-mono font-bold mt-10 lg:mt-20">Hi, my name is Thomas</h1>

      <p className="text-xl lg:text-2xl text-center mt-4 lg:mt-6 w-64 lg:w-1/2 lg:max-w-2xl ">
        I&apos;m a frontend developer with over 6 years of experience, and over 4 working with Growth Marketing.
      </p>

      <div className="flex flex-row mt-10 lg:mt-16">
        <a
          className="flex flex-row items-center ml-5 lg:ml-8 first:ml-0"
          href={url.social.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn className="h-6 w-6 fill-black" /> <span className="text-md lg:text-lg ml-2 lg:ml-3">LinkedIn</span>
        </a>
        <a
          className="flex flex-row items-center ml-5 lg:ml-8 first:ml-0"
          href={url.social.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub className="h-6 w-6 fill-black" /> <span className="text-md lg:text-lg ml-2 lg:ml-3">GitHub</span>
        </a>
      </div>

      <Tooltip className="w-56 lg:w-80">
        <h5 className="text-sm lg:text-lg font-bold">This page is built with the following stack:</h5>
        <ul className="list-disc mt-3">
          <li className="text-sm lg:text-lg mt-2 first:mt-0">React</li>
          <li className="text-sm lg:text-lg mt-2 first:mt-0">TypeScript</li>
          <li className="text-sm lg:text-lg mt-2 first:mt-0">Next.js</li>
          <li className="text-sm lg:text-lg mt-2 first:mt-0">Tailwind CSS</li>
        </ul>
      </Tooltip>
    </main>
  )
}
