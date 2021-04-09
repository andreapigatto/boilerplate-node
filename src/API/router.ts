import { Router } from 'express'
import asyncMiddleware from './utils'

const apiRouter = Router()

apiRouter.use(
  asyncMiddleware(async (req, res, next) => {
    // console.log("DO SOMETHING")
    next()
  })
)

export default apiRouter
