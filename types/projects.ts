export type Project = {
  label: 'Website' | 'Personal'
  name: string
  href: string
  date:
    | string
    | {
        start: string
        end: string
      }

  images: ProjectImage | ProjectImage[]
  description: string
  items?: string[]
  tags: string[]
}

type ProjectImage = {
  type: 'mobile' | 'desktop'
  src: string
  alt: string
}
