import { MetadataRoute } from 'next'
import { url } from '@/data'

// Dynamically generated robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${url.origin}/sitemap.xml`,
  }
}
