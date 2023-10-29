export type ContentfulAsset = {
  sys: {
    id: string
  }
  url: string
  description: string
}

export type ContentfulRichTextAsset = {
  id: string
  assets?: ContentfulAsset[]
}

export type ContentfulAssetLink = {
  block: ContentfulAsset[]
}

export type ContentfulContent = {
  json: any
  links: {
    assets: ContentfulAssetLink
  }
}

export type ContentfulImage = {
  url: string
  description: string
  width: number
  height: number
}
