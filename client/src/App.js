import React, { Component } from 'react'
import axios from 'axios'
import AlbumList from './components/albumList'
import AlbumForm from './components/albumForm'

class App extends Component {
  state = {albums: []}

  componentDidMount() {
    this.fetchAlbums()
  }

  fetchAlbums() {
    fetch('/albums')
    .then(res => res.json())
    .then(albums => this.setState({ albums }))
  }

  handleAddAlbum(album) {
    axios.post('/album', { album })
    .then(response => {
      this.fetchAlbums()
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleRateAlbum(album) {
    axios.put(`/rateAlbum/${album.id}`, {
      rating: album.rating
    })
    .then(response => {
      this.fetchAlbums()
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
       <div className="App container">
         <AlbumForm addAlbum={this.handleAddAlbum.bind(this)} />
         <AlbumList albums={this.state.albums} onRating={this.handleRateAlbum.bind(this)} />
       </div>
    )
  }
}

export default App
