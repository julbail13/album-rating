import React, { Component } from 'react'
import AlbumItem from './albumItem'

class AlbumList extends Component {
 
  handleRateAlbum(album) {
    this.props.onRating(album)
  }

  render() {
    let albumItems;
      if(this.props.albums){
        albumItems = this.props.albums.map(album => {
          return (
            <AlbumItem onRating={this.handleRateAlbum.bind(this)} key={album.id} album={album} />
          )
        })
      }
    return (
       <div className="AlbumList">
          <h2>Albums</h2>
          {albumItems}
       </div>
    );
  }
}

export default AlbumList
