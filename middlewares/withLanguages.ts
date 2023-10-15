import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { MiddlewareFactory } from '@/types'

export const withLanguages: MiddlewareFactory = (middleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const res = await middleware(request, _next)
    if (res) {
      res.headers.set('POTATOOOOOOOOOOOOOOOOOOOOOO', 'nosniff')
      return NextResponse.next(res)
    }

    return NextResponse.next()
  }
}
