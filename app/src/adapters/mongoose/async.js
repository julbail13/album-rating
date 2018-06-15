import uuid from 'uuid'
import AlbumModel from '../../models/albumModel'

export default {
  async getAlbums() {
    return AlbumModel.find()
  },

  async createAlbum(album) {
    album.id = uuid.v4()
    return new AlbumModel(album).save()
  },

  async rateAlbum(id, rating) {
    const album = await AlbumModel.findOne({ id })
    album.rating = rating
    return album.save()
  }
}
