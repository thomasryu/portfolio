const POST_GRAPHQL_FIELDS = `
  slug

  metaTitle
  metaDescription

  title
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`

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
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    preview,
  )

  return extractArticle(entry)
}
