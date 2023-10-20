import { MetadataRoute } from 'next'

import { url } from '@/data'

// Dynamically generated sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${url.origin}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${url.origin}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${url.origin}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${url.origin}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]
}
