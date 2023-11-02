import { chainMiddlewares, withCSP } from '@/middlewares'

import { MiddlewareFactory } from './types'

// withCSP currently disabled due to a bug preventing "nonce"
// from being added to script tags in production (https://github.com/vercel/next.js/issues/55638)

const middlewares: MiddlewareFactory[] = []
export default chainMiddlewares(middlewares)
