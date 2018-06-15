import mongoose from 'mongoose'

const albumSchema = mongoose.Schema({
  id: String,
  title: String,
  artist: String,
  rating: Number
})

const album = mongoose.model('album', albumSchema)

export default album
