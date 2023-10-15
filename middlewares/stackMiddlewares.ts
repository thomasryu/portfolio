import { NextMiddleware, NextResponse } from 'next/server'
import { MiddlewareFactory } from '@/types'

// Utility function that nests our middleware HOCs
// calling them sequentially
export function stackMiddlewares(
  middlewares: MiddlewareFactory[] = [],
  index = middlewares.length - 1,
): NextMiddleware {
  const currentMiddleware = middlewares[index]
  if (currentMiddleware) {
    const nextMiddleware = stackMiddlewares(middlewares, index - 1)
    return currentMiddleware(nextMiddleware)
  }
  return () => NextResponse.next()
}
