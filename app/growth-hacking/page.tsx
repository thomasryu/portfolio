import { Metadata } from 'next'
import Link from 'next/link'

import { url } from '@/data'
import { contact } from '@/data/contact'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Thomas | Growth Hacking',
  description: 'To contact me about professional inquiries, my e-mail is thomas.sameshima@gmail.com',
}

export default function ContactPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>Growth Hacking</h1>

        <article className="flex flex-col text-lg lg:text-xl max-w-3xl mt-10 lg:mt-14">
          <div className="space-y-6 lg:space-y-7">
            <p>What is growth hacking?</p>
            <p>
              Simply put, it is about{' '}
              <strong>continuously improving the performance and scalability of a website</strong>, ensuring it matches
              a fast and ever-growing brand or company.
            </p>
            <p>For developers, in addition to day-to-day coding, growth hacking also focuses on three main subjects:</p>
          </div>

          <div className="text-md lg:text-lg mt-10 lg:mt-12 space-y-6 lg:space-y-7">
            <div>
              <h3>Website analytics</h3>
              <p className="mt-1 lg:mt-2">
                The process of collecting and analyzing data from a website to be used as a basis to improve user
                experience. Some of the metrics tracked by this process are: Number of page views, visitor demographics,
                and conversion rates.
              </p>
            </div>
            <div>
              <h3>Search engine optimization (SEO)</h3>
              <p className="mt-1 lg:mt-2">
                The process of improving the position of a website in search results–specially Google's–because a higher
                position means users are more likely to visit. This can be achieved by, for example, improving load
                speeds and HTML structure, making the content relevant to the target public, and having other relevant
                websites link yours.
              </p>
            </div>
            <div>
              <h3>A/B testing</h3>
              <p className="mt-1 lg:mt-2">
                The method of comparing two or more variants of a website page, determining which performs better, and
                releasing said version. Users are shown each variant at random, usually evenly split between them. A
                victor is declared based on a statistical analysis, which in turn is based on a goal such as form
                submissions or purchases.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-14 space-y-6 lg:space-y-7">
            <p>
              In this article, we will use this portfolio itself as a basis to show how to apply these three subjects.
              It won't be a complete tutorial, but more of an overview of how growth hacking relates to frontend
              development.
            </p>
          </div>

          {/* <h2 className="mt-12 lg:mt-16">Website Analytics</h2>

          <div className="mt-5 lg:mt-7 space-y-6 lg:space-y-7">
            <p>The easiest to start. If you're using Google Analytics, pagespeed</p>
          </div> */}
        </article>
      </Container>
    </main>
  )
}
