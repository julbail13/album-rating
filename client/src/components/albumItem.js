import React, { Component } from 'react'

class AlbumItem extends Component {

  static defaultProps = {
    ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  handleChange(event) {
    this.props.onRating({rating: event.target.value, id: this.props.album.id} )
  }

  render() {
    let ratingOptions = this.props.ratings.map(rating => {
         return <option key={rating} value={rating}>{rating}</option>
    })
    return (
      <div className="AlbumItem row mt-3">
        <div className="col-4">
          <b>Album: </b>{this.props.album.title}
        </div>
        <div className="col-4">
          <b>Artist: </b>{this.props.album.artist}
        </div>
        <div className="col-4 col-md-2">
          <select ref="rating" value={this.props.album.rating} onChange={this.handleChange.bind(this)} className="form-control">
            {ratingOptions}
          </select>
        </div>
       </div>
    )
  }
}

export default AlbumItem
