import { MiddlewareFactory } from '@/types'
import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server'

export const withCSP: MiddlewareFactory = (middleware: NextMiddleware) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
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

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set(
      'Content-Security-Policy',
      cspHeader.replace(/\s{2,}/g, ' ').trim(), // Replace newline characters and spaces
    )

    console.log('-----------dsadsadashdjashjdhasjhjkksjkdhajk')

    return middleware(request, event)
  }
}

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     {
//       source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
//       missing: [
//         { type: 'header', key: 'next-router-prefetch' },
//         { type: 'header', key: 'purpose', value: 'prefetch' },
//       ],
//     },
//   ],
// }