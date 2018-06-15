import Boom from 'boom'
import express from 'express'
import albumController from './controllers/albumController'
import asyncMiddleware from './lib/asyncMiddleware'
import errorMiddleware from './lib/errorMiddleware'

const router = express.Router()

router.get('/health', (req, res) => {
  res.send({ status: 200 })
})

router.get('/albums', asyncMiddleware(albumController.getAlbums))
router.put('/rateAlbum/:uuid', asyncMiddleware(albumController.rateAlbum))
router.post('/album', asyncMiddleware(albumController.createAlbum))

router.use(() => {
  throw Boom.notFound()
})

router.use(errorMiddleware)

export default router
