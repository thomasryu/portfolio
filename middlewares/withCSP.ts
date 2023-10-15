import { MiddlewareFactory } from '@/types'
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server'

// Adds Content Security Protocol headers to our requests
export const withCSP: MiddlewareFactory = (middleware: NextMiddleware) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    if (!matcher(request)) {
      return middleware(request, event)
    }

    const result = await middleware(request, event)

    if (result) {
      // Instead of altering result.headers directly, we createa a NextResponse
      // from it specially because of the 'script-src nonce', which only when
      // added through a response actually adds the nonce to <script> tags

      // (It was a pain in the ass solving this, reference: https://stackoverflow.com/a/76567353)
      const response = NextResponse.next()

      const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
      const cspHeader = `
        default-src 'self';
        script-src 'nonce-${nonce}';
        style-src 'self' 'nonce-${nonce}';
        img-src 'self' blob: data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        block-all-mixed-content;
        upgrade-insecure-requests;
      `

      response.headers.set('x-nonce', nonce)
      response.headers.set(
        'Content-Security-Policy',
        cspHeader.replace(/\s{2,}/g, ' ').trim(), // Replace newline characters and spaces
      )

      return response
    }
  }
}

const matcher = (request: NextRequest) => {
  /*
    Match all request paths except for the ones starting with:
    - api (API routes)
    - _next/static (static files)
    - _next/image (image optimization files)
    - favicon.ico (favicon file)
  */
  const regex = /\/(api|_next\/static|_next\/image|favicon\.ico).*/g
  const sourceMatch = !request.nextUrl.pathname.match(regex)

  const routerPrefetch = request.headers.has('next-router-prefetch')
  const purposePrefetch = request.headers.get('purpose') === 'prefetch'
  const headersMatch = routerPrefetch || purposePrefetch

  return sourceMatch && !headersMatch
}
