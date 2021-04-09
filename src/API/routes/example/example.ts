import { Router } from 'express'

const exampleRouter = Router()

exampleRouter.get('/', (req, res) => {
  res.send('Example!')
})

export default exampleRouter
