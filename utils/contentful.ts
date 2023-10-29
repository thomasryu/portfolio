import {
  POST_GRAPHQL_ARTICLE_FIELDS,
  POST_GRAPHQL_GALLERY_FIELDS,
} from '@/data'
import { ContentfulImage, Image } from '@/types'

export const fetchGraphQL = async (
  query: string,
  preview = false,
): Promise<any> => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ['posts'] },
    },
  ).then((response) => response.json())
}

const extractArticle = (fetchResponse: any): any => {
  return fetchResponse?.data?.articleCollection?.items?.[0]
}

const extractGallery = (fetchResponse: any): Image[] => {
  const items: ContentfulImage[] =
    fetchResponse?.data?.galleryCollection?.items?.[0]?.imagesCollection.items
  return items.map((item: ContentfulImage) => ({
    src: item.url,
    alt: item.description,
    size: {
      width: item.width,
      height: item.height,
    },
  }))
}

export const getArticle = async (
  slug: string,
  preview: boolean,
): Promise<any> => {
  const entry = await fetchGraphQL(
    `query {
        articleCollection(where: { slug: "${slug}" }, preview: ${
          preview ? 'true' : 'false'
        }, limit: 1) {
          items {
            ${POST_GRAPHQL_ARTICLE_FIELDS}
          }
        }
      }`,
    preview,
  )

  return extractArticle(entry)
}

export const getGallery = async (
  title: string,
  preview: boolean,
): Promise<any> => {
  const entry = await fetchGraphQL(
    `query {
        galleryCollection(where: { title: "${title}" }, preview: ${
          preview ? 'true' : 'false'
        }, limit: 1) {
          items {
            ${POST_GRAPHQL_GALLERY_FIELDS}
          }
        }
      }`,
    preview,
  )

  return extractGallery(entry)
}
