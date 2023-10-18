import Image from 'next/image'
import Link from 'next/link'

import { contact } from '@/data/contact'

import { Container } from '@/components/Container'

import Mail from '@/icons/mail.svg'

export default function ContactPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>Contact</h1>

        <div className="mt-5 lg:mt-6">
          <Link className="inline-flex flex-row items-center hover:underline mr-auto" href={`mailto:${contact.email}`}>
            <Mail className="w-6 h-6" /> <span className="text-md lg:text-lg ml-2">{contact.email}</span>
          </Link>
        </div>
      </Container>
    </main>
  )
}
