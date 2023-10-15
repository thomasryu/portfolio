import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { MiddlewareFactory } from '@/types'
export const withLogging: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const res = await next(request, _next)
    if (res) {
      res.headers.set('POTATOOOOOOOOOOOOOOOOOOOOOO', 'nosniff')
    }

    return res
  }
}
