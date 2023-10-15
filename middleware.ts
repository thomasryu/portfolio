import { stackMiddlewares, withCSP } from '@/middlewares'
import { withLogging } from './middlewares/withLogging'

const middlewares = [withLogging, withCSP]
export default stackMiddlewares(middlewares)
