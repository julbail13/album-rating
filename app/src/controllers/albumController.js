import Boom from 'boom'
import mongooseAdapter from '../adapters/mongoose'
import config from '../config/main'

export default
{
  async getAlbums(req, res) {
    console.log('node_env', config.node_env)
    const albums = await mongooseAdapter.getAlbums()
    return res.status(200).send(albums)
  },
  async createAlbum(req, res) {
    if (!req.body.album.title) throw Boom.badData('createAlbum needs an album')
    if (!req.body.album.artist) throw Boom.badData('createAlbum needs an artist')

    const { album } = req.body
    const { id } = await mongooseAdapter.createAlbum(album)

    return res.status(200).send({ id })
  },
  async rateAlbum(req, res) {
    if (!req.body.rating) throw Boom.badData('rateAlbum needs a rating')
    if (!req.params.uuid) throw Boom.badData('rateAlbum needs a uuid')

    const { rating } = req.body
    const { uuid } = req.params
    const { id } = await mongooseAdapter.rateAlbum(uuid, rating)

    return res.status(200).send({ id })
  }
}
