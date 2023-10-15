import { chainMiddlewares, withCSP, withLanguages } from '@/middlewares'

const middlewares = [withLanguages, withCSP]
export default chainMiddlewares(middlewares)
