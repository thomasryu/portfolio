import { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { getArticle } from '@/utils'

import { Container } from '@/components/Container'
import { ContentfulMarkdown } from '@/components/ContentfulMarkdown'

type PageProps = {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { isEnabled } = draftMode()
  const post = await getArticle(params.slug, isEnabled)

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { isEnabled } = draftMode()
  const post = await getArticle(params.slug, isEnabled)

  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <Container>
        <h1>{post.title}</h1>

        <article className="flex flex-col text-lg lg:text-xl max-w-3xl mt-10 lg:mt-14">
          <ContentfulMarkdown content={post.content} />
        </article>
      </Container>
    </main>
  )
}
