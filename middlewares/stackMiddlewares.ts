import { NextMiddleware, NextResponse } from 'next/server'
import { MiddlewareFactory } from '@/types'

export function stackMiddlewares(
  middlewares: MiddlewareFactory[] = [],
  index = 0,
): NextMiddleware {
  const currentMiddleware = middlewares[index]
  if (currentMiddleware) {
    const nextMiddleware = stackMiddlewares(middlewares, index + 1)
    return currentMiddleware(nextMiddleware)
  }
  return () => NextResponse.next()
}
