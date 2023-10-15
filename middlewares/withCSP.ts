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
      const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
      const cspHeader = `
        default-src 'self';
        script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
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

      const requestHeaders = new Headers(result.headers) // We use result's headers as base
      requestHeaders.set('x-nonce', nonce)
      requestHeaders.set(
        'Content-Security-Policy',
        cspHeader.replace(/\s{2,}/g, ' ').trim(), // Replace newline characters and spaces
      )

      return NextResponse.next({
        headers: requestHeaders,
        request: {
          headers: requestHeaders,
        },
      })
    }

    return NextResponse.next()
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
