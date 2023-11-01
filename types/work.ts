import { Image } from '@/types'

export type Work = {
  label: string
  title: string
  href: string
  date: {
    start: string
    end: string
  }

  images: Image[]

  description: string
  items?: string[]
  tags: string[]
}

export type Article = {
  icon: any
  label: string
  href: string
}
