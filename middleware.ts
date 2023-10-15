import { stackMiddlewares, withCSP } from '@/middlewares'

const middlewares = [withCSP]
export default stackMiddlewares(middlewares)
