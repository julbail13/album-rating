import mongoose from 'mongoose'
import serviceMongoose from '../src/adapters/mongoose/'
import uuid from 'uuid'

const service = serviceMongoose

describe('Album', () => {
  test('CreateAlbum', () => {
    const title = 'albumTest'
    const artist = 'artistTest'
    const data = {title, artist}
    service.createAlbum(data).then((result)=>{
      expect (result.id).not.toBeNull()
      expect (result.title).toBe(title)
      expect (result.artist).toBe(artist)
    })
  }),
  test('rateAlbum', () => {
    const title = 'albumTest'
    const artist = 'artistTest'
    const rating = 4
    const data = {title, artist}
    service.createAlbum(data).then((result)=>{
      service.rateAlbum(result.id, rating).then((rateResult)=>{
        expect (rateResult.id).toBe(result.id)
        expect (rateResult.rating).toBe(rating)
      })
    })
  })
  test('getAlbums', () => {
    service.getAlbums().then((result)=>{
      expect (result.length).toBeGreaterThan(0)
    })
  })
})
