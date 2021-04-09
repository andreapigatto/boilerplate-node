import express from 'express'
import bodyParser from 'body-parser'
import apiRouter from './API/routes'

const app = express()

const PORT = process.env.PORT || 3001

// for POST parameters
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.use('/api', apiRouter)

// true if file is executed
if (require.main === module) {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is up on port: ${PORT}`)
  })
}

export default app
