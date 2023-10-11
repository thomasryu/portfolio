import { Tooltip } from '@/components/Tooltip'
import Image from 'next/image'

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

      <p className="text-xl lg:text-2xl text-center mt-2 lg:mt-4 w-64 lg:w-1/2 lg:max-w-2xl ">
        I&apos;m a frontend developer with over 6 years of experience, and over 4 working with Growth Marketing.
      </p>

      <Tooltip className="w-60 lg:w-96">
        <h5 className="text-md lg:text-xl font-bold">This page is built with the following stack:</h5>
        <ul className="list-disc mt-5">
          <li className="text-sm lg:text-xl mt-2 first:mt-0">React</li>
          <li className="text-sm lg:text-xl mt-2 first:mt-0">TypeScript</li>
          <li className="text-sm lg:text-xl mt-2 first:mt-0">Next.js</li>
          <li className="text-sm lg:text-xl mt-2 first:mt-0">Tailwind CSS</li>
        </ul>
      </Tooltip>
    </main>
  )
}
