import apiRouter from '../router'
import exampleRouter from './example/example'

apiRouter.use('/example', exampleRouter)

export default apiRouter
