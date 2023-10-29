export const POST_GRAPHQL_ARTICLE_FIELDS = `
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

export const POST_GRAPHQL_GALLERY_FIELDS = `
  imagesCollection {
    items {
      url
      description
      width
      height
    }
  }
`
