export type Project = {
  label: 'Website' | 'Misc.'
  name: string
  href: string
  date:
    | string
    | {
        start: string
        end: string
      }

  image: ProjectImage | ProjectImage[]
  description: string
  items?: string[]
  tags: string[]
}

type ProjectImage = {
  type: 'mobile' | 'desktop'
  src: string
  alt: string
}
