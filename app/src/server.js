import bodyParser from 'body-parser'
import express from 'express'
import logger from 'morgan'
import path from 'path'
import config from './config/main'
import routes from './routes'

const app = express()
const PORT = config.port || 3001

app.use(logger('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'twig')

app.listen(PORT)
console.log(`listening on port ${PORT}`) // eslint-disable-line no-console

export default app
