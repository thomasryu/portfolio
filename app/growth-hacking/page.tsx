import { Metadata } from 'next'
import Link from 'next/link'

import { url } from '@/data'
import { contact } from '@/data/contact'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Thomas | Contact',
  description: 'To contact me about professional inquiries, my e-mail is thomas.sameshima@gmail.com',
}

export default function ContactPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>Growth Hacking</h1>

        <div className="flex flex-col text-lg lg:text-xl space-y-5 lg:space-y-7 mt-10 lg:mt-14">
          <p className="">
            What is growth hacking? Simply put, it is about{' '}
            <strong>continuously improving the performance and scalability of a product</strong> (e.g., a website),
            ensuring it matches a fast and ever-growing brand or company.
          </p>

          <p>For developers, growth hacking focuses on 3 main subjects:</p>

          <ul>
            <li>Website analytics</li>
            <li>Search engine optimization (SEO)</li>
            <li>A/B testing</li>
          </ul>
        </div>
      </Container>
    </main>
  )
}
