import { Metadata } from 'next'
import Link from 'next/link'

import { url } from '@/data'
import { contact } from '@/data/contact'

import { Container } from '@/components/Container'

import Cloud from '@/icons/cloud-download.svg'
import GitHub from '@/icons/github.svg'
import LinkedIn from '@/icons/linkedin.svg'
import Mail from '@/icons/mail.svg'

export const metadata: Metadata = {
  title: 'Thomas | Contact',
  description: 'To contact me about professional inquiries, my e-mail is thomas.sameshima@gmail.com',
}

export default function ContactPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>Contact</h1>

        <div className="flex flex-col space-y-5 lg:space-y-7 mt-10 lg:mt-14">
          <Link className="inline-flex flex-row items-center hover:underline mr-auto" href={`mailto:${contact.email}`}>
            <Mail className="w-6 h-6 lg:w-7 lg:h-7" /> <span className="text-lg lg:text-xl ml-3">{contact.email}</span>
          </Link>

          <Link
            className="inline-flex flex-row items-center hover:underline mr-auto"
            href={url.social.linkedin}
            rel="noopener noreferrer"
          >
            <LinkedIn className="w-6 h-6 lg:w-7 lg:h-7" />{' '}
            <span className="text-lg lg:text-xl ml-3">/in/thomasryu</span>
          </Link>

          <Link
            className="inline-flex flex-row items-center hover:underline mr-auto"
            href={url.social.github}
            rel="noopener noreferrer"
          >
            <GitHub className="w-6 h-6 lg:w-7 lg:h-7" /> <span className="text-lg lg:text-xl ml-3">@thomasryu</span>
          </Link>
        </div>

        <span className="block bg-gray w-36 lg:w-44 h-[1px] my-7 lg:my-8" aria-hidden="true"></span>

        <Link
          className="inline-flex flex-row items-center hover:underline mr-auto"
          href="/documents/thomas-cv.pdf"
          download
        >
          <Cloud className="w-6 h-6 lg:w-7 lg:h-7" /> <span className="text-lg lg:text-xl ml-3">Download CV</span>
        </Link>
      </Container>
    </main>
  )
}
