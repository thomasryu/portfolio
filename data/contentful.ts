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

export const POST_GRAPHQL_WORK_FIELDS = `
  label
  title
  startDate
  endDate

  imagesCollection {
    items {
      url
      description
      width
      height
    }
  }

  description
  items
  tags

  href
`
